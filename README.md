 📝 Notes App (MERN Stack)

A simple full-stack notes application built using the MERN stack.
Users can create, view, update, and delete notes.
No authentication — focused on core CRUD functionality.

**Tech Stack:**

* React (Vite)
* Node.js & Express
* MongoDB
* REST API

**Live Demo:** [https://notes-mgea.onrender.com/](https://notes-mgea.onrender.com/)

It takes 33 secounds to load plese be patience ..




## 📌 Features

* ✅ Create new notes
* ✅ View all notes
* ✅ Update/edit notes
* ✅ Delete notes
* ✅ Full-stack MERN CRUD app
* ✅ REST API based backend

## 🛠 Tech Stack

### Frontend

* React (Vite)
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB (MongoDB Atlas)

## 📂 Project Structure

```
Notes/
│── client/        # React frontend (Vite)
│── server/        # Node + Express backend
│── README.md
```

## ⚙️ Installation & Setup (Run Locally)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rajcodes0/Notes.git
cd Notes
```

---

## 🔥 Backend Setup

### Go to backend folder

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Create `.env` file inside `server/`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Start backend server

```bash
npm start
```

Backend will run on:

```
http://localhost:5000
```

---

## 🌐 Frontend Setup

### Go to frontend folder

```bash
cd ../frontend
```

### Install dependencies

```bash
npm install
```

### Start frontend

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints (REST)

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/notes`     | Get all notes     |
| POST   | `/notes`     | Create a new note |
| PUT    | `/notes/:id` | Update a note     |
| DELETE | `/notes/:id` | Delete a note     |




## 🧠 Future Improvements

* Authentication (Login/Signup)
* User-based notes
* Search + filter notes
* Tags / categories
* Better UI/UX


GitHub: [https://github.com/rajcodes0](https://github.com/rajcodes0)

-
