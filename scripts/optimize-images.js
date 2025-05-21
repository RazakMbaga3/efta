const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.avif'].includes(ext)) return;
  
  const outputPath = inputPath.replace(ext, '.webp');
  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);
}

async function processDirectory(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      await convertToWebP(fullPath).catch(console.error);
    }
  }
}

processDirectory(path.join(process.cwd(), 'public', 'images'))
  .catch(console.error);
