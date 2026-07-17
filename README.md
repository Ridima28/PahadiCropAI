# 🌾 Pahadi Crop AI

An AI-powered chatbot designed to assist **Uttarakhand farmers** in identifying crop diseases and receiving instant agricultural guidance. The application leverages **Google Gemini AI** to analyze crop images and answer farming-related queries, helping farmers make informed decisions quickly.

---

## 📖 Project Overview

Pahadi Crop AI is a full-stack web application that enables farmers to:

- 📸 Upload crop images for disease identification.
- 🤖 Chat with an AI assistant in natural language.
- 🌱 Get disease diagnosis and treatment suggestions.
- 💬 Ask farming-related questions and receive AI-generated responses.
- 🔐 Sign in securely using Google OAuth.

The goal is to make modern AI technology accessible to farmers in Uttarakhand through a simple and intuitive interface.

---

## ✨ Features

- AI-powered crop disease detection
- Interactive chatbot using Google Gemini API
- Google OAuth authentication
- Responsive and user-friendly interface
- Chat history support
- Secure backend with JWT authentication
- MongoDB database integration
- Modern React frontend with Tailwind CSS

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js, Tailwind CSS |
| Backend |  Express.js |
| Database | MongoDB |
| Authentication | JWT |
| AI Model | Google Gemini API |
| Deployment | Vercel |

---

# 📂 Project Structure

```text
project-root/
│
├── Backend/
│   ├── configs/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middlewares/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── vercel.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AgriAuthLayout.jsx
│   │   │   ├── ChatBox.jsx
│   │   │   ├── Message.jsx
│   │   │   └── SideBar.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── pages/
│   │   │   ├── loading.jsx
│   │   │   ├── login.jsx
│   │   │   └── MainChat.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/pahadi-crop-ai.git
cd pahadi-crop-ai
```

---

### 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd ../Frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd Backend
npm run dev
```

---

### Start Frontend

```bash
cd Frontend
npm run dev
```

The application will be available at:

```
Frontend: http://localhost:3000

Backend: http://localhost:3000
```

---

## 📸 How It Works

1. User signs in using email id.
2. Authentication is verified using JWT.
3. User asks a farming question.
4. Backend sends the request to the Gemini API.
5. AI analyzes the query.
6. Response is displayed in the chatbot interface.

---

## 🔒 Authentication Flow

```text
User
   │
   ▼
Email registration
   │
   ▼
Backend Verification
   │
   ▼
JWT Token Generated
   │
   ▼
Protected API Routes
```

---
## Why MongoDB?

- Flexible document-based database with a schema-less design.
- Integrates seamlessly with the MERN stack (MongoDB, Express.js, React, Node.js).
- Stores JSON-like documents, simplifying data handling in JavaScript.
- Easily scalable for growing users and AI-generated data.
- Allows quick addition of new features without major database changes.

  
## 🗄️ Database Schema

```text
+----------------------------------+
|              User                |
+----------------------------------+
| _id        : ObjectId (PK)       |
| name       : String              |
| email      : String (Unique)     |
| password   : String (Hashed)     |
+----------------------------------+
```

---

## 🚀 Future Enhancements

- Voice-based interaction in Hindi and regional languages
- Weather-based crop recommendations
- Fertilizer recommendation system
- Pest identification
- Multi-language chatbot support
- Farmer dashboard
- Crop health history
- Offline support
- 

## 📄 License

This project is licensed under the **MIT License**.

---

## 👩‍💻 Author

**Ridima**

AI Assisted Full Stack Development Intern

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
