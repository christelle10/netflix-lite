import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals); //fetch movies featured in banner from Netflix Originals
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ] // randomly select movie to be featured for header
            );
            return request;
        }
        fetchData();
    }, []);

console.log(movie);
function truncate(str, n) { //function to shorten description, ending with ellipses when description is too long
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
  return (
    <header className= "banner"
      style = {{
          backgroundSize: "cover",
          backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
          backgroundPosition: "center center",
      }}
      > 
        <div className = "banner_Contents">
            {/* title*/}
            <h1 className="banner_Title">
                {movie?.title || movie?.name || movie?.original_name} {/*handle different cases where API is not consistent with the content it fetches*/}
            </h1>
            <div className="banner_buttons">
                <button className = "banner_button">Play</button>
                <button className = "banner_button">My List</button>
            </div>
            <h1 className = "banner_Description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className= "banner_fadeBottom" />
        
    </header>
  )
}

export default Banner