import { Link } from "react-router-dom";

export default function ({ movie, index, key, title, date, poster, cast }) {
  return (
    <div className="MovieCard">
      <Link to={{ pathname: `/movies/${title}`, state: { movie: { movie } } }}>
        <h1>{title}</h1>
      </Link>
      <h4>Released: {date}</h4>
      <img src={poster} alt="poster" />
      <p>Cast: {cast}</p>
    </div>
  );
}
