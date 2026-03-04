# Backend Task Management Service

A backend service built using Node.js, TypeScript, Express, and MongoDB.  
This project implements user authentication, project management, and task management with JWT-based authorization and Zod validation.

This repository represents **Phase 1 & Phase 2 – Authentication + Project & Task Modules**.

---

## Features

### Phase 1 – Authentication Foundation

- User registration and login APIs
- Password hashing using bcrypt
- JWT-based authentication
- Auth middleware for protected routes
- Centralized error handling
- Health check endpoint

### Phase 2 – Project & Task Modules

- Full Project CRUD operations
- Full Task CRUD operations
- Project and Task relationship enforcement
- Authorization — only project owner can delete a project
- Input validation using Zod
- TypeScript interfaces and enums for strict typing
- Proper HTTP status codes

---

## Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- Zod
- ts-node-dev

---

## 📁 Project Structure

```
src/
├── controllers/
│   ├── auth.controller.ts
│   ├── project.controller.ts
│   └── task.controller.ts
├── routes/
│   ├── auth.routes.ts
│   ├── project.routes.ts
│   └── task.routes.ts
├── services/
│   ├── auth.service.ts
│   ├── project.service.ts
│   └── task.service.ts
├── models/
│   ├── user.model.ts
│   ├── project.model.ts
│   └── task.model.ts
├── middlewares/
│   ├── auth.middleware.ts
│   └── error.middleware.ts
├── validators/
│   ├── project.validator.ts
│   └── task.validator.ts
├── types/
│   ├── auth.types.ts
│   └── express.d.ts
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

## Installation & Running the Project

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

## API Endpoints

### Health Check

```
GET /health
```

---

### Auth

```
POST /api/auth/register
POST /api/auth/login
```

---

### Projects (requires JWT token)

```
POST   /api/projects
GET    /api/projects
GET    /api/projects/:id
PUT    /api/projects/:id
DELETE /api/projects/:id
```

---

### Tasks (requires JWT token)

```
POST   /api/tasks
GET    /api/tasks?projectId=<id>
GET    /api/tasks/:id
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

## Authentication

All project and task routes require a JWT token in the request header:

```
Authorization: Bearer <token>
```

Get the token by logging in via `POST /api/auth/login`.

---

## Authorization

- Only the owner of a project can delete it
- Attempting to delete another user's project returns `403 Forbidden`

---

## Validation

All create and update endpoints validate request bodies using Zod.  
Invalid requests return a `400 Bad Request` with a descriptive error message.

---

## Postman Collection

A Postman collection is provided to test all APIs.

---

## Phase Status

- **Phase 1 – Completed** ✅
- **Phase 2 – Completed** ✅
- Phase 3 – Pending
- Phase 4 – Pending
