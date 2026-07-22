# 🚗 Car Dealership Inventory Management System

A full-stack Car Dealership Inventory Management System built using **React**, **Node.js**, **Express**, and **MongoDB**.

The application supports secure authentication, role-based access control, inventory management, vehicle purchasing, and search functionality while following **Test-Driven Development (TDD)** practices.

Developed as part of the **Incubyte Software Craftsman Internship Assessment**.

---

# ✨ Features

## Authentication

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Password Hashing (bcrypt)
- ✅ Protected Routes
- ✅ Persistent Login
- ✅ Role-Based Authorization

## Admin Features

- ✅ Add Vehicle
- ✅ Update Vehicle
- ✅ Delete Vehicle
- ✅ Restock Vehicle
- ✅ Dashboard Statistics
- ✅ Vehicle Search & Filtering

## Customer Features

- ✅ Browse Vehicles
- ✅ Search & Filter Vehicles
- ✅ Purchase Vehicle
- ✅ Automatic Stock Updates
- ✅ Disabled Purchase Button for Out-of-Stock Vehicles

## Inventory

- ✅ View Inventory
- ✅ Search by Make
- ✅ Search by Model
- ✅ Search by Category
- ✅ Search by Price Range

---

# 🛠 Tech Stack

## Frontend

- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Context API

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

## Testing

- Jest
- Supertest

---

# 🏗 Architecture

The backend follows a layered architecture:

```
Route
   ↓
Middleware
   ↓
Controller
   ↓
Service
   ↓
Model
   ↓
MongoDB
```

Frontend architecture:

```
Pages
   ↓
Components
   ↓
Services
   ↓
API
```

---

# 📁 Project Structure

```
car-dealership-inventory
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── tests
│   └── app.js
│
├── frontend
│   ├── components
│   │   ├── admin
│   │   ├── common
│   │   ├── layout
│   │   └── vehicle
│   ├── context
│   ├── pages
│   ├── routes
│   ├── services
│   └── utils
│
├── README.md
├── PROMPTS.md
└── .gitignore
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone <repository-url>
cd car-dealership-inventory
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file.

```env
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
```

Run the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🔑 Demo Credentials

## Admin

```
Email: admin@gmail.com
Password: Admin123
```

---

# 📡 REST API

| Method | Endpoint | Access |
|---------|----------|--------|
| POST | `/api/auth/register` | Public |
| POST | `/api/auth/login` | Public |
| GET | `/api/vehicles` | Public |
| GET | `/api/vehicles/search` | Public |
| POST | `/api/vehicles` | Admin |
| PUT | `/api/vehicles/:id` | Admin |
| DELETE | `/api/vehicles/:id` | Admin |
| POST | `/api/vehicles/:id/purchase` | Authenticated |
| POST | `/api/vehicles/:id/restock` | Admin |

---

# 🧪 Testing

This project follows a **Test-Driven Development (TDD)** approach using **Jest** and **Supertest**. Tests were written to validate the application's core backend functionality, authentication, authorization, and inventory workflows.

### Tested Features

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication Middleware
- ✅ Admin Authorization Middleware
- ✅ Add Vehicle
- ✅ Get All Vehicles
- ✅ Search Vehicles
- ✅ Update Vehicle
- ✅ Delete Vehicle
- ✅ Purchase Vehicle
- ✅ Restock Vehicle

### Testing Tools

- Jest
- Supertest

### Run Tests

```bash
npm test
```

# 🧪 Testing

This project follows a **Test-Driven Development (TDD)** approach using **Jest** and **Supertest**. Unit and integration tests were written to verify the core functionality of the application.

### Tested Modules

#### Authentication
- ✅ User Registration
- ✅ User Login

#### Vehicle Management
- ✅ Create Vehicle
- ✅ Get All Vehicles
- ✅ Search Vehicles
- ✅ Update Vehicle
- ✅ Delete Vehicle

#### Inventory Management
- ✅ Purchase Vehicle
- ✅ Restock Vehicle

#### Middleware
- ✅ JWT Authentication Middleware
- ✅ Admin Authorization Middleware

### Testing Tools

- Jest
- Supertest

### Run Tests

```bash
npm test
```

# 🧪 Testing

This project follows a **Test-Driven Development (TDD)** approach using **Jest** and **Supertest**. Unit and integration tests were written before or alongside implementation to validate the application's core functionality.

### Tested Modules

#### Authentication
- ✅ User Registration
- ✅ User Login

#### Vehicle Management
- ✅ Create Vehicle
- ✅ Get All Vehicles
- ✅ Search Vehicles
- ✅ Update Vehicle
- ✅ Delete Vehicle

#### Inventory Management
- ✅ Purchase Vehicle
- ✅ Restock Vehicle

#### Middleware
- ✅ JWT Authentication Middleware
- ✅ Admin Authorization Middleware

### Testing Tools

- Jest
- Supertest

### Run Tests

```bash
npm test
```

### Test Results

```text
Test Suites: 11 passed, 11 total
Tests:       59 passed, 59 total
Snapshots:   0 total
Time:        72.782 s
```

### Code Coverage

| Metric | Coverage |
|--------|---------:|
| Statements | **97.28%** |
| Branches | **97.50%** |
| Functions | **100%** |
| Lines | **97.28%** |

### Coverage Summary

- ✅ 11 Test Suites Passed
- ✅ 59 Test Cases Passed
- ✅ 97.28% Statement Coverage
- ✅ 97.50% Branch Coverage
- ✅ 100% Function Coverage
- ✅ Authentication, Authorization, Vehicle Management, Inventory Operations, and Middleware thoroughly tested.

### Test Report Screenshot

![Test Report](screenshots/test-report.png)

# 📷 Screenshots

## Login Page

![Login Page](screenshots/login.png)

---

## Register Page

![Register Page](screenshots/register.png)

---

## Admin Dashboard

Shows dashboard statistics, vehicle inventory, search filters, and admin actions.

![Admin Dashboard](screenshots/admin-dashboard.png)

---

## Customer Dashboard

Browse, search, and purchase available vehicles.

![Customer Dashboard](screenshots/customer-dashboard.png)

---

## Add / Edit Vehicle

Admin interface for adding and updating vehicle details.

![Add Vehicle](screenshots/add-vehicle-modal.png)

---

## Vehicle Search & Filtering

Search vehicles by make, model, category, and price range.

![Search Vehicles](screenshots/search-filter.png)

---

## Purchase Workflow

Customer successfully purchases a vehicle and inventory updates automatically.

![Purchase Vehicle](screenshots/purchase-success.png)

---

# 🌐 Deployment (Optional)

## Live Application

![Home Page](screenshots/home-page.png)
Frontend:

```
Vercel URL
```

Backend:

```
Render URL
```

---

# 🤖 My AI Usage

## AI Tools Used

- ChatGPT (GPT-5.5)
- GitHub Copilot

## How AI Was Used

ChatGPT assisted with:

- Application architecture
- Folder structure planning
- Test-Driven Development planning
- Backend API design
- Authentication flow
- Vehicle CRUD design
- Purchase workflow
- Restock workflow
- Search implementation
- React component design
- Responsive UI improvements
- Error handling
- Testing strategy
- README preparation

GitHub Copilot assisted with:

- Code completion
- Repetitive boilerplate generation
- Refactoring suggestions

All AI-generated code and suggestions were manually reviewed, understood, modified where necessary, and tested before being committed.

## Reflection

AI accelerated boilerplate generation, architectural discussions, and testing strategy while allowing me to focus on implementation and debugging. Every AI suggestion was critically reviewed and validated before becoming part of the project.

---

# 📄 PROMPTS.md

The repository includes a **PROMPTS.md** file containing the AI prompts used throughout the development process, as required by the assessment.

---

# 📜 License

Developed for the **Incubyte Software Craftsman Internship Assessment**.
