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

## Features

### Authentication
- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Role-based Authorization (Admin)

### Vehicle Management
- ✅ Add Vehicle
- ✅ View All Vehicles
- ✅ Search Vehicles
- ✅ Update Vehicle
- ✅ Delete Vehicle (Admin Only)

### Inventory Management
- ✅ Purchase Vehicle
- ✅ Restock Vehicle (Admin Only)

### Testing
- ✅ Jest
- ✅ Supertest
- ✅ Test-Driven Development (TDD)

### Security
- ✅ Password Hashing (bcrypt)
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Role-Based Access Control

## Testing

This project follows a **Test-Driven Development (TDD)** workflow.

- Registration API
- Login API
- Get All Vehicles API
- Search Vehicles API
- JWT Authentication Middleware
- Admin Authorization Middleware

### Testing Tools

- Jest
- Supertest

---
### API table:
| Method   | Endpoint                         | Access                 | Description                               |
| -------- | -------------------------------- | ---------------------- | ----------------------------------------- |
| POST     | `/api/auth/register`        | Public                 | Register a new user                       |
| POST     | `/api/auth/login`           | Public                 | Login and receive JWT                     |
| GET      | `/api/vehicles`             | Public                 | Get all vehicles                          |
| GET      | `/api/vehicles/search`      | Public                 | Search vehicles                           |
| POST     | `/api/vehicles`             | Admin                  | Add a vehicle                             |
| PUT      | `/api/vehicles/:id`         | Admin                  | Update vehicle                            |
| DELETE   | `/api/vehicles/:id`         | Admin                  | Delete vehicle                            |
| POST     | `/api/vehicles/:id/purchase`| Authenticated User     | Purchase a vehicle and decrease stock     |
| POST     | `/api/vehicles/:id/restock` | Admin                  | Restock vehicle                           |

## Frontend Setup

### Tech Stack

- React 19
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Context API

### Project Structure

The frontend follows a modular structure with separate folders for pages, components, services, context, hooks, routes, and utilities to improve maintainability and scalability.
frontend/
│
├── components/
│   ├── common/
│   ├── admin/
│   ├── layout/
│   └── vehicle/
│
├── context/
├── hooks/
├── pages/
├── routes/
├── services/
├── utils/

## Frontend Features

### Authentication
- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Persistent Authentication
- ✅ Logout Support

### UI
- ✅ React + Vite
- ✅ Tailwind CSS
- ✅ Responsive Authentication Pages
- ✅ Reusable UI Components
- ✅ Context API for Authentication

## My AI Usage

### AI Tools Used

- ChatGPT (GPT-5.5)
- GitHub Copilot

### How I Used AI

- Discussed software architecture and folder structure.
- Planned backend setup and dependency selection.
- Followed a Test-Driven Development (TDD) workflow.
- Reviewed design decisions and edge cases.
- Discussed testing strategy and API design.
- Used GitHub Copilot for code completion during implementation.
### Purchase Vehicle API

ChatGPT assisted with:

- Designing the purchase workflow
- Test-Driven Development (TDD) planning
- Generating initial controller and service boilerplate
- Suggesting Jest and Supertest test cases
- Reviewing API design and error handling

All generated code was manually reviewed, understood, modified where necessary, and tested before being committed.
### Restock Vehicle API

ChatGPT assisted with:

- Designing the inventory restocking workflow
- Planning the Test-Driven Development (TDD) approach
- Generating the initial controller, service, and route structure
- Suggesting comprehensive Jest and Supertest test cases
- Reviewing error handling, authorization, and code organization

All generated code was manually reviewed, understood, modified where necessary, and thoroughly tested before being committed.

### Frontend Authentication

ChatGPT assisted with:

- Planning the frontend architecture
- Designing reusable React component structure
- Creating authentication flow using Context API
- Designing responsive Login and Register pages
- Reviewing folder organization and routing strategy
- Suggesting reusable service layer and API integration

All generated code was manually reviewed, understood, modified where necessary, and tested before being committed.
### Reflection

AI acted as a development assistant for brainstorming, architecture discussions, testing strategy, and code review. GitHub Copilot assisted with code completion. I reviewed, understood, tested, and modified all AI-generated suggestions before including them in the project.

---

## License

This project was developed as part of the **Incubyte Software Craftsman Internship Assessment**.