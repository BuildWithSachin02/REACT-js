# 📚 Books Library Management System

A simple **Books Library Management System** built using **React, Redux Toolkit, Axios, JSON Server, Bootstrap, and SweetAlert2**. This project demonstrates complete CRUD (Create, Read, Update, Delete) operations using a REST API.

---

# 🚀 Features

* 📖 Display all books from API
* ➕ Add a new book
* ✏️ Edit existing book details
* 🗑️ Delete a book with SweetAlert confirmation
* ⚡ Redux Toolkit for state management
* 🌐 API integration using Axios
* 🔄 Async operations using `createAsyncThunk`
* ⏳ Loading spinner while fetching data
* ❌ Error handling
* 🎨 Responsive UI with Bootstrap

---

# 🛠️ Tech Stack

* React.js
* Redux Toolkit
* Axios
* JSON Server
* Bootstrap 5
* Bootstrap Icons
* SweetAlert2

---

# 📂 Project Structure

```
src/
│
├── App/
│   └── slices/
│       └── BooksSlices.js
│
├── Screens/
│   └── Home.jsx
│
├── store.js
├── App.jsx
└── main.jsx
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/books-library.git
```

Go inside the project

```bash
cd books-library
```

Install dependencies

```bash
npm install
```

---

# ▶️ Start React Application

```bash
npm run dev
```

---

# ▶️ Start JSON Server

Create a `db.json` file in the project root.

Run:

```bash
npx json-server --watch db.json --port 3000
```

Server URL

```
http://localhost:3000/books
```

---

# 📖 API Endpoints

### Get All Books

```
GET /books
```

### Get Single Book

```
GET /books/:id
```

### Add Book

```
POST /books
```

### Update Book

```
PUT /books/:id
```

### Delete Book

```
DELETE /books/:id
```

---

# 📚 Book Object Example

```json
{
  "id": 1,
  "name": "Atomic Habits",
  "author": "James Clear",
  "category": "Self Help",
  "price": 599,
  "publisher": "Penguin",
  "language": "English",
  "pages": 320,
  "stock": 15,
  "rating": 4.9,
  "publishedYear": 2018,
  "available": true
}
```

---

# ⚙️ Redux Async Actions

The project uses **Redux Toolkit's `createAsyncThunk`** for handling asynchronous API requests.

### Fetch Books

```javascript
dispatch(fetchBooks())
```

### Add Book

```javascript
dispatch(PostBooks(book))
```

### Update Book

```javascript
dispatch(EditDataBooks(book))
```

### Delete Book

```javascript
dispatch(DelBooks(id))
```

---

# 📸 Current Features

* Fetch books from API
* Add books
* Edit books
* Delete books
* SweetAlert delete confirmation
* Loading spinner
* Redux state management
* API integration

---

# 🚀 Future Improvements

* 🔍 Search books by name
* 📂 Filter by category
* 👤 Filter by author
* ⭐ Filter by rating
* 💰 Sort by price
* 📅 Sort by published year
* 📄 Pagination
* ❤️ Favorite books
* 📚 Borrow and return system
* 📊 Dashboard statistics
* 🌙 Dark/Light mode
* 📱 Fully responsive design
* 📷 Book cover images
* 🔐 User authentication

---

# 📖 Learning Concepts

This project covers:

* React Hooks
* useState
* useEffect
* useRef
* Redux Toolkit
* createSlice
* createAsyncThunk
* Axios
* REST API
* CRUD Operations
* JSON Server
* Bootstrap
* SweetAlert2
* State Management
* Async Programming

---

# 👨‍💻 Author

**Sachin Yadav**

Full Stack Developer

---

# ⭐ If you found this project helpful, consider giving it a star on GitHub!
