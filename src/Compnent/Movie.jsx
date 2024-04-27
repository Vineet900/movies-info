import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Movie() {
  const { name } = useParams();
  const [images, setImages] = useState([]);
  const [video,setVideos]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://imdb146.p.rapidapi.com/v1/title/?id=${name}`, // Use 'name' in the URL
          {
            headers: {
              "X-RapidAPI-Key":
                "1599e8d0b6msh619c88982a55f21p1bc7cfjsnfdb427ea5144",
            },
          }
        );
        const responseData = await response.json();
        
        // Check if the response contains images
        if (responseData && responseData.primaryImage) {
          setImages([responseData.primaryImage]); 
          
          
        } else {
          setImages([]);
        }
        if (responseData && responseData.primaryVideos.edges[0].node) {
          setVideos([responseData.primaryVideos.edges[0].node]); 
          
          
        } else {
          setVideos([]);
        }
      
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setImages([]);
        setVideos([])
      }
    };

    fetchData();
  }, [name]);
 console.log(video )
  return (
    <div>
      <Navbar/>
      {images.length > 0 ? (
        images.map((image, index) => (
          <div key={index}>
            <img className="rounded-xl lg:h-96 md:h-40 h-60 lg:ml-14 md:ml-14 ml-28 mt-32 relative top-20  " src={image.url} alt={`Movie ${index + 1}`} />
            <h1 className=" ml-[6vw] font-serif lg:text-lg md:text-sm text-xs relative lg:bottom-[62vh] p-7 md:bottom-[55vh] bottom-[70vh] "><span className="font-bold">Cast</span> : {image.caption.plainText}</h1>
          </div>
        ))
      ) : (
        <div>No images to display</div>
      )}
      {video.length>0?(
        video.map((item,index)=>(
          <div key={index} className="flex " >
         <video   controls className="lg:ml-96 md:ml-60 ml-20 relative lg:bottom-96 md:bottom-40 bottom-0 lg:h-96 md:h-40 h-40 " >
          <source  src={item.playbackURLs[0].url} type="video/mp4" />
         </video>
         <h1 className="relative lg:bottom-[65vh]  lg:right-[70vw] md:right-[50vw] right-[99vw] md:bottom-40 bottom-[75vh]  font-serif lg:text-xl md:text-sm text-xs ml-60 "><span className="font-bold">Name:</span> {item.primaryTitle.originalTitleText.text}</h1>
         </div>
        ))
      ):(
        <div>no video found</div>
      )}

   
    </div>
  );
}
