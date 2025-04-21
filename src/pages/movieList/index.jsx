import MovieCard from "./movieCard";
import "./style.css";

export default function MovieList({ movieList, listTitle }) {
  return (
    <div className="movie-list-container">
      <h1>{listTitle}</h1>
      <div className="movie-list">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
