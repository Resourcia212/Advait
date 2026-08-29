import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

async function extract() {
  const pdfPath = 'Brochure (PDF).pdf';
  if (!fs.existsSync(pdfPath)) {
    console.log('PDF not found');
    return;
  }

  const outputDir = 'public/assets/clinical';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjs.getDocument({ data }).promise;
  console.log(`PDF loaded. Total pages: ${doc.numPages}`);

  for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 3.0 }); // 3x high resolution

    // Render using node canvas or sharp
    // Since node canvas might not be precompiled, let's check operatorList
    const ops = await page.getOperatorList();
    console.log(`Page ${pageNum} operator list count: ${ops.fnArray.length}`);
  }
}

extract().catch(console.error);
