import React, { useState, useEffect } from 'react';

function Marvel() {
  const [result, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://imdb146.p.rapidapi.com/v1/find/?query=Marvel`,
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
    <div className=" lg:border-2 md:border-2 ml-4  border-black lg:w-[96vw] md:w-[60vw] lg:h-[70vh] md:h-[70vh]    lg:inline md:inline hidden   rounded-2xl   ">
    <h1 className='ml-20  font-bold text-2xl hover'>Marvel</h1>
    <div  className="lg:grid-cols-5 mt-10 md:grid-cols-3 grid-cols-2 grid lg:ml-5 md:ml-10 ml-5 h-[60vh] gap-4 ">
    
      {tilteposter.map((item, index) => (
        <img   className="h-[50vh] mt-8 hover:scale-105 transition-all drop-shadow-2xl rounded-xl  " key={index} src={item.titlePosterImageModel?.url} alt="" /> // Use optional chaining here
      ))}
    
    </div>
    </div>
  );
}

export default Marvel;
