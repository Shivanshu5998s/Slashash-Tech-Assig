import React, { useState } from 'react';

const FavouriteJokes = () => {
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="container mt-5">
      <h1>Favourite Jokes</h1>
      <div className="row">
        {favourites.map(fav => (
          <div className="col-md-4 mb-3" key={fav.id}>
            <div className="card">
              <img src={`https://icanhazdadjoke.com/j/${fav.id}.png`} className="card-img-top" alt="joke" />
              <div className="card-body">
                <p className="card-text">{fav.joke}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteJokes;
