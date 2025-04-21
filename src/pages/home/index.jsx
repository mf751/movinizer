import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { setGenres, setMovies } from "../../store/slices/moviesLoaded";
import { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";
import MovieList from "../movieList/index.jsx";

export default function Home() {
  const movies = useSelector((state) => state.movies).movies;
  const dispatch = useDispatch();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
    ).then((res) => res.json().then((res) => dispatch(setGenres(res.genres))));
    fetch("https://api.themoviedb.org/3/trending/movie/week?page=4", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
      },
    }).then((res) => {
      res.json().then((res) => {
        setLoading(false);
        dispatch(setMovies(res.results));
        setBackgroundImage(
          `https://image.tmdb.org/t/p/original${res.results[0].backdrop_path}`,
        );
      });
    });
  }, []);
  console.log;
  return (
    <div className="home-container">
      <div
        className="header-movie"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h2 style={{ marginTop: "0" }}>{movies[0]?.title}</h2>
        <p className="rating">
          <FaImdb className="imdb" />
          <span>{movies[0]?.vote_average.toString().substring(0, 3)}</span>
          <span>, {movies[0]?.release_date.substring(0, 4)}</span>
        </p>
        <p>{movies[0]?.overview.substring(0, 250) + "..."}</p>
      </div>
      <MovieList movieList={movies.slice(1)} listTitle={"Trending Movies"} />
      <MovieList movieList={movies.slice(1)} listTitle={"Trending Movies"} />
    </div>
  );
}
