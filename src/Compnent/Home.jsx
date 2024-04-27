import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Context";
import Navbar from "./Navbar";
import Slick from "./Slick";
import Trendingmovies from "./Trendingmovies";
import Marvel from "./Marvel";
import Skeleton from 'react-loading-skeleton';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Upcoming from "./Upcoming";

function Home() {
  const { movieResult } = useContext(ThemeContext);
  const [movieurlresult, setMovieurlresult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieResult) {
      const titleResults = movieResult.titleResults;
      if (titleResults && titleResults.results) {
        setMovieurlresult(titleResults.results);
      } else {
        console.error("Unexpected data structure in movieResult:", movieResult);
      }
      setLoading(false);
    }
  }, [movieResult]);

  return (
    <div>
      <Navbar />
      <div className="relative right-16">
        <Slick />
      </div>
      <div className="relative lg:left-[55vw] md:left-0 left-0 lg:bottom-[58vh] md:bottom-0 bottom-0">
        <Upcoming />
      </div>

      <div className="lg:grid-cols-5 md:grid-cols-3 grid-cols-2 grid lg:ml-4 md:ml-10 ml-7 relative bottom-[50vh] gap-5">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} height={300} className="lg:h-[50vh] md:h-[50vh] h-[30vh] mt-[60vh] hover:scale-105 transition-all drop-shadow-2xl rounded-xl" />
          ))
        ) : movieurlresult.length === 0 ? (
          <div>No movies found</div>
        ) : (
          movieurlresult.map((item, index) => (
            <Link to={`/Movies/${item.id}`} key={index}>
              <img
                className="lg:h-[50vh] md:h-[50vh] h-[30vh] mt-7 hover:scale-105 transition-all drop-shadow-2xl rounded-xl"
                src={item.titlePosterImageModel?.url}
                alt={item.titleNameText}
              />
            </Link>
          ))
        )}
      </div>
      <div className="relative bottom-80">
        <Trendingmovies />
      </div>
      <div className="relative bottom-72">
        <Marvel />
      </div>
      {loading && <Skeleton count={10} />}
    </div>
  );
}

export default Home;
