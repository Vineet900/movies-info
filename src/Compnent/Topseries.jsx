import React, { useState, useEffect } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Trendingmovies() {
  const [result, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://imdb146.p.rapidapi.com/v1/find/?query=Series`,
          {
            headers: {
              "X-RapidAPI-Key": "1599e8d0b6msh619c88982a55f21p1bc7cfjsnfdb427ea5144"
            }
          }
        );
        const responsedata = await response.json();
        setResults(responsedata);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchdata();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  // Ensure result is not null before accessing its properties
  const titleResults = result?.titleResults;
  const tilteposter = titleResults ? titleResults.results : [];

  return (
    <div>
       <Home/>
    
    <div className=" lg:border-2 md:border-2  border-black lg:w-[96vw] md:w-[60vw] lg:h-[70vh] md:h-[70vh] ml-5  rounded-2xl  ">
    <h1 className='ml-20  font-bold text-2xl relative top-12'>Top series</h1>
    <div  className="lg:grid-cols-5 mt-10 md:grid-cols-3 grid-cols-2 grid lg:ml-0 md:ml-10 ml-7 h-[60vh] p-3 gap-4 ">
    
      {tilteposter.map((item, index) => (
        <img   className="lg:h-[50vh] md:h-[50vh] h-[30vh] mt-8 hover:scale-105 transition-all drop-shadow-2xl rounded-xl" key={index} src={item.titlePosterImageModel?.url} alt="" /> // Use optional chaining here
      ))}
    </div>
   
    </div>
    </div>
  );
}

export default Trendingmovies;
