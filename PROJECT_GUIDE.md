# Car Dealership Inventory System

## Project Overview

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
- Axios
- React Router
- Context API

---

## Development Strategy

- Test-Driven Development (TDD)
- RESTful API Design
- Layered Architecture
- Clean Architecture Principles
- SOLID Principles (where applicable)

---

# Milestone 0.2 – Backend Foundation

## Dependencies

### Runtime

- Express
- Mongoose
- dotenv
- bcryptjs
- jsonwebtoken
- cors

### Development

- nodemon
- jest
- supertest
- mongodb-memory-server

---

## Design Decisions

- Separated `app.js` and `server.js` for better testability.
- Used MongoDB Memory Server for isolated integration tests.
- Kept database connection logic in a dedicated configuration module.
- Adopted a layered architecture:

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
```

---

# Development Process

## Feature 1 – User Registration

### Objective

Allow new customers to create an account securely.

### Development Steps

- Wrote registration integration tests first.
- Implemented the minimum route (Green phase).
- Added validation middleware.
- Created `AuthController`.
- Created `AuthService`.
- Connected MongoDB persistence.
- Added duplicate email validation.
- Implemented password hashing using bcrypt.
- Forced every new user to have the `customer` role.

### Security

- Passwords are hashed using bcrypt.
- Duplicate email registration is prevented.
- Password is never returned in API responses.

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 201 | User registered successfully |
| 400 | Validation failed |
| 409 | Email already exists |
| 500 | Internal server error |

---

# Feature 2 – User Login

### Objective

Authenticate registered users and issue a JWT for accessing protected APIs.

### Request Flow

```
Client
   │
   ▼
Route
   │
   ▼
Validation Middleware
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
MongoDB
```

### Development Steps

- Wrote login integration tests first.
- Added login validation middleware.
- Retrieved user by email.
- Compared passwords using bcrypt.
- Generated JWT upon successful authentication.
- Returned authenticated user details without the password.

### Security

- Passwords are never returned.
- Invalid credentials always return the same error message.
- JWT expires after 1 day.
- Password comparison uses bcrypt.

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Login successful |
| 400 | Validation failed |
| 401 | Invalid email or password |
| 500 | Internal server error |

### Libraries Used

- bcryptjs
- jsonwebtoken
- Jest
- Supertest

---

# Next Milestone

## JWT Authentication Middleware

### Goal

Protect private APIs using JWT authentication.

### Planned Responsibilities

- Validate Authorization header.
- Verify JWT token.
- Reject missing or invalid tokens.
- Attach authenticated user information to `req.user`.
- Reuse middleware across all protected routes.

---

# Future Features

- Vehicle CRUD APIs
- Vehicle Search & Filtering
- Admin Dashboard
- Customer Dashboard
- Role-Based Authorization
- Vehicle Purchase Workflow

# Feature 3 – Get All Vehicles

## Objective

Retrieve all vehicles available in inventory.

## Endpoint

GET /api/vehicles

## Development Steps

- Created Vehicle model.
- Added vehicle route.
- Added vehicle controller.
- Added vehicle service.
- Wrote integration test using Jest and Supertest.
- Returned all vehicles from MongoDB.

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Vehicles retrieved successfully |
| 500 | Internal server error |

# Feature 4 – Search Vehicles

## Objective

Allow users to search vehicles using one or more filters.

## Endpoint

GET /api/vehicles/search

## Supported Query Parameters

- make
- model
- category
- minPrice
- maxPrice

## Example Requests

GET /api/vehicles/search?make=Toyota

GET /api/vehicles/search?category=SUV

GET /api/vehicles/search?minPrice=1000000&maxPrice=3000000

GET /api/vehicles/search?make=Toyota&category=SUV

## Development Steps

- Added search endpoint.
- Built dynamic MongoDB query object.
- Implemented case-insensitive search using regular expressions.
- Added price range filtering.
- Wrote integration tests for all supported filters.

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Search completed successfully |
| 500 | Internal server error |
# Feature 5 – JWT Authentication Middleware

## Objective

Protect private APIs using JSON Web Tokens (JWT).

## Responsibilities

- Read Authorization header
- Validate Bearer token
- Verify JWT
- Attach decoded user to req.user
- Return 401 for missing or invalid token

## Files Added

middleware/authMiddleware.js

tests/middleware/authMiddleware.test.js

## Test Cases

- Missing token
- Invalid token
- Valid token

---

# Feature 6 – Admin Authorization Middleware

## Objective

Allow only admin users to access protected admin APIs.

## Responsibilities

- Check req.user.role
- Allow admin users
- Return 403 for non-admin users

## Files Added

middleware/adminMiddleware.js

tests/middleware/adminMiddleware.test.js

## Test Cases

- Admin user
- Customer user

---

## Next Feature

Protected Vehicle APIs

- POST /api/vehicles
- PUT /api/vehicles/:id
- DELETE /api/vehicles/:id