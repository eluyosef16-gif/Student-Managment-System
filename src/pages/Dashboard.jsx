function Dashboard({ students, courses }) {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        Student Management System
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Students
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-600">
            {students.length}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Courses
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-600">
            {courses.length}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;