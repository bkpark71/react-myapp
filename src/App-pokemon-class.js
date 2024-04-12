// import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results : [],
      loading : true
    }
    console.log(this.state.results);
    console.log(this.state.loading);
  }
  
  componentDidMount = () => {// 화면이 처음 그려질 때 호출
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10277")
        .then((response)=> response.json())
        .then((json) => {
          this.setState(() => ({results : json.results}));
          this.setState(() => ({loading : false}));
        });
    console.log("화면이 렌더링되었습니다.");
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Poketmons!</h1>
        </header>
        <h3>{this.state.loading ? "Loading..." : null}</h3>
          {!this.state.loading ? <select>
            {this.state.results.map((poketmon,index) => <option key={index}>{poketmon.name}</option>)}
                      </select> : null}
      </div>
    );
  }
}


export default App;
