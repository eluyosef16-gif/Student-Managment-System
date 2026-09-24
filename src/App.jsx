import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";

function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));

    fetch("http://localhost:3000/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <Navbar />

      <Sidebar />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              students={students}
              courses={courses}
            />
          }
        />

        <Route
          path="/students"
          element={
            <Students
              students={students}
              setStudents={setStudents}
            />
          }
        />

        <Route
          path="/courses"
          element={
            <Courses
              courses={courses}
              setCourses={setCourses}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;