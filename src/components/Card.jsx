import React, { useState } from "react";
import { AiFillStar, AiFillFire } from "react-icons/ai";
import requests from "../Request";
import axios from "axios";
import { useEffect } from "react";

function Card({ img, title, plot, review, popularity, genre }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios
      .get(requests.requestMovieGenre)
      .then((res) => setGenres(res.data.genres));
  }, []);
  //console.log(genres)
  //Here I got the genre-data through axios data fetch. This 'genres-index' contained all the genres and their matching numbder. Detailed information can be found in Request.js through requestMovieGenre

  function sliceText(str) {
    let result = str?.slice(0, 120);
    return result;
  }

  function usToEu(p) {
    let result = p?.replace(".", ",");
    return result;
  }

  function checkType(arr) {
    console.log(arr);
  }
  
  // this is my approach if this is in vanilla js, but with react i cant let the arr.map to work since the prop 'genre' is not an actual array. 
  
  

  // function getGenres(arr) {
  //   let result = [];
  //   arr.map((num) => {
  //     let search = genres.find((x) => num === x.id);
  //     result.push(search.name);
  //   });
  //   return result;
  // }

  

  return (
    <div className="bg-gray-800 text-white items-center">
      <div className="relative group">
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt="fuck you"
        />
        <div
          className="absolute top-0 right-0  w-0 h-full flex flex-row  bg-gray-500
            opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-70 duration-500"
        >
          <div className="w-[170px] flex justify-center items-center border-r-primary border-r-2 p-2">
            <p className="text-white font-bold text-xl">{title}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-sm p-1 my-2">{sliceText(`${plot}`)}...</p>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <AiFillStar className="text-yellow-200" />
                <p className="font-bold font-xl">{review}/10</p>
              </div>
              <div className="flex flex-row items-center">
                <AiFillFire className="text-red-400" />
                <p>{usToEu(`${popularity}`)}</p>
              </div>
            </div>
            <div>
              {/* Each film's genre has been passed down through the Movie component as props, but through console loging i knew that the data i want is an array nested inside this genre props(which is an object).
              So right now i have 3 problems: first is how do i access this array of numbers, second one is that i need a function to firstly find the matching genre and then render them, and lastly 
              how do I style them, as in i want every genre to look a bit different from each other when i render them on the screen.     */}
              {checkType({ genre })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
