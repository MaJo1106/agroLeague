import React, { ChangeEvent, useState } from 'react';
import SearchServices from '../services/SearchServices';

interface Movie {
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
}
const SearchMovie: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  
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

  console.log(searchValue, movie);
  return (
    <div>
      <input name='searchValue' value={searchValue} type='text' onChange={handleChangeValue} />
      <button onClick={handleSearchMovie}> Search </button>
      {movie && (
        <>
          {movie.poster && (
            <div className='poster-container'>
              <img src={movie.poster} alt='movie-poster' />
            </div>
          )}
          <div className='movie-information'>
            <div className='movie-title'>{movie.title}</div>
            <div className='movie-genre'>{movie.genre}</div>
            <div className='movie-duration'>{movie.duration}</div>
            <div className='movie-year'>{movie.year}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchMovie;