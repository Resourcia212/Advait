import fs from 'fs';

function extractJpegsFromPdf() {
  const buf = fs.readFileSync('Brochure (PDF).pdf');
  const outDir = 'public/assets/clinical';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let pos = 0;
  let count = 0;

  while (pos < buf.length - 4) {
    // Look for JPEG SOI marker FF D8 FF
    if (buf[pos] === 0xFF && buf[pos + 1] === 0xD8 && buf[pos + 2] === 0xFF) {
      const start = pos;
      let end = -1;
      for (let i = start + 2; i < buf.length - 1; i++) {
        // Look for JPEG EOI marker FF D9
        if (buf[i] === 0xFF && buf[i + 1] === 0xD9) {
          end = i + 2;
          break;
        }
      }
      if (end !== -1 && end - start > 1000) {
        count++;
        const jpegBuf = buf.subarray(start, end);
        const fileName = `${outDir}/page-${count}.jpg`;
        fs.writeFileSync(fileName, jpegBuf);
        console.log(`Saved JPEG #${count}: ${jpegBuf.length} bytes -> ${fileName}`);
        pos = end;
        continue;
      }
    }
    pos++;
  }
  console.log(`Extracted total ${count} JPEGs from PDF`);
}

extractJpegsFromPdf();
