import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            console.log(request);
            return request;
        }
        fetchData();
    },[fetchUrl])
    // console.log(movies);


    const images = movies.map(movie => {
        return <a className='movie--links' key={movie.id} target="_blank" rel="noreferrer" href={`https://www.youtube.com/results?search_query=${movie?.title||movie.name} Trailer` }><img 
            key={movie.id} 
                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.title} /></a>
     })




  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {images}
        </div>
    </div>
  )
}

export default Row