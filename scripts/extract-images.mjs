import fs from 'fs';
import sharp from 'sharp';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

async function extractImagesFromPDF() {
  const data = new Uint8Array(fs.readFileSync('Brochure (PDF).pdf'));
  const doc = await pdfjs.getDocument({ data }).promise;
  const outDir = 'public/assets/clinical';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let imgCount = 0;

  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const ops = await page.getOperatorList();

    for (let i = 0; i < ops.fnArray.length; i++) {
      if (ops.fnArray[i] === pdfjs.OPS.paintImageXObject) {
        const objId = ops.argsArray[i][0];
        try {
          const imgObj = await page.objs.get(objId);
          if (imgObj && imgObj.data) {
            imgCount++;
            const { width, height, data: imgData, kind } = imgObj;
            console.log(`Found image: width=${width}, height=${height}, kind=${kind}`);

            // If RGBA or RGB
            if (width > 50 && height > 50) {
              const channels = (imgData.length === width * height * 4) ? 4 : (imgData.length === width * height * 3 ? 3 : 1);
              if (channels === 3 || channels === 4 || channels === 1) {
                await sharp(Buffer.from(imgData), {
                  raw: {
                    width,
                    height,
                    channels
                  }
                })
                .jpeg({ quality: 90 })
                .toFile(`${outDir}/extracted-page${p}-img${imgCount}-${width}x${height}.jpg`);
                console.log(`Saved: page${p}-img${imgCount}`);
              }
            }
          }
        } catch (e) {
          // skip
        }
      }
    }
  }
  console.log(`Extracted total images: ${imgCount}`);
}

extractImagesFromPDF().catch(console.error);
