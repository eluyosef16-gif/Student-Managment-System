import { useState } from "react";
import CourseCard from "../components/CourseCard";

function Courses({ courses, setCourses }) {
  const [courseName, setCourseName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [courseSearch, setCourseSearch] = useState("");
  const [editingCourse, setEditingCourse] = useState(null);

  const deleteCourse = async (id) => {
    await fetch(`http://localhost:3000/courses/${id}`, {
      method: "DELETE",
    });

    setCourses(
      courses.filter((course) => course.id !== id)
    );
  };

  const editCourse = (course) => {
    setEditingCourse(course);
    setCourseName(course.name);
    setInstructor(course.instructor);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      courseName.trim() === "" ||
      instructor.trim() === ""
    ) {
      return;
    }

    if (editingCourse) {
      const response = await fetch(
        `http://localhost:3000/courses/${editingCourse.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: courseName,
            instructor: instructor,
          }),
        }
      );

      const updatedCourse = await response.json();

      setCourses(
        courses.map((course) =>
          course.id === editingCourse.id
            ? updatedCourse
            : course
        )
      );

      setEditingCourse(null);
    } else {
      const response = await fetch(
        "http://localhost:3000/courses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: courseName,
            instructor: instructor,
          }),
        }
      );

      const newCourse = await response.json();

      setCourses([...courses, newCourse]);
    }

    setCourseName("");
    setInstructor("");
  };

  return (
    <main>
      <h2>Courses</h2>

      <p>
        <strong>Total Courses:</strong> {courses.length}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course name"
          value={courseName}
          onChange={(event) =>
            setCourseName(event.target.value)
          }
        />

        <input
          type="text"
          placeholder="Instructor"
          value={instructor}
          onChange={(event) =>
            setInstructor(event.target.value)
          }
        />

        <button type="submit">
          {editingCourse ? "Update Course" : "Add Course"}
        </button>
      </form>

      <input
        className="search-input"
        type="text"
        placeholder="Search course..."
        value={courseSearch}
        onChange={(event) =>
          setCourseSearch(event.target.value)
        }
      />

      <div className="cards-container">
        {courses
          .filter((course) =>
            course.name
              .toLowerCase()
              .includes(courseSearch.toLowerCase())
          )
          .map((course) => (
            <CourseCard
              key={course.id}
              name={course.name}
              instructor={course.instructor}
              onDelete={() => deleteCourse(course.id)}
              onEdit={() => editCourse(course)}
            />
          ))}
      </div>
    </main>
  );
}

export default Courses;