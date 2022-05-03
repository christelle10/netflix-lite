import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"



const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData();
        // if [], run once when the row loads, and dont run again
    }, [fetchUrl]);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
        
    };

   const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_title || "") 
            .then((url) => { 
                const urlParams = new URLSearchParams(new URL(url).search); //parse in a whole youtube url, and get the Id after the question mark
                setTrailerUrl(urlParams.get("v"));
                
            })
            .catch((error) => console.log(error));
        }
        
    };

    
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_Posters">
                {movies.map(movie => (
                    <img 
                    key = {movie.id} /*optimize for faster loading of shows*/
                    onClick = {() => handleClick(movie)}
                    className={`row_Poster ${isLargeRow && "row_PosterLarge"}`} /*largeRow will be assigned classname row_PosterLarge */
                    src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} /*if largeRow is used, use poster, else use backdrop or thumbnail */
                    alt={movie.name} 
                    />
                ))}

            </div>
            {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} />}
        </div>
    );
}

export default Row;