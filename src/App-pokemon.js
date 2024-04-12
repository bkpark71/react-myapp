// import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10277")
      .then((response)=> response.json())
      .then((json) => {
        setResults(json.results);
        setLoading(false);
      })
  },[])
  console.log(results);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Poketmons!</h1>
      </header>
      <h3>{loading ? "Loading..." : null}</h3>
      <ul>
        {!loading ? <select>
          {results.map( (poketmon) => <option>{poketmon.name}</option>)}
                    </select> : null}
      </ul>
    </div>
  );
}

export default App;
