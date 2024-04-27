import React from "react";
import Home from "./Compnent/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topseries from "./Compnent/Topseries";
import Information from "./Compnent/Information";
import Topmovies from "./Compnent/Topmovies";
import Search from "./Compnent/Search";
import Movie from "./Compnent/Movie"; // corrected import
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Topmovies" element={<Topmovies />} />
          <Route path="/Topseries" element={<Topseries />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Search" element={<Search />} />
          {/* corrected prop name from 'Component' to 'element' */}
          <Route path="/Movies/:name" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
