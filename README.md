# Apple Wallet Pass Generator for Attendance System

This project focuses on generating Apple Wallet passes (`.pkpass`) as part of a broader attendance management system developed under [Temrink](https://www.temrink.com). The passes enable users to check in using their iPhones or Apple Watches, making attendance tracking seamless, contactless, and efficient.

---

## 📌 Purpose

This repository specifically handles:
- Generation of Apple Wallet-compatible `.pkpass` files
- Embedding custom metadata (e.g., student name, QR code)
- Signing passes with Apple certificates for Wallet compatibility
- Generating passes dynamically for distribution via chatbot or web app

The pass generation is a **key component** of the [Temrink Attendance Chatbot System](https://github.com/tjtemrink) which also includes check-in validation, QR code scanning, and reporting features.

---

## 🔧 Technologies Used

- **Node.js / JavaScript**
- **Apple Wallet PassKit**
- **Apple Developer Certificates**
- **QR Code Embedding**
- **Custom Assets & Icons**
- **VS Code** for development
- **GitHub** for version control

---

## 📁 Project Structure
attendance-pass-chatbot/
│
├── certs/ # Signing certificates (Apple Dev certs, keys)
├── final_passes/ # Output .pkpass files
├── model/Generic/ # Base pass template and assets
├── generateAssets.js # Handles pass fields and barcode data
├── generateIcons.js # Dynamically creates icon images
├── index.js # Main entry point for generating passes
├── pass.json # Pass design and structure
├── source.png # Sample asset/logo
├── package.json / lock # Dependencies and config
└── README.md # This file

---

## 🚀 How to Run Locally

> ⚠️ You must have valid Apple Developer credentials and PassKit certificates to generate signed passes.

### 1. Clone the repo
```bash
git clone https://github.com/tjtemrink/attendance-pass-chatbot.git
cd attendance-pass-chatbot
1. npm install
2.Generate a pass: node index.js

🧠 Part of the Temrink Attendance System
This pass generator is one module of the full Temrink Attendance Chatbot solution, which includes:

QR-based check-in & tracking

Chatbot-driven UI

Azure Cosmos DB storage

Integration with Apple Wallet and Microsoft systems

👤 Author
Created by Tejaswai Sharma
GitHub: @tjtemrink
Co-founder of Temrink

📜 License
This project is open-sourced under the MIT License.


