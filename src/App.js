import React from 'react';

import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

import { trackPromise } from 'react-promise-tracker';

import './App.css';

function App() {
  const API_URL = 'https://api.chucknorris.io/jokes/random'

  const [joke, setJoke] = React.useState('')

  const generateJoke = () => {
    trackPromise(
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value))
    )}

  const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

       return (
        promiseInProgress && 
        <div
          style={{
            width: "100%",
            height: "50",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="rebeccapurple" height="50" width="50" />
    </div>
      );  
    }

  React.useEffect(() => {
    
    generateJoke();
    
  }, [])

   return (
     <div className="App">
       <h2>Chuck Norris Jokes Generator</h2>
       <LoadingIndicator/>
       <p dangerouslySetInnerHTML={{__html: joke}} />
       <button onClick={generateJoke}>
          next joke <span role="img" aria-label="smile">😄</span>
       </button>
     </div>
   );
}

export default App;
