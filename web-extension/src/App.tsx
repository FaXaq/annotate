import React, { useState } from 'react';
import { API_URL } from './utils/env';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const url = API_URL;

  console.log(url);

  return (
    <div className="App">
      {
        isLoading ? (
          <p>Loading</p>
        ) : (
          <p>Loaded !</p>
        )
      }
    </div>
  );
}

export default App;
