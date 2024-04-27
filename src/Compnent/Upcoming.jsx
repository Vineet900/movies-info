import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Upcoming() {
  const [result, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://imdb146.p.rapidapi.com/v1/find/?query=upcoming`,
          {
            headers: {
              "X-RapidAPI-Key": "1599e8d0b6msh619c88982a55f21p1bc7cfjsnfdb427ea5144"
            }
          }
        );
        const responsedata = await response.json();
        setResults(responsedata);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchdata();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

 
  const titleResults = result?.titleResults;
  const tilteposter = titleResults ? titleResults.results : [];

  return (
    <div className='lg:inline md:inline  relative ]'>
    <div className='border-2 border-black lg:h-[70vh] md:h-[60vh] h-[50vh] lg:w-[40vw] md:w-[35vw] w-[60vw] grid grid-cols-1   '>
      <h1 className='font-bold lg:text-lg md:text-sm text-xs'>Upcoming movies</h1>
    {tilteposter.map((item,index)=>(
   <img className='lg:h-[30vh] md:h-[20vh] h-[15vh]  lg:ml-20 md:ml-0 ml-10 mt-2 hover:scale-105 transition-all' key={index} src={item.titlePosterImageModel?.url} alt="" />
    ))}
    </div>
    </div>
  )
}
  


export default Upcoming;
