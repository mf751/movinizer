import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [], genres: [] },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setGenres(state, action) {
      state.genres = action.payload;
    },
  },
});

export const { setMovies, setGenres } = moviesSlice.actions;
export default moviesSlice.reducer;
