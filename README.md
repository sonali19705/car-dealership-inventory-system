# Car Dealership Inventory Management System

## Overview

A full-stack web application for managing a car dealership's inventory. The system provides role-based access for administrators and customers, allowing inventory management, vehicle browsing, authentication, and purchase workflows.

This project is being developed using **Test-Driven Development (TDD)** as part of the **Incubyte Software Craftsman Internship Assessment**.

---

## Features

### Authentication

- User Registration
- Secure User Login
- JWT-based Authentication
- Password hashing using bcrypt
- Input validation using middleware
- Duplicate email prevention
- Default customer role assignment
- Integration testing using Jest and Supertest

### Planned Features

- Vehicle Inventory Management (Admin)
- Vehicle Search & Filtering
- Customer Dashboard
- Admin Dashboard
- Protected Routes
- Role-Based Authorization
- Vehicle Purchase Workflow

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Jest
- Supertest

### Frontend

- React (Vite)
- Tailwind CSS
- React Router
- Axios
- Context API

---

## Project Structure

```text
car-dealership-inventory/
│
├── backend/
├── frontend/
├── README.md
├── PROMPTS.md
└── .gitignore
```

---

## Getting Started

### Clone Repository

```bash
git clone <repository-url>
cd car-dealership-inventory
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Development Approach

This project follows:

- Test-Driven Development (TDD)
- Feature-based development
- Git feature branches
- Incremental commits
- Clean architecture principles
- Layered Architecture (Route → Middleware → Controller → Service → Model)

---

## Current Progress

### ✅ Completed

- Backend project setup
- MongoDB connection
- User Registration
- User Login
- JWT generation
- Validation middleware
- Password hashing
- Integration tests using Jest & Supertest

### 🚧 In Progress

- JWT Authentication Middleware
- Protected Routes

### 📌 Planned

- Vehicle CRUD APIs
- Inventory Search & Filter
- Admin Dashboard
- Customer Dashboard
- Frontend Authentication
- Purchase Workflow

---

## Testing

This project follows a **Test-Driven Development (TDD)** workflow.

Current test coverage includes:

- Registration API
- Login API
- Validation middleware
- Password hashing
- Duplicate email handling
- Authentication success and failure scenarios

Testing tools:

- Jest
- Supertest

---

## My AI Usage

### AI Tools Used

- ChatGPT (GPT-5.5)
- GitHub Copilot

### How I Used AI

- Discussed software architecture and folder structure.
- Planned the backend setup and dependency selection.
- Followed a Test-Driven Development (TDD) workflow.
- Reviewed design decisions and edge cases.
- Discussed testing strategy and API design.
- Used GitHub Copilot for code completion during implementation.

### Reflection

AI acted as a development assistant for brainstorming, design discussions, testing strategy, and code review. GitHub Copilot assisted with code completion. I reviewed, understood, tested, and modified all generated suggestions before including them in the project.

---

## License

This project was developed as part of the **Incubyte Software Craftsman Internship Assessment**.