import { useParams } from "react-router-dom";

export default function MoviesDetailsPage({ movie, movies }) {
  const { movieName } = useParams();
  const movieDetail = movies.filter((m) => m.title === movieName);
  const movieArray = movieDetail[0];
  return (
    <div className="MovieDetailsPage">
      <img src={movieArray.posterPath} alt="Poster" />
      <div className="DetailsText">
        <h3>{movieArray.title}</h3>
        <h5>Opening Day: {movieArray.releaseDate}</h5>
        <p>Starring: {movieArray.cast.join(", ")}</p>
      </div>
    </div>
  );
}
