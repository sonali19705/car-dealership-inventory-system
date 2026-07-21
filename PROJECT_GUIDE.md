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