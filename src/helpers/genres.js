import { useSelector } from "react-redux";

export default function GetGenre(id) {
  const genres = useSelector((state) => state.movies).genres;
  for (let i = 0; i < genres.length; i++) {
    if (genres[i].id === id) return genres[i].name;
  }
  return "";
}
