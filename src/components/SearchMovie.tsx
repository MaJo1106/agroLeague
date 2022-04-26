import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchServices from '../services/SearchServices';
import { Movie, selectMovie } from '../store/store';
import { useDispatch } from 'react-redux';
import './SearchMovie.css'

const SearchMovie: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const history = useNavigate();
  const dispatch = useDispatch();
  
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  
  const handleSearchMovie = () => {
    SearchServices.getMovie(searchValue).then((data) => setMovie({
      title: data.Title,
      year: data.Year,
      actors: data.Actors.split(', '),
      director: data.Director,
      duration: data.Runtime,
      genre: data.Genre,
      language: data.Language,
      poster: data?.Poster,
      description: data.Plot,
      country: data.Country
    }));
  }

  // TODO: Chercher une meilleure façon pour la gestion des nulls
  const handleSelectMovie = () => {
    if (movie) {
      dispatch(selectMovie(movie))
      history(`/movie/${movie?.title}`)
    }
  }

  return (
    <>
      <div className='search-container'>
        <input name='searchValue' value={searchValue} type='text' onChange={handleChangeValue} />
        <button onClick={handleSearchMovie}> Search </button>
      </div>
      <div className='result-container'>
        {movie && (
          <>
            {movie.poster && (
              <div className='poster-container'>
                <img src={movie.poster} alt='movie-poster' />
              </div>
            )}
            <div className='movie-information' onClick={handleSelectMovie}>
              <div className='movie-title'>{movie.title}</div>
              <div className='movie-genre'>{movie.genre}</div>
              <div className='movie-duration'>{movie.duration}</div>
              <div className='movie-year'>{movie.year}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchMovie;