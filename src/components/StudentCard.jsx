function StudentCard({ name, course, onDelete, onEdit }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
        Student
      </span>

      <h3 className="mt-4 text-xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 text-gray-600">
        <strong>Course:</strong> {course}
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={onEdit}
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="rounded-lg border border-red-300 px-4 py-2 font-medium text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;