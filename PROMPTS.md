# PROMPTS.md

This document contains the major prompts used during the development of the project.

---

# Prompt 1 – Project Planning

## Purpose

Project planning and development approach.

### Prompt

> Act as a Senior Software Engineer and TDD mentor. Guide me in building this project incrementally using Test-Driven Development (TDD), clean architecture, REST API best practices, and industry-standard coding practices. Explain design decisions before implementation, help review my code, and suggest improvements.

---

# Prompt 2 – Backend Foundation

## Purpose

Set up the backend project structure.

### Prompt

> Help me configure the backend foundation for an Express.js application. Recommend a clean folder structure, required dependencies, environment configuration, testing setup, and project organization suitable for a production-ready application.

### Outcome

- Configured Express project structure.
- Selected runtime and development dependencies.
- Set up Jest for testing.
- Added environment configuration.
- Prepared the project for future feature development.

---

# Prompt 3 – User Registration

## Purpose

Implement user registration using Test-Driven Development (TDD).

### Prompt

> Help me implement user registration using Test-Driven Development (TDD) for an Express.js and MongoDB backend.

Requirements:

- Validate name, email, and password.
- Password must be at least 6 characters.
- Prevent duplicate email registration.
- Hash passwords using bcrypt.
- Store users in MongoDB using Mongoose.
- Always assign the customer role regardless of client input.
- Follow the layered architecture:
  - Route
  - Middleware
  - Controller
  - Service
  - Model
- Write integration tests using Jest and Supertest before implementation.

---

# Prompt 4 – User Login

## Purpose

Implement secure user login using Test-Driven Development (TDD).

### Prompt

> Help me implement a secure login API using Test-Driven Development (TDD).

Requirements:

- Validate email and password.
- Find the user by email.
- Compare passwords using bcrypt.
- Return **401 Unauthorized** for invalid credentials.
- Generate a JWT after successful authentication.
- Return authenticated user details without the password.
- Follow the layered architecture:
  - Route
  - Middleware
  - Controller
  - Service
  - Model
- Write integration tests using Jest and Supertest before implementation.

# Prompt 5 – Get All Vehicles

## Purpose

Implement the first Vehicle API using TDD.

### Prompt

> Help me implement the GET /api/vehicles endpoint using Test-Driven Development (TDD).

Requirements:

- Return all vehicles from MongoDB.
- Follow Route → Middleware → Controller → Service → Model architecture.
- Write integration tests before implementation.
- Return HTTP 200 with an empty array when no vehicles exist.

# Prompt 6 – Search Vehicles

## Purpose

Implement the vehicle search API using Test-Driven Development (TDD).

### Prompt

> Help me implement the GET /api/vehicles/search endpoint using Test-Driven Development (TDD).

Requirements:

- Support searching by make.
- Support searching by model.
- Support searching by category.
- Support searching by minimum and maximum price.
- Allow combining multiple filters.
- Use MongoDB dynamic query building.
- Write integration tests for each search scenario.

# Prompt 7 – JWT Authentication Middleware

## Prompt

Help me implement JWT Authentication Middleware using Test-Driven Development.

Requirements:

- Validate Authorization header
- Verify Bearer token
- Verify JWT
- Attach decoded user to req.user
- Return proper HTTP status codes
- Write Jest unit tests

---

# Prompt 8 – Admin Authorization Middleware

## Prompt

Help me implement Admin Authorization Middleware using Test-Driven Development.

Requirements:

- Check authenticated user's role
- Allow only admin users
- Return HTTP 403 for unauthorized users
- Write Jest unit tests

## Prompt 9 – Create Vehicle API using TDD

Implement the Create Vehicle feature for the Car Dealership Inventory Management System using Test-Driven Development (TDD).

Requirements:
- Endpoint: POST /api/vehicles
- Admin-only access using JWT authentication and role-based authorization.
- Follow the project architecture:
  Route → Validation Middleware → Controller → Service → Model.
- Validate:
  - make (required)
  - model (required)
  - category (required)
  - price (required, numeric, >= 0)
  - quantity (required, numeric, >= 0)

### Prompt 10
Implement a secure PUT /api/vehicles/:id endpoint for the Car Dealership Inventory Management System using Node.js, Express, MongoDB, and Mongoose.

Follow the existing project architecture:
Route → Validation Middleware → Controller → Service → Model.

Requirements:
- Only authenticated admin users can update vehicles.
- Reuse the existing vehicle validation middleware.
- Return 404 if the vehicle does not exist.
- Return the updated vehicle.
- Handle errors gracefully with appropriate HTTP status codes.
- Follow strict but pragmatic TDD.
- Generate comprehensive Jest and Supertest test cases for success, validation, authorization, not found, and server error scenarios.
- Do not modify the existing project architecture.

### Prompt 11
Implement a secure DELETE /api/vehicles/:id endpoint for the Car Dealership Inventory Management System using Node.js, Express, MongoDB, and Mongoose.

Follow the existing project architecture:
Route → Controller → Service → Model.

Requirements:
- Only authenticated admin users can delete vehicles.
- Return 404 if the vehicle does not exist.
- Return a success message after deletion.
- Handle authorization and server errors appropriately.
- Follow strict but pragmatic TDD.
- Generate comprehensive Jest and Supertest test cases covering success, unauthorized access, forbidden access, vehicle not found, and server error scenarios.
- Keep the implementation consistent with the existing project structure.

### Prompt 12
Implement a secure Purchase Vehicle API for the Car Dealership Inventory Management System.

Requirements:
- Technology: Node.js, Express, MongoDB, and Mongoose.
- Endpoint: POST /api/vehicles/:id/purchase.
- Follow the existing project architecture:
  Route → Authentication Middleware → Controller → Service → Model.
- Only authenticated users should be allowed to purchase vehicles.
- Retrieve the vehicle by ID.
- Return 404 if the vehicle does not exist.
- Return 400 if the vehicle is out of stock.
- Decrease the vehicle quantity by one upon successful purchase.
- Persist the updated quantity to the database.
- Return the updated vehicle with a success message.
- Keep controllers thin and place business logic in the service layer.
- Follow Test-Driven Development (TDD).
- Generate comprehensive Jest and Supertest test cases for successful purchase, vehicle not found, out-of-stock, unauthorized access, and database error scenarios.
- Maintain consistency with the existing project architecture and coding style.