import { useEffect, useState } from 'react';
import './App.css';
import AuthorsToProcess from './components/AuthorsToProcess/AuthorsToProcess';
import DatabaseAuthors from './components/DatabaseAuthors/DatabaseAuthors';

function App() {
  const [data, setData] = useState([]);
  const apiAddress = import.meta.env.VITE_API_ADDRESS;

  useEffect(() => {
    const fetchData = (url) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Bad Response: ${response.status}`);
          }
          return response.json();
        })
        .then((dataFetched) => {
         setData(dataFetched.authors);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchData(apiAddress)
  }, [])

  return (
    <>
      <h1>Testing Area</h1>
      {data.length === 0 ? null : <DatabaseAuthors data = {data} />}
      {/* <AuthorsToProcess /> */}
    </>
  );
}




export default App