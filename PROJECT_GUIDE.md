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

Login Module
Objective

Authenticate registered users and issue a JWT for accessing protected APIs.

Request Flow
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
Steps
Validate request.
Find user by email.
Compare password using bcrypt.
Generate JWT.
Return token and user details.
Security
Passwords are never returned.
Invalid credentials return the same error message.
JWT expires after 1 day.
Password comparison uses bcrypt.
HTTP Status Codes
| Code | Meaning                   |
| ---- | ------------------------- |
| 200  | Login successful          |
| 400  | Validation failed         |
| 401  | Invalid email or password |
| 500  | Internal server error     |

Libraries
-bcryptjs
-jsonwebtoken
-Jest
-Supertest