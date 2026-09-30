import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 px-6 py-4 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-xl font-bold">Yared Technology School</h1>

        <div className="flex gap-6">
          <Link
            to="/"
            className="transition hover:text-blue-400"
          >
            Dashboard
          </Link>

          <Link
            to="/students"
            className="transition hover:text-blue-400"
          >
            Students
          </Link>

          <Link
            to="/courses"
            className="transition hover:text-blue-400"
          >
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
