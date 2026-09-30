import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Enrollment from "./components/Enrollment";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
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
    <Routes>

      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Enrollment />
            <Testimonial />
            <Contact />
            <Footer />
          </>
        }
      />

      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <>
            <Sidebar />
            <Dashboard
              students={students}
              courses={courses}
            />
          </>
        }
      />

      {/* STUDENTS */}
      <Route
        path="/students"
        element={
          <>
            <Sidebar />
            <Students
              students={students}
              setStudents={setStudents}
            />
          </>
        }
      />

      {/* COURSES */}
      <Route
        path="/courses"
        element={
          <>
            <Sidebar />
            <Courses
              courses={courses}
              setCourses={setCourses}
            />
          </>
        }
      />

    </Routes>
  );
}

export default App;