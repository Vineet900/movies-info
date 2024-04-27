import React, { useState, useContext, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Context";

function Navbar() {
  const { movieResult, setMovieResult } = useContext(ThemeContext);
  const [info, setInfo] = useState("");
  const [menuState, setMenuState] = useState("closed");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://imdb146.p.rapidapi.com/v1/find/?query=${!info ? 'animal' : info}`,
          {
            headers: {
              "X-RapidAPI-Key": "1599e8d0b6msh619c88982a55f21p1bc7cfjsnfdb427ea5144",
            },
          }
        );
        const responseData = await response.json();
        setMovieResult(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
   
    if (info === "" || menuState === "open") {
      fetchData();
    }
  }, [info, menuState]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info !== "") {
      setMenuState("open");
    }
  };

  const toggleBurgerMenu = () => {
    setMenuState(menuState === "closed" ? "open" : "closed");
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-evenly h-20 z-50 bg-slate-200">
          <img
            className="lg:h-14 md:h-12 h-10 relative lg:right-16 md:right-0 right-0 mt-2"
            src="/theater.png"
            alt="Theater"
          />
          <div className="flex rounded-lg lg:w-20% md:w-18% w-15% h-10 lg:mt-1 md:mt-1 mt-2 lg:ml-8 bg-white md:ml-6 ml-4 border-2">
            <button type="submit">
              <IoIosSearch className="mt-2 size-6 ml-3" />
            </button>
            <input
              placeholder="Search your movie..."
              type="text"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              className="rounded-lg outline-none ml-7 w-[38vw]"
            />
          </div>
          <div className="lg:inline md:inline hidden z-50">
            <ul className="flex gap-6 items-center justify-center text-bold text-md">
              <Link to="/">
                <li className="hover:border-b-2 border-black transition duration-300 ease-in hover:scale-105">
                  HOME
                </li>
              </Link>
              <Link to="/Topmovies">
                <li className="hover:border-b-2 border-black transition duration-300 ease-in hover:scale-105">
                  TOP MOVIES
                </li>
              </Link>
              <Link to="/Topseries">
                <li className="hover:border-b-2 border-black transition duration-300 ease-in hover:scale-105">
                  TOP SERIES
                </li>
              </Link>
              <li className="hover:border-b-2 border-black transition duration-300 ease-in hover:scale-105">
                CONTACT US
              </li>
            </ul>
          </div>
          <GiHamburgerMenu
            onClick={toggleBurgerMenu}
            className="size-5 lg:hidden md:hidden"
          />
        </div>
        {menuState === "open" && (
          <div className="">
            <div
              id="menu"
              className="border-0 h-screen p-10 rounded-lg w-72 shadow-xl lg:hidden md:hidden inline z-50 text-white bg-slate-700"
            >
              <ul className=" mt-3 font-bold text-center ">
                <Link to="/">
                  <li>HOME</li>
                </Link>
                <Link to="/Topmovies">
                  <li>TOP MOVIES</li>
                </Link>
                <Link to="/Topseries">
                  <li>TOP SERIES</li>
                </Link>
                <li>CONTACT US</li>
              </ul>
            </div>
          </div>
        )}
      </form>
    </nav>
  );
}

export default Navbar;
