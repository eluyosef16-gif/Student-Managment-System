function Dashboard({ students, courses }) {
  return (
    <main>
      <h2>Student Managment System</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Courses</h3>
          <p>{courses.length}</p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;