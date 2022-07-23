import React, { useState, useEffect } from "react";
import requests from "../Request";
import axios from "axios";
import Card from "./Card";


function Movie() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios.get(requests.requestMovieTrending)
        .then((res) => setMovie(res.data.results))
    },[])
    //console.log(movie[0]?.genre_ids)

  return (
    <div className="max-w-[1140px] mx-auto h-40 py-6 my-6 px-4">
      <div className="w-full border-blue-50 border-b-2 border-b-primary flex justify-between items-center">
        <h1 className="text-white italic text-4xl font-bold">Movie</h1>
        <p className="text-white cursor-pointer italic hover:text-primary duration-300">
          more...
        </p>
      </div>
      
      <div className="grid grid-col my-4 md:grid-cols-3 gap-2">
        <Card img={movie[0]?.backdrop_path} title={movie[0]?.original_title} time={movie[0]?.release_date} popularity={movie[0]?.popularity} review={movie[0]?.vote_average} plot={movie[0]?.overview} genre={movie[0]?.genre_ids}/>
        <Card img={movie[1]?.backdrop_path} title={movie[1]?.original_title} time={movie[1]?.release_date} popularity={movie[1]?.popularity} review={movie[1]?.vote_average} plot={movie[1]?.overview} genre={movie[1]?.genre_ids}/>
        <Card img={movie[2]?.backdrop_path} title={movie[2]?.original_title} time={movie[2]?.release_date} popularity={movie[2]?.popularity} review={movie[2]?.vote_average} plot={movie[2]?.overview} genre={movie[2]?.genre_ids}/>
        <Card img={movie[3]?.backdrop_path} title={movie[3]?.original_title} time={movie[3]?.release_date} popularity={movie[3]?.popularity} review={movie[3]?.vote_average} plot={movie[3]?.overview} genre={movie[3]?.genre_ids}/>
        <Card img={movie[4]?.backdrop_path} title={movie[4]?.original_title} time={movie[4]?.release_date} popularity={movie[4]?.popularity} review={movie[4]?.vote_average} plot={movie[4]?.overview} genre={movie[4]?.genre_ids}/>
        <Card img={movie[5]?.backdrop_path} title={movie[5]?.original_title} time={movie[5]?.release_date} popularity={movie[5]?.popularity} review={movie[5]?.vote_average} plot={movie[5]?.overview} genre={movie[5]?.genre_ids}/>
      </div>
    </div>
  );
}

export default Movie;
