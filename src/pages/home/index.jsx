import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { setAllGenres, setMovies } from "../../store/slices/moviesLoaded";
import { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";
import MovieList from "../movieList/index.jsx";

export default function Home() {
  const movies = useSelector((state) => state.movies).movies;
  const genres = useSelector((state) => state.movies).genres;
  const dispatch = useDispatch();
  const [mainMovie, setMainMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  async function genresSetter() {
    let res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    );
    let jsonRes = await res.json();
    dispatch(setAllGenres(jsonRes.genres));
  }
  async function moviesSetter() {
    const movieLists = {
      "Popular Movies": `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      "Trending Movies": `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
      "Top Rated": `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
      "Now playing in theaters": `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
      "Upcoming Movies": `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
    };

    let moviesTemp = {};
    for (const [name, val] of Object.entries(movieLists)) {
      await fetch(val).then((res) =>
        res.json().then((res) => {
          moviesTemp[name] = res.results;
        }),
      );
    }
    dispatch(setMovies(moviesTemp));
  }

  useEffect(() => {
    async function fetching() {
      setLoading(true);
      await genresSetter();
      await moviesSetter();
      setLoading(false);
    }
    fetching();
  }, []);
  if (
    !loading &&
    Object.keys(movies).length > 0 &&
    Object.keys(mainMovie).length === 0
  ) {
    setMainMovie(movies["Popular Movies"][0]);
  }
  const backgroundImageStyle =
    Object.keys(mainMovie).length > 0
      ? {
          backgroundImage: `url(https://images.tmdb.org/t/p/original${mainMovie.backdrop_path})`,
        }
      : {};

  let lists = [];
  for (const [listName, list] of Object.entries(movies)) {
    lists.push(
      <MovieList movieList={list} key={lists.length} listTitle={listName} />,
    );
  }
  return (
    <div className="home-container">
      <div className="header-movie" style={backgroundImageStyle}>
        <h2 style={{ marginTop: "0" }}>{mainMovie?.title}</h2>
        <p className="rating">
          <FaImdb className="imdb" />
          <span>{mainMovie?.vote_average?.toString()?.substring(0, 3)}</span>
          <span>, {mainMovie?.release_date?.substring(0, 4)}</span>
        </p>
        <p>{mainMovie?.overview?.substring(0, 250) + "..."}</p>
      </div>
      {lists}
    </div>
  );
}
