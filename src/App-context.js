//import React from 'react';
import {useState, useEffect, createContext, useContext} from 'react';
let ThemeContext = createContext('violet');
function App() {
  const theme = useContext(ThemeContext)
  console.log("App Component ==> ", theme);
  return (
    <div className="App">
        <h1>Context API</h1>
        <ThemeContext.Provider value={theme}>
          <Form />
        </ThemeContext.Provider>
    </div>
  )
}


function Form() {
  const theme = useContext(ThemeContext)
  console.log("Form component ==> ", theme);
  return (
    <form>
        <Button  />
        <Button  />
    </form>
  )
}

function Button() {
  const theme = useContext(ThemeContext)
  console.log("Button component ==> " , theme);
  return (
    <button
      style={{
        backgroundColor : theme
      }}
    >
      show
    </button>
  )
}
export default App;


