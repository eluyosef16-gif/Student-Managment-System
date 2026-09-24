function CourseCard({
  name,
  instructor,
  onDelete,
  onEdit,
}) {
  return (
    <div className="course-card">
      <h3>{name}</h3>

      <p>
        <strong>Instructor:</strong> {instructor}
      </p>

      <div className="card-buttons">
        <button onClick={onEdit}>Edit</button>

        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default CourseCard;