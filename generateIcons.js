/**
 * generateIcons.js
 */

import sharp from "sharp";
import path from "path";
import fs from "fs";

// 1. Update this source image path to match where your original logo is located on your system.
// For example, if your logo is in "C:\Users\TejaswaiSharma\Documents\Logo_Pic", use double backslashes or forward slashes:
const sourceImagePath = "C:\\Users\\TejaswaiSharma\\Documents\\Logo_Pic\\business_icon.png";

// 2. Destination folder inside your test folder where your pass model is stored (e.g., "./myModel.pass")
const passModelFolder = path.join(process.cwd(), "myModel.pass");

// Ensure the destination folder exists
if (!fs.existsSync(passModelFolder)) {
  fs.mkdirSync(passModelFolder, { recursive: true });
}

async function generateApplePassIcons() {
  try {
    // ICON SIZES required by Apple Wallet
    const icons = [
      { filename: "icon.png", width: 29, height: 29 },
      { filename: "icon@2x.png", width: 58, height: 58 },
      { filename: "icon@3x.png", width: 87, height: 87 },
      // Additional sizes (like logo) can be added if needed:
      // { filename: "logo.png", width: 160, height: 50 },
      // { filename: "logo@2x.png", width: 320, height: 100 },
    ];

    // Generate a resized icon for each specification
    for (const icon of icons) {
      const outputPath = path.join(passModelFolder, icon.filename);
      await sharp(sourceImagePath)
        .resize(icon.width, icon.height, { fit: "contain" })
        .toFormat("png")
        .toFile(outputPath);

      console.log(`✓ Created: ${outputPath}`);
    }

    console.log("All icons generated successfully!");
  } catch (error) {
    console.error("Error generating icons:", error);
  }
}

// Execute the function
generateApplePassIcons();
