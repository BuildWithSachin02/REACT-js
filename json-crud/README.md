# React CRUD Application with JSON Server

A simple and responsive **CRUD (Create, Read, Update, Delete)** application built using **React**, **Axios**, **Bootstrap 5**, and **JSON Server**. This project demonstrates how to perform API operations with a local REST API while managing application state using React Hooks.

---

## 📌 Features

* ✅ Create a new user
* ✅ Display all users
* ✅ Update existing user information
* ✅ Delete users
* ✅ Form validation
* ✅ Responsive Bootstrap UI
* ✅ Real-time UI updates without page refresh
* ✅ Local REST API using JSON Server

---

## 🛠️ Tech Stack

* React.js
* JavaScript (ES6+)
* Axios
* Bootstrap 5
* Bootstrap Icons
* JSON Server

---

## 📂 Project Structure

```text
src/
│── components/
│── Home.jsx
│── App.jsx
│── main.jsx
│── index.css

db.json
package.json
README.md
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/BuildWithSachin02/your-repository-name.git
```

### 2. Navigate to the Project

```bash
cd your-repository-name
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install JSON Server

```bash
npm install -g json-server
```

or

```bash
npm install json-server
```

---

## ▶️ Start the React Application

```bash
npm run dev
```

---

## ▶️ Start JSON Server

```bash
json-server --watch db.json --port 3000
```

Your API will be available at:

```text
http://localhost:3000/users
```

---

## 📡 API Endpoints

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/users`     | Fetch all users |
| POST   | `/users`     | Add a new user  |
| PUT    | `/users/:id` | Update a user   |
| DELETE | `/users/:id` | Delete a user   |

---

## 💻 Application Workflow

### Create User

* Enter user details.
* Click **Submit**.
* User information is stored in JSON Server.
* UI updates automatically.

### Read Users

* Fetch all users using Axios.
* Display user information in responsive cards.

### Update User

* Click the **Edit** icon.
* User details populate the form.
* Modify the required fields.
* Click **Update**.
* Changes are saved instantly.

### Delete User

* Click the **Delete** icon.
* Selected user is removed from JSON Server.
* UI refreshes automatically.

---

## 📸 Features Implemented

* Responsive Bootstrap Cards
* Bootstrap Icons
* Axios API Integration
* React Hooks
* useState
* useEffect
* Form Handling
* CRUD Operations
* Local REST API
* Dynamic Rendering
* Conditional Rendering
* Controlled Components

---

## 📖 Learning Outcomes

This project helped in understanding:

* React State Management
* Controlled Forms
* Axios API Requests
* CRUD Operations
* JSON Server
* React Component Lifecycle
* Conditional Rendering
* Event Handling
* REST API Integration
* Component Re-rendering
* React Hooks

---

## 📦 Dependencies

```json
{
  "axios": "^latest",
  "bootstrap": "^5.x",
  "react": "^19.x",
  "react-dom": "^19.x"
}
```

---

## 🔮 Future Improvements

* Search Users
* Sort Users
* Pagination
* Toast Notifications
* Form Validation with React Hook Form
* Loading Spinner
* Confirmation Modal Before Delete
* Dark Mode
* Filter Users
* Environment Variables for API URLs

---

## 👨‍💻 Author

**Sachin Yadav**

* GitHub: https://github.com/BuildWithSachin02
* LinkedIn: https://www.linkedin.com/in/sachin-yadav-8847703a1/
* Portfolio: https://sachinyadav.navyantravels.com/

---

## ⭐ Support

If you found this project useful, consider giving the repository a **⭐ Star** on GitHub. It helps support the project and motivates future improvements.
