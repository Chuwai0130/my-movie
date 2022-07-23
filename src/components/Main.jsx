import React, { useState } from "react";
import requests from "../Request";
import axios from "axios";
import Slider from "react-slick";

import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  const [trending, setTrending] = useState([]);

  function random() {
    let result = trending[Math.floor(Math.random() * trending.length)];
    return result;
    
  }

  const randomTrending = trending[Math.floor(Math.random() * trending.length)];

  useEffect(() => {
    axios.get(requests.requestTrending).then((res) => {
      setTrending(res.data.results);
    });
  }, []);
  //console.log(trending);

  
  return (
    <div className="max-w-[1140px] mx-auto py-6 px-4">
      <div className="text-center">
        <h2 className="text-white font-bold my-2 p-4 text-2xl ">Now Trending</h2>
        <Slider className="z-20 h-90 flex justify-center items-center" {...setting}>
          <div className="relative group max-w-[768px]">
            <img
              className="mx-auto "
              src={`https://image.tmdb.org/t/p/w780${trending[0]?.backdrop_path}`}
              alt="blah"
            />
            <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-white 
            opacity-0  sm:group-hover:h-full group-hover:h-20 group-hover:opacity-50 duration-500">
            <h1 className="text-xl font-bold">{trending[0]?.title != undefined ? trending[0]?.title : trending[0]?.name}</h1>
            </div>
          </div>

          <div className="relative group max-w-[768px]">
            <img
              className="w-auto mx-auto"
              src={`https://image.tmdb.org/t/p/w780${trending[1]?.backdrop_path}`}
              alt="blah"
            />
             <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-white
            opacity-0 sm:group-hover:h-full group-hover:h-20 group-hover:opacity-50 duration-500">
            <h1  className="text-xl font-bold">{trending[1]?.title != undefined ? trending[1]?.title : trending[1]?.name}</h1>
            </div>
          </div>

          <div className="relative group max-w-[768px]">
            <img
              className="w-auto mx-auto"
              src={`https://image.tmdb.org/t/p/w780${trending[2]?.backdrop_path}`}
              alt="blah"
            />
             <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-white 
            opacity-0 sm:group-hover:h-full group-hover:h-20 group-hover:opacity-50 duration-500">
            <h1  className="text-xl font-bold">{trending[2]?.title != undefined ? trending[2]?.title : trending[2]?.name}</h1>
            </div>
          </div>

          <div className="relative group max-w-[768px]">
            <img
              className="w-auto mx-auto"
              src={`https://image.tmdb.org/t/p/w780${trending[3]?.backdrop_path}`}
              alt="blah"
            />
             <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-white 
            opacity-0 sm:group-hover:h-full group-hover:h-20 group-hover:opacity-50 duration-500">
            <h1  className="text-xl font-bold">{trending[3]?.title != undefined ? trending[3]?.title : trending[3]?.name}</h1>
            </div>
          </div>

          <div className="relative group max-w-[768px]">
            <img
              className="w-auto mx-auto"
              src={`https://image.tmdb.org/t/p/w780${trending[4]?.backdrop_path}`}
              alt="blah"
            />
             <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-white 
            opacity-0 sm:group-hover:h-full group-hover:h-20 group-hover:opacity-50 duration-500">
            <h1  className="text-xl font-bold">{trending[4]?.title != undefined ? trending[4]?.title : trending[4]?.name}</h1>
            </div>
          </div>

        </Slider>

      </div>
    </div>
  );
};

export default Main;
