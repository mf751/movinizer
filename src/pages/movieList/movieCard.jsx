import { FaImdb } from "react-icons/fa";
import GetGenre from "../../helpers/genres";

export default function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="movie-card">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt="Poster"
        />
      </div>
      <p>
        {movie.original_language.toUpperCase()},{" "}
        {movie.release_date.substring(0, 4)}
      </p>
      <h2 className="title">{movie.title}</h2>
      <div className="rating">
        <FaImdb className="imdb" />
        <span>{movie.vote_average.toString().substring(0, 3)}</span>
      </div>
      <p className="genres">
        {movie.genre_ids.map((id) => GetGenre(id) + ", ")}
      </p>
    </div>
  );
}
