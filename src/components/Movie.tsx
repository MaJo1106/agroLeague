import React from 'react';
import { useSelector } from 'react-redux';
import { selectorMovie } from '../store/store';

import './Movie.css';

const Movie: React.FC = () => {
  const movie = useSelector(selectorMovie);

  console.log('movie', movie);

  return (
    <div className='information-movie-container'>
      <div className='poster-container'>
        {movie.poster && (
          <img src={movie.poster} alt='poster' />
        )}
      </div>
      <div>
        <div>Titre : </div>
        <div>
          {movie.title} 
        </div>
      </div>
      <div>
        <div>Année : </div>
        <div>
          {movie.year} 
        </div>
      </div>
      <div>
        <div>Director : </div>
        <div>
          {movie.director}
        </div>
      </div>
      <div>
        <div>Pays : </div>
        <div>
          {movie.country} 
        </div>
      </div>
      <div>
        <div>Durée : </div>
        <div>
          {movie.duration} 
        </div>
      </div>
      <div>
        <div>Genre : </div>
        <div>
          {movie.genre} 
        </div>
      </div>
      <div>
        <div>Acteurs : </div>
        <div>
          <ul>
            {movie.actors.map((act, index) =>
              <li key={index}>{act}</li>
            )}
          </ul>
        </div>
      </div>
      <div>
        <div>Langue : </div>
        <div>
          {movie.language} 
        </div>
      </div>
      <div>
        <div>Description : </div>
        <div>
          {movie.description} 
        </div>
      </div>
    </div>
  );
};

export default Movie;