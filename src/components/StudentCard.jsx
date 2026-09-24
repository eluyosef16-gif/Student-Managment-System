function StudentCard({ name, course, onDelete, onEdit }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <div className="card-buttons">
        <button onClick={onEdit}>Edit</button>

        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default StudentCard;