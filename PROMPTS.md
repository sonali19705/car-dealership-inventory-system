# PROMPTS.md

## Prompt 1

**Purpose:** Project planning

**Prompt:**
Act as a Senior Software Engineer and TDD mentor. Guide me in building this project incrementally using Test-Driven Development, clean architecture, REST API best practices, and industry-standard coding practices. Explain design decisions before implementation, help review my code, suggest improvements.

## Prompt 2 – Backend Foundation

### Objective
Set up the backend project structure.

### Prompt-3

> Help me configure the backend foundation for an Express.js application. Recommend a clean folder structure, required dependencies, environment configuration, testing setup, and project organization suitable for a production-ready application.

### Outcome

- Configured Express project structure.
- Selected runtime and development dependencies.
- Set up Jest for testing.
- Added environment configuration.
- Prepared the project for future feature development.

---

## Feature: User Login

### Prompt-4

Help me implement a secure login API using Test-Driven Development (TDD).

Requirements:
- Validate email and password.
- Find user by email.
- Compare passwords using bcrypt.
- Return 401 for invalid credentials.
- Generate JWT after successful authentication.
- Return authenticated user details excluding the password.
- Follow Route → Middleware → Controller → Service → Model architecture.
- Write integration tests with Jest and Supertest before implementing functionality.