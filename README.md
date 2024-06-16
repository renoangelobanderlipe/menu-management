# 🍽️ Menu Management App

Empower your restaurant with an intuitive menu management tool. This React application streamlines the creation, editing, and tracking of your menu items.

## ✨ Features

- **Intuitive Interface:** Easily create, edit, and delete menu items.
- **Categorization:** Organize items into meaningful categories.
- **Item Variations:** Define options for items with multiple choices (e.g., sizes for drinks).
- **Cost & Pricing:** Set prices and track costs to understand profit margins.
- **Stock Management:** Keep track of item availability and prevent shortages.
- **Secure Cloud Storage:** Your menu data is safely stored in Firebase Realtime Database.

## 🚀 Getting Started

### Prerequisites

- **Node.js:** [https://nodejs.org/](https://nodejs.org/)
- **Firebase Account:** [https://console.firebase.google.com/](https://console.firebase.google.com/)
  - Create a Realtime Database and Storage instance.
- **VS Code** (or your preferred code editor)

### Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/renoangelobanderlipe/menu-management
   ```
2. Navigate to the project directory:
   ```bash
   cd menu-management
   ```
3. Open your IDE terminal (VS Code: Ctrl + J or Ctrl + `)
4. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example ./.env
   ```
5. Install dependencies:
   ```bash
   npm install or npm i
   ```
6. Run the development server:
   ```bash
   npm run dev
   ```
7. Access the project via the provided URL after running `npm run dev`.
   ```bash
   http://localhost/5173
   ```
8. Format code using Prettier: (Optional)
   ```bash
   npx prettier . --write
   ```
9. Happy Coding!

### 🚀 Deployment with Vercel

1. Create a Vercel Account: Sign up at https://vercel.com/
2. Link GitHub: Connect your GitHub repository.
3. Add Project: Click "Add New" -> "Project", select your repository, and import.
4. Deploy: Follow the instructions, adding environment variables if needed.
