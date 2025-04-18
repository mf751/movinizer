import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { setMovies } from "../../store/slices/moviesLoaded";
import { useEffect, useState } from "react";

export default function Home() {
  const movies = useSelector((state) => state.movies).movies;
  const dispatch = useDispatch();
  const [backgroundImage, setBackgroundImage] = useState("");
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/week?page=4", {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    }).then((res) =>
      res.json().then((res) => {
        dispatch(setMovies(res));
        setBackgroundImage(
          `https://image.tmdb.org/t/p/original${res.results[0].backdrop_path}`,
        );
      }),
    );
  }, []);
  fetch("https://api.themoviedb.org/3/movie/933260", {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
  }).then((res) =>
    res.json().then((res) => {
      console.log(res);
    }),
  );
  return (
    <div className="home-container">
      <div
        className="header-movie"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
    </div>
  );
}
