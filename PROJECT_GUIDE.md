# PROJECT_GUIDE.md

# Car Dealership Inventory Management System

## Overview

A full-stack web application for managing vehicle inventory with secure authentication, role-based authorization, inventory management, and responsive dashboards.

---

# Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Jest
- Supertest

## Frontend

- React (Vite)
- Tailwind CSS
- React Router
- Axios
- Context API

---

# Development Approach

- Test-Driven Development (TDD)
- Layered Architecture
- RESTful APIs
- Clean Code Practices
- Reusable Components

---

# Backend Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcrypt)

## Authorization

- JWT Authentication Middleware
- Admin Authorization Middleware

## Vehicle Management

- Get All Vehicles
- Search Vehicles
- Create Vehicle (Admin)
- Update Vehicle (Admin)
- Delete Vehicle (Admin)
- Purchase Vehicle
- Restock Vehicle (Admin)

---

# Frontend Features

- Login & Registration
- Protected Routes
- Authentication Context
- Admin Dashboard
- Customer Dashboard
- Vehicle Search & Filtering
- Add / Edit / Delete Vehicle
- Purchase Vehicle
- Restock Vehicle
- Responsive UI
- Toast Notifications

---

# Architecture

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

---

# API Summary

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | /api/auth/register | Public |
| POST | /api/auth/login | Public |
| GET | /api/vehicles | Public |
| GET | /api/vehicles/search | Public |
| POST | /api/vehicles | Admin |
| PUT | /api/vehicles/:id | Admin |
| DELETE | /api/vehicles/:id | Admin |
| POST | /api/vehicles/:id/purchase | Authenticated |
| POST | /api/vehicles/:id/restock | Admin |

---

# Testing

- Test-Driven Development (TDD)
- Jest
- Supertest

Current Status

- 11 Test Suites Passed
- 59 Tests Passed
- 97%+ Code Coverage

---

# Important Design Decisions

- Separate `app.js` and `server.js`
- Layered architecture for separation of concerns
- Thin controllers, business logic in services
- JWT for stateless authentication
- Context API for frontend authentication
- Axios interceptor for attaching JWT
- Reusable React components

---

# Key Learnings

- Implementing REST APIs using TDD
- JWT Authentication & Authorization
- MongoDB integration with Mongoose
- Role-Based Access Control
- React Context API
- Axios Interceptors
- Building reusable UI components
- Writing integration tests with Jest & Supertest