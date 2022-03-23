import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const queryString = require("query-string");

// Hook
export function useWindowWidth() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    // handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowWidth;
}

// This will get the query string from our url
export function useQuery() {
  //console.log(useLocation().search);
  return queryString.parse(useLocation().search);
}

export function useLocalStorageValue(key) {
  const [localStorageValue, setlocalStorageValue] = useState();
  const localStorage = window.localStorage;
  useEffect(async () => {
    let localStorageValue = await localStorage.getItem(key);
    setlocalStorageValue(localStorageValue);
  }, []);
  //console.log(localStorageValue);
  return localStorageValue;
}
