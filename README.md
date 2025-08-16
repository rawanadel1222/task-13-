# Patient Entity Module

## Entity
**Patient** — Chosen because my project is a hospital management system.

### Fields:
- `fullName` (String, required)
- `age` (Number, required)
- `gender` (String, required: Male, Female, Other)
- `phone` (String, required)
- `address` (String, optional)
- `diagnosis` (String, optional)
- `admissionDate` (Date, default now)

---

## Routes Summary
- **POST** `/patients` — Create a new patient  
- **GET** `/patients` — Get all patients  
- **GET** `/patients/:id` — Get a patient by ID  
- **PATCH** `/patients/:id` — Update a patient  
- **DELETE** `/patients/:id` — Delete a patient  

---

## How to Run Locally
```bash
git clone <your-repo-url>
cd patient-module
npm install
node server.js