import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Movie {
  title: string,
  year: string,
  actors: string[],
  director: string,
  duration: string,
  genre: string,
  language: string,
  poster?: string,
  description: string,
  country: string,
};

export interface MovieState {
  movie: Movie,
};

const initialState: MovieState = {
  movie: {
    title: '',
    year: '',
    actors: [],
    director: '',
    duration: '',
    genre: '',
    language: '',
    poster: '',
    description: '',
    country: '',
  }
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    selectMovie: (state: MovieState, action: PayloadAction<Movie>) => {
        state.movie = action.payload
    }
  },
})

export const { selectMovie } = movieSlice.actions;

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectorMovie = (state: RootState) => state.movie.movie;

export default store;