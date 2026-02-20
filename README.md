# Backend Authentication Service

A backend authentication service built using Node.js, TypeScript, Express, and MongoDB.  
This project implements user registration and login with secure password hashing and JWT-based authentication.

This repository represents **Phase 1 – Project Setup & Authentication Foundation**.

---

##  Features (Phase 1)

- Node.js project with TypeScript
- Clean folder structure
- User registration and login APIs
- Password hashing using bcrypt
- JWT-based authentication
- MongoDB integration using Mongoose
- Environment variable configuration using dotenv
- Health check endpoint
- Postman collection for API testing

---

##  Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- ts-node-dev

---

## 📁 Project Structure

```
src/
├── controllers/
│   └── auth.controller.ts
├── routes/
│   └── auth.routes.ts
├── models/
│   └── user.model.ts
├── middlewares/
├── utils/
│   └── db.ts
├── app.ts
└── server.ts
```

---

## ⚙️ Environment Setup

Create a `.env` file in the project root:

```
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/backend-auth
JWT_SECRET=your_jwt_secret

```

---

##  Installation & Running the Project

### Install dependencies

```
npm install
```

### Start MongoDB

Ensure MongoDB is running locally on port `27017`.

### Run the server

```
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

##  API Endpoints

### Health Check

```
GET /health
```

---

### Register User

```
POST /api/auth/register
```

---

### Login User

```
POST /api/auth/login
```

---

##  Authentication Flow

1. User logs in with credentials
2. Server verifies email and password
3. JWT token is generated
4. Token can be used for protected routes in future phases

---

##  Postman Collection

A Postman collection is provided to test the APIs.

---

##  Phase Status

**Phase 1 – Completed**

---
