import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SearchJokes from './Components/SearchJokes';
import FavouriteJokes from './Components/FavouriteJokes';

const App = () => {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">JokesApp</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Search Jokes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favourites">Favourite Jokes</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<SearchJokes />} />
        <Route path="/favourites" element={<FavouriteJokes />} />
      </Routes>
    </div>
  );
};

export default App;
