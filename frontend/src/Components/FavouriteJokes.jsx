import React, { useState } from 'react';

const FavouriteJokes = () => {
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="container mt-5">
      <h1>Favourite Jokes</h1>
      <div className="row">
      </div>
    </div>
  );
};

export default FavouriteJokes;
