import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchMovie from './components/SearchMovie';
import Movie from './components/Movie';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <div className='movies-title'>
          Movie searcher ...
        </div>
        <Routes>
          <Route path='/' element={<SearchMovie />} />
          <Route path='/movie/:title' element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
