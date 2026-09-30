import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="flex items-center gap-6 border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <Link
        to="/"
        className="font-medium text-gray-600 hover:text-blue-600"
      >
        Dashboard
      </Link>

      <Link
        to="/students"
        className="font-medium text-gray-600 hover:text-blue-600"
      >
        Students
      </Link>

      <Link
        to="/courses"
        className="font-medium text-gray-600 hover:text-blue-600"
      >
        Courses
      </Link>
    </nav>
  );
}

export default Sidebar;