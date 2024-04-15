import {useState, useEffect} from 'react';
import Movie from '../components/Movie'

function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getMovies() {
    let response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
    let json = await response.json();
    setResults(json.data.movies);
    setLoading(false);
  } 

  useEffect(() => {
    getMovies();
  },[])
  console.log(results);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
      </header>
      {loading ? <h3>"Loading..."</h3> : 
        results.map((movie) => 
          <Movie 
            key={movie.id} 
            id={movie.id}
            coverImage={movie.medium_cover_image} 
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        )
      }
    </div>
  )
}

export default Home;
