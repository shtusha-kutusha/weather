import './App.css';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import Weather from './components/Weather/Weather';
import { useState, useEffect } from 'react';

function App() {
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then((json) => { setData(json) })
      .catch(() => { setError(true) })
  }, []);

  if (error) return <Error />;
  else if (!data) return <Loading />;
  else return <Weather data={data} />;
}

export default App;
