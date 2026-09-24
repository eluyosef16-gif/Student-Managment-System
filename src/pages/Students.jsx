import { useState } from "react";
import StudentCard from "../components/StudentCard";

function Students({ students, setStudents }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    });

    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  const editStudent = (student) => {
    setEditingStudent(student);
    setName(student.name);
    setCourse(student.course);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() === "" || course.trim() === "") {
      return;
    }

    if (editingStudent) {
      const response = await fetch(
        `http://localhost:3000/students/${editingStudent.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            course: course,
          }),
        }
      );

      const updatedStudent = await response.json();

      setStudents(
        students.map((student) =>
          student.id === editingStudent.id
            ? updatedStudent
            : student
        )
      );

      setEditingStudent(null);
    } else {
      const response = await fetch(
        "http://localhost:3000/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            course: course,
          }),
        }
      );

      const newStudent = await response.json();

      setStudents([...students, newStudent]);
    }

    setName("");
    setCourse("");
  };

  return (
    <main>
      <h2>Students</h2>

      <p>
        <strong>Total Students:</strong> {students.length}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />

        <button type="submit">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>
      </form>

      <input
        className="search-input"
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="cards-container">
        {students
          .filter((student) =>
            student.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              course={student.course}
              onDelete={() => deleteStudent(student.id)}
              onEdit={() => editStudent(student)}
            />
          ))}
      </div>
    </main>
  );
}

export default Students;