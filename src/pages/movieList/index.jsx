import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import MovieCard from "./movieCard";
import "./style.css";
import { useRef } from "react";

export default function MovieList({ movieList, listTitle }) {
  const scrollRef = useRef();
  function scroll(direction) {
    const amount = 800;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -amount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  }
  return (
    <div className="movie-list-container">
      <h1>{listTitle}</h1>
      <HiChevronLeft className="left arrow" onClick={() => scroll("left")} />
      <HiChevronRight className="right arrow" onClick={() => scroll("right")} />
      <div className="movie-list" ref={scrollRef}>
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
