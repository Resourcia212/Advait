import fs from 'fs';
import zlib from 'zlib';
import sharp from 'sharp';

function decodeFlateStreams() {
  const buf = fs.readFileSync('Brochure (PDF).pdf');
  const outDir = 'public/assets/clinical';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const str = buf.toString('latin1');
  const streamRegex = /<<([^>]*)>>\s*stream\r?\n([\s\S]*?)\r?\nendstream/g;
  let match;
  let idx = 0;

  while ((match = streamRegex.exec(str)) !== null) {
    idx++;
    const dict = match[1];
    const streamData = Buffer.from(match[2], 'latin1');
    console.log(`Stream #${idx}: dict=${dict.substring(0, 100).replace(/\n/g, ' ')}, length=${streamData.length}`);

    if (dict.includes('/FlateDecode')) {
      try {
        const decompressed = zlib.inflateSync(streamData);
        console.log(`  -> Decompressed: ${decompressed.length} bytes`);

        // Check if decompressed has JPEG markers or image data
        if (dict.includes('/Subtype /Image') || dict.includes('/Width')) {
          const wMatch = dict.match(/\/Width\s+(\d+)/);
          const hMatch = dict.match(/\/Height\s+(\d+)/);
          const bpcMatch = dict.match(/\/BitsPerComponent\s+(\d+)/);
          const csMatch = dict.match(/\/ColorSpace\s+(\/\w+|\[[^\]]+\])/);

          const width = wMatch ? parseInt(wMatch[1], 10) : 0;
          const height = hMatch ? parseInt(hMatch[1], 10) : 0;
          const bpc = bpcMatch ? parseInt(bpcMatch[1], 10) : 8;

          console.log(`  -> Image dimensions: ${width}x${height}, bpc=${bpc}, cs=${csMatch ? csMatch[1] : 'unknown'}`);

          if (width > 50 && height > 50) {
            const channels = decompressed.length === width * height * 3 ? 3 : (decompressed.length === width * height * 4 ? 4 : (decompressed.length === width * height ? 1 : 0));
            if (channels > 0) {
              sharp(decompressed, { raw: { width, height, channels } })
                .jpeg({ quality: 92 })
                .toFile(`${outDir}/page-image-${idx}-${width}x${height}.jpg`)
                .then(() => console.log(`  -> Saved page-image-${idx}-${width}x${height}.jpg`))
                .catch((e) => console.log('sharp error:', e.message));
            }
          }
        }
      } catch (e) {
        // console.log(`  -> inflate error: ${e.message}`);
      }
    }
  }
}

decodeFlateStreams();
