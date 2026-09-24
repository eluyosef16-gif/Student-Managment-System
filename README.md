# Student Management System

## About the Project

I created this Student Management System using React. The project helps manage students and courses in a simple way.

I built this project to practice React concepts such as components, props, state, events, lists, forms, search, React Router, and API CRUD operations.

## Technologies I Used

* React
* Vite
* JavaScript
* HTML
* CSS
* React Router
* JSON Server

## Features

### Dashboard

* Shows the total number of students.
* Shows the total number of courses.

### Student Management

* View students
* Add a new student
* Edit a student
* Delete a student
* Search for students
* Shows the total number of students

### Course Management

* View courses
* Add a new course
* Edit a course
* Delete a course
* Search for courses
* Shows the total number of courses

## React Concepts I Used

While making this project, I used:

* Components
* Props
* `useState`
* `useEffect`
* `.map()`
* `.filter()`
* Forms and events
* React Router
* API requests using `fetch()`
* CRUD operations

## Project Structure

```text
student-management-system
│
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StudentCard.jsx
│   │   └── CourseCard.jsx
│   │
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   ├── Students.jsx
│   │   └── Courses.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── package.json
└── README.md
```

## How to Run the Project

First, install the dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

In another terminal, start the JSON Server:

```bash
npm run server
```

The React application and JSON Server need to run at the same time because the application gets the student and course data from the API.

