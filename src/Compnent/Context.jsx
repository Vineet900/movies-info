import React, { createContext, useState } from "react";

 const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [movieResult, setMovieResult] = useState(null);

  return (
    <ThemeContext.Provider value={{ movieResult,setMovieResult }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
