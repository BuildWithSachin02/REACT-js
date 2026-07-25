# 📝 Blog Management System

A modern Blog Management System built with **React.js**, **Redux Toolkit**, **React Router**, **Bootstrap**, **Axios**, and **JSON Server**. This application allows users to create, view, edit, delete, and search blog posts with a clean and responsive user interface.

---

## 🚀 Features

- 📖 View all blogs
- ➕ Create a new blog
- ✏️ Edit existing blogs
- ❌ Delete blogs
- 🔍 Search blogs by Title or Category
- 👁️ View detailed blog information
- 📅 Human-readable publish dates (e.g., "2 hours ago")
- 📱 Responsive UI using Bootstrap
- ⚡ State management with Redux Toolkit
- 🌐 REST API using JSON Server

---

## 🛠️ Tech Stack

- React.js
- Redux Toolkit
- React Router DOM
- Bootstrap 5
- Axios
- JSON Server
- date-fns
- SweetAlert2

---

## 📂 Project Structure

```
blog-app/
│
├── src/
│   ├── APP/
│   │   ├── Store.js
│   │   └── features/
│   │       └── blogSlices.js
│   │
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CreateBlogs.jsx
│   │   ├── AllBlogs.jsx
│   │   └── ViewDetails.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
└── package.json
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/BuildWithSachin02/REACT-js.git
```

### Navigate to the Project

```bash
cd REACT-js/blog-app
```

### Install Dependencies

```bash
npm install
```

---

## ▶️ Run the Project

### Start React

```bash
npm run dev
```

### Start JSON Server

```bash
npx json-server --watch db.json --port 3000
```

---

## 📷 Screens

- Home Page
- Create Blog
- View Details
- Edit Blog
- Search Blogs

---

## 📌 CRUD Operations

### Create

Create new blog posts with:

- Title
- Category
- Description
- Image URL

---

### Read

- View all blogs
- View complete blog details

---

### Update

Update any blog information.

---

### Delete

Delete blogs instantly with Redux state updates.

---

## 🔍 Search

Search blogs by:

- Blog Title
- Blog Category

The search updates results instantly using Redux Toolkit.

---

## 📦 API Endpoints

```
GET    /blogs
POST   /blogs
PUT    /blogs/:id
DELETE /blogs/:id
```

---

## 📚 Learning Highlights

This project demonstrates:

- React Functional Components
- React Hooks
- Redux Toolkit
- createAsyncThunk
- Axios API Calls
- CRUD Operations
- React Router
- JSON Server
- Bootstrap Responsive Design
- Search Functionality
- Conditional Rendering
- State Management
- Async Programming

---

## 👨‍💻 Author

**Sachin Yadav**

GitHub: https://github.com/BuildWithSachin02

LinkedIn: www.linkedin.com/in/sachin-yadav-36293b246

---

## ⭐ Future Improvements

- User Authentication
- Categories API
- Pagination
- Dark Mode
- Rich Text Editor
- Image Upload
- Comments Section
- Likes & Bookmarks
- Backend Integration (Node.js + MongoDB)
- JWT Authentication

---

## 📄 License

This project is created for learning purposes and personal portfolio.