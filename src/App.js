import React from 'react';

import './App.css';

function App() {
  const API_URL = 'https://api.chucknorris.io/jokes/random'

  const [joke, setJoke] = React.useState('')

  const generateJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }


  React.useEffect(() => {
    generateJoke();
  }, [])


  return (
    <div className="App">
      <h2>Chuck Norris Jokes Generator</h2>
      <p>{joke}</p>
      <button onClick={generateJoke}>
         next joke <span role="img" aria-label="smile">😄</span>
      </button>
    </div>
  );
}

export default App;
