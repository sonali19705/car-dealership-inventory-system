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