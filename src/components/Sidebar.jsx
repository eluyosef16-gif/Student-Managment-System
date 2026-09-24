import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <h3>Menu</h3>

      <Link to="/">Dashboard</Link>
      <br />

      <Link to="/students">Students</Link>
      <br />

      <Link to="/courses">Courses</Link>
    </aside>
  );
}

export default Sidebar;