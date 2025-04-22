import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: {}, genres: [] },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setAllGenres(state, action) {
      state.genres = action.payload;
    },
  },
});

export const { setMovies, setAllGenres } = moviesSlice.actions;
export default moviesSlice.reducer;
