import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <nav>
      <ul>
        <li>Welcome, {user}</li>
        &nbsp; | &nbsp;
        <li>
          <Link to="/">Movie List</Link>
        </li>
        &nbsp; | &nbsp;
        <li>
          <Link to="/actors">Actors</Link>
        </li>
      </ul>
    </nav>
  );
}
