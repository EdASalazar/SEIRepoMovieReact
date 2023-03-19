import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

export default function MoviesListPage({ movies }) {
  const MovieItem = movies.map((m, idx) => (
    <MovieCard
      index={idx}
      key={idx}
      movie={m}
      title={m.title}
      date={m.releaseDate}
      poster={m.posterPath}
      cast={m.cast}
    />
  ));
  return (
    <div className="MoviesListPage">
      <h1>Welcome SEI Film Club</h1>
      <p>{MovieItem}</p>
    </div>
  );
}
