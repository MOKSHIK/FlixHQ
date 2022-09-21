import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './Search.svg'
import MovieCard from './components/MovieCard';


/** Api Url **/
// const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=767166676ab70d14cccd7a17e5ce3c5d'
const API_URL = 'http://www.omdbapi.com?apikey=3287c22a';


/** Fetching the Data From The API **/

const App = () => {
  
  const [searchTerm, setSearchTerm ] = useState('')
  const [movies, setMovies ] = useState([]);

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
    console.log(data)
  }

/** Seaarching the Movie  **/

  useEffect(() => {
    searchMovies('Batman')
  }, []);

/** Body OF Website **/

  return (
    <div className='app'>
      <h1>FlixHQ</h1>
      <div className='search'>
        <input 
          placeholder=' Search for movies'
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon} 
          alt= "search"
          onClick={()=>searchMovies(searchTerm)}/>
      </div>

      {movies?.length > 0 
      ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
