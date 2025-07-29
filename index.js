import { PKPass } from "passkit-generator";
import fs from "node:fs/promises";
import readline from "node:readline";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

function prompt(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(query, answer => {
    rl.close();
    resolve(answer);
  }));
}

// Get the current directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createPass() {
  try {
    const studentName = await prompt("Enter student name: ");
    const studentID = await prompt("Enter student ID: ");

    // Format the student's name (First Last -> first_last)
    const formattedName = studentName.toLowerCase().replace(/\s+/g, '_');

    const wwdr = await fs.readFile("./certs/wwdr.pem");
    const signerCert = await fs.readFile("./certs/signerCert.pem");
    const signerKey = await fs.readFile("./certs/signerKey.pem");

    // Read pass.json and update dynamically
    const passJsonPath = `${__dirname}/myModel.pass/pass.json`;
    const passJson = JSON.parse(await fs.readFile(passJsonPath, "utf8"));

    // Update the secondaryFields with dynamic student data
    passJson.generic.secondaryFields = [
      {
        key: "id",
        label: "Student ID",
        value: studentID
      },
      {
        key: "name",
        label: "Student Name",
        value: studentName
      }
    ];

    // Save the updated pass.json back to the model folder
    await fs.writeFile(passJsonPath, JSON.stringify(passJson, null, 2), "utf8");

    // Generate pass using updated pass.json
    const pass = await PKPass.from({
      model: "./myModel.pass",
      certificates: {
        wwdr,
        signerCert,
        signerKey
      }
    });

    pass.setBarcodes({
      message: studentID,
      format: "PKBarcodeFormatQR",
      messageEncoding: "iso-8859-1"
    });

    // Create the final pass filename using the convention
    const filename = `final_passes/temrink_${formattedName}_${studentID}.pkpass`;

    const buffer = pass.getAsBuffer();
    await fs.writeFile(filename, buffer);

    console.log(`✅ Pass generated: ${filename}`);
  } catch (err) {
    console.error("❌ Error generating pass:", err);
  }
}

createPass();
