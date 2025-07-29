const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImage = path.join(__dirname, 'source.png.jpg');
const outputDir = path.join(__dirname, 'model', 'Generic');

// Create icon.png (29x29) and icon@2x.png (58x58)
sharp(sourceImage)
  .resize(29, 29)
  .toFile(path.join(outputDir, 'icon.png'))
  .then(() => console.log('icon.png generated'))
  .catch(err => console.error(err));

sharp(sourceImage)
  .resize(58, 58)
  .toFile(path.join(outputDir, 'icon@2x.png'))
  .then(() => console.log('icon@2x.png generated'))
  .catch(err => console.error(err));

// Create logo.png (160x50) and logo@2x.png (320x100)
sharp(sourceImage)
  .resize(160, 50)
  .toFile(path.join(outputDir, 'logo.png'))
  .then(() => console.log('logo.png generated'))
  .catch(err => console.error(err));

sharp(sourceImage)
  .resize(320, 100)
  .toFile(path.join(outputDir, 'logo@2x.png'))
  .then(() => console.log('logo@2x.png generated'))
  .catch(err => console.error(err));

// Create thumbnail.png (90x90)
sharp(sourceImage)
  .resize(90, 90)
  .toFile(path.join(outputDir, 'thumbnail.png'))
  .then(() => console.log('thumbnail.png generated'))
  .catch(err => console.error(err));
