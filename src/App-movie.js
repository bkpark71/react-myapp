import {useState, useEffect} from 'react';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getMovies() {
    let response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
    let json = await response.json();
    setResults(json.data.movies);
    setLoading(false);
  } 
  // const getMovies = async () => {
  //   let response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
  //   let json = await response.json();
  //   setResults(json.data.movies);
  //   setLoading(false);
  // } 
  useEffect(() => {
    getMovies();
  },[])
  console.log(results);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
      </header>
      <h3>{loading ? "Loading..." : null}</h3>
      <ul>
        {results.map((movie, index) => <li key={index}>{movie.id} : {movie.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
