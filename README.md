# 📝 Blog App

Welcome to **Blog App**, a full-stack web application for creating, sharing, and managing blog posts.  
Built with the **MERN stack**, it offers modern features like **Google OAuth authentication** and **Redux Toolkit** for state management.

### 🌐 **Website URL:** https://blog-app-p6ej.onrender.com/

---

## ✨ Features

- **🔐 User Authentication** – Secure sign-up and sign-in using **Google OAuth**.
- **✍️ Create & Manage Posts** – Authenticated users can create, edit, and delete their own blog posts.
- **📦 State Management** – Powered by **Redux Toolkit** for predictable and efficient state handling.
- **📱 Responsive Design** – Clean, intuitive UI that works seamlessly on desktop and mobile.
- **⚙️ Full-Stack Functionality** – Robust backend API with a dynamic frontend.

---

## 🚀 Tech Stack

### **Frontend**
- ⚛ **React** – JavaScript library for building user interfaces.
- 🛠 **Redux Toolkit** – Official, batteries-included toolset for Redux.
- 🎨 **Tailwind CSS + Flowbite** – Utility-first CSS framework for rapid UI development.

### **Backend**
- 🟢 **Node.js** – JavaScript runtime for server-side development.
- 🚂 **Express** – Fast, minimalist web framework for Node.js.
- 🍃 **MongoDB** – NoSQL database for storing application data.
- 🔑 **Google OAuth** – Secure authentication using Google services.

---

## 🏃 Getting Started

Follow these steps to run the project locally.

### **Prerequisites**
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- MongoDB Atlas account or local MongoDB instance

---

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/munnavuyyuru/Blog-app.git
   cd Blog-app
2. **Install dependencies for the backend***
   ```bash
   cd backend
   npm install
3. **Install dependencies for the frontend**
   ```bash
   cd frontend
   npm install
   

 ### **Environment Variables**
 Create a `.env` file in the `backend` directory with the following variables:
 ```bash
 MONGO_URI=<Your MongoDB connection string>
 GOOGLE_CLIENT_ID=<Your Google Client ID>
 JWT_SECRET=<A strong, random secret for JWT>
 ```

---

### **Running the Application**

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev # or npm start
2. **Start the frontend***
   ```bash
   cd frontend
   npm run dev
   
- The application will now be running on http://localhost:5173 (or the port specified in your frontend configuration).
   
---
### 💡 **Contributing**
- Feel free to contribute! 
- Just fork this repo, create an issue, and submit a pull request (PR). 
- We welcome improvements, bug fixes, and new ideas—every bit helps!

