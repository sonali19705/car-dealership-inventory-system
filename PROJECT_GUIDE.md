# Car Dealership Inventory System

## Project Overview

Backend
- Node.js
- Express
- MongoDB
- JWT
- Jest

Frontend
- React
- Vite
- Tailwind CSS
- Axios

Development Strategy
- Test-Driven Development
- REST API
- Clean Architecture
- SOLID Principles (where applicable)

---
## Milestone 0.2 – Backend Foundation

### Dependencies

Runtime:
- Express
- Mongoose
- Dotenv
- BcryptJS
- JSON Web Token
- CORS

Development:
- Nodemon
- Jest
- Supertest
- MongoDB Memory Server

### Design Decisions

- Separated app.js and server.js to improve testability.
- Using MongoDB Memory Server for isolated integration tests.
- Keeping database connection logic in a dedicated config module.

## Development Process

Registration
- Wrote registration endpoint test
- Implemented minimum route (Green)
- Added validation tests
- Refactored to AuthController
- Added AuthService
- Added MongoDB persistence
- Added duplicate email validation
## Registration Module

### Learned

- Layered backend architecture
- Service layer responsibilities
- Request validation using middleware
- Password hashing with bcrypt
- MongoDB integration using Mongoose
- Integration testing with Jest and Supertest
- Duplicate email handling using HTTP 409 Conflict

### Challenges

- Jest tests timed out because MongoDB was not connected during test execution.
- Fixed by creating a Jest setup file that establishes and closes the database connection.