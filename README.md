# Student Management System

## About the Project

I created this Student Management System using React. The project helps manage students and courses in a simple and organized way.

I built this project to practice React concepts such as components, props, state, events, lists, forms, search, React Router, and API CRUD operations. I also used **Tailwind CSS** to create a clean, responsive, and consistent user interface.

## Technologies I Used

* React
* Vite
* JavaScript
* HTML
* CSS
* Tailwind CSS
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

### Responsive Design

* Uses Tailwind CSS for styling.
* Responsive student and course card layouts.
* Clean navigation and page layouts.
* Works across different screen sizes.

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
* State management
* Conditional rendering

## Styling

I used **Tailwind CSS** to style the application instead of relying only on traditional CSS.

Tailwind CSS was used for:

* Responsive layouts
* Student and course cards
* Buttons
* Navigation
* Spacing and typography
* Borders and shadows
* Hover effects
* Responsive grids

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

## Summary

This project demonstrates my understanding of React development, including reusable components, state management, routing, forms, search functionality, CRUD operations, API communication, and responsive UI design using Tailwind CSS.
