import React, { useState, useEffect } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';

function Topmovies() {
  const [result, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          'https://imdb146.p.rapidapi.com/v1/find/?query=Top movies',
          {
            headers: {
              "X-RapidAPI-Key": "1599e8d0b6msh619c88982a55f21p1bc7cfjsnfdb427ea5144"
            }
          }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responsedata = await response.json();
        setResults(responsedata);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error); 
        setLoading(false); 
      }
    };

    fetchdata();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error message
  }

  // Ensure result is not null before accessing its properties
  const titleResults = result?.images || [];
  
  return (
    <div>
      <Home/>
      <div>
 
        {titleResults.map((item, index) => (
          <img key={index} src={item} alt={`Trending Movie ${index}`} /> // Ensure item contains URL
        ))}
      </div>
    </div>
  );
}

export default Topmovies;
