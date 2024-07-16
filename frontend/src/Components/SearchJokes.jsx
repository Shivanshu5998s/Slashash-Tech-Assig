import React, { useState } from 'react';
import axios from 'axios';

const SearchJokes = () => {
  const [term, setTerm] = useState('');
  const [jokes, setJokes] = useState([]);
  const [favourites, setFavourites] = useState([]);

  // Function to search jokes
  const searchJokes = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://icanhazdadjoke.com/search?term=${term}`, {
      headers: { Accept: 'application/json' }
    });
    setJokes(response.data.results);
  };

  const favouriteJoke = async (id, joke) => {
    try {
      const response = await axios.post('/', { id, joke });
      console.log('Response:', response.data);
  
      setFavourites(prevFavourites => [...prevFavourites, { id, joke }]);
      
      alert('Joke added to favourites');
    } catch (error) {
      console.error('Error adding joke:', error.message);
      alert('Failed to add joke to favourites');
    }
  };
  
  
  console.log(favourites,"favourites");
  return (
    <div className="container mt-5">
      <h1>Search for Dad Jokes</h1>
      <form onSubmit={searchJokes} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
      <div className="row">
        {jokes.map(joke => (
          <div className="col-md-4 mb-3" key={joke.id}>
            <div className="card">
              <img src={`https://icanhazdadjoke.com/j/${joke.id}.png`} className="card-img-top" alt="joke" />
              <div className="card-body">
                <p className="card-text">{joke.joke}</p>
                <button
                  className="btn btn-success"
                  onClick={() => favouriteJoke(joke.id, joke.joke)}
                >
                  Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchJokes;
