# 🎓 Admission Form CRUD Application

A simple Admission Form application built with **React.js**, **Redux Toolkit**, **Bootstrap**, **Axios**, and **JSON Server**. This project demonstrates CRUD (Create, Read, Update, Delete) operations using a locally hosted REST API.

----

## 🚀 Features

* Add new student admission records
* View all submitted records
* Update existing student information
* Delete student records
* State management using Redux Toolkit
* Local API using JSON Server
* Responsive UI with Bootstrap
* Form validation for required fields

---

## 🛠️ Tech Stack

* React.js
* Redux Toolkit
* React Router
* Bootstrap 5
* Axios
* JSON Server
* JavaScript (ES6+)
* HTML5
* CSS3

---

## 📂 Project Structure

```text
Admission-Form/
│
├── public/
├── src/
│   ├── components/
│   ├── redux/
│   │   ├── store.js
│   │   └── slice.js
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/BuildWithSachin02/your-repository-name.git
```

### 2. Move into the project

```bash
cd your-repository-name
```

### 3. Install dependencies

```bash
npm install
```

---

## ▶️ Run the React Application

```bash
npm run dev
```

---

## ▶️ Start JSON Server

Open another terminal and run:

```bash
npx json-server --watch db.json --port 3000
```

The API will be available at:

```text
http://localhost:3000
```

---

## 📌 API Endpoints

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | `/students`     | Get all students |
| POST   | `/students`     | Add a student    |
| PUT    | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

> Replace `students` with the resource name used in your `db.json` if it is different.

---

## 📸 Features Included

* Student Admission Form
* Display Student Records
* Edit Student Details
* Delete Student Details
* Responsive Design
* Redux State Management
* Axios API Integration
* JSON Server CRUD Operations

---

## 🎯 Learning Outcomes

This project helped me learn:

* React Components
* React Hooks
* Redux Toolkit
* Axios API Requests
* CRUD Operations
* JSON Server
* Form Handling
* State Management
* Component Reusability
* Responsive UI Development

---

## 👨‍💻 Author

**Sachin Yadav**

* GitHub: https://github.com/BuildWithSachin02
* LinkedIn: https://www.linkedin.com/in/sachin-yadav-8847703a1/
* Portfolio: https://sachinyadav.navyantravels.com/

---

## ⭐ Future Improvements

* Search Student
* Filter Records
* Pagination
* Authentication (Login/Register)
* Image Upload
* Form Validation using React Hook Form
* Backend with Node.js & MongoDB
* Export Data to PDF/Excel
* Cloud Database Integration

---

## 📄 License

This project is created for learning purposes and personal portfolio use.
