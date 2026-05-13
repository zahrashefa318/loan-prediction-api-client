<h1 align="center">
  Loan Prediction React UI
</h1>

<h3 align="center">
  React + Bootstrap Frontend for Loan Affordability Prediction API
</h3>

<p align="center">
  A responsive React frontend integrated with a FastAPI machine learning backend for predicting loan affordability.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue">
  <img src="https://img.shields.io/badge/Bootstrap-UI-purple">
  <img src="https://img.shields.io/badge/FastAPI-Backend-success">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow">
  <img src="https://img.shields.io/badge/API-Integration-orange">
</p>

---

# Features

- Responsive Bootstrap UI
- React state management with Hooks
- Form validation ready
- API integration with FastAPI backend
- Loan affordability prediction display
- Loading state handling
- Clean and modern design
- Production-style frontend structure

---

# Tech Stack

## Frontend

- React
- Bootstrap
- JavaScript (ES6)
- Fetch API

## Backend Integration

This frontend integrates with:

- FastAPI ML API
- JWT Authentication
- Loan Affordability Prediction Model

---

# UI Preview

The application contains:

- Input fields for:
  - Income
  - Savings
  - Expenses
  - Family Size
  - Years Employed
  - Age
  - Rent
  - Debt

- Predict button
- Real-time prediction result display

---

# Project Structure

```bash
src/
│
├── components/
│   └── LoanPredictionPage.jsx
│
├── App.js
├── main.jsx
└── index.css
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/zahrashefa318/loan-prediction-api-client.git
cd loan-prediction-api-client
```

---

# Install Dependencies

```bash
npm install
```

---

# Start Development Server

```bash
npm run dev
```

Application available at:

```bash
https://loan-prediction-api-client.onrender.com/
```

---

# Backend API Configuration


```javascript
const response = await fetch(
  "https://loan-prediction-api-pdr2.onrender.com/predict",
```

---

# Example Request

```json
{
  "income": 5000,
  "savings": 2000,
  "expenses": 1500,
  "family_size": 3,
  "years_employed": 5,
  "age": 30,
  "rent": 800,
  "debt": 1000
}
```

---

# Example Response

```json
{
  "predicted loan": 25000.75
}
```

---

# API Features Supported

- JWT Authentication
- Idempotency-Key requests
- Loan affordability prediction
- JSON API communication

---

# Bootstrap UI

The frontend uses Bootstrap components for:

- Responsive layout
- Form styling
- Buttons
- Cards
- Alerts
- Grid system

---

# Future Improvements

- Authentication pages
- Protected routes
- Dark mode
- Charts & analytics
- Better form validation
- Toast notifications
- Mobile optimization
- Deployment to Vercel or Netlify

---

# Deployment

Frontend has been deployed on:

- Render


---

# Author

## Zahra Shefa

Frontend & Backend Developer focused on:

- React
- FastAPI
- Machine Learning APIs
- Production-style web applications
- Secure API integrations