/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import MovieAndTvCard from "../../../common/MovieAndTvCard";

const Category = ({ title, movieData, tvData }) => {
  const [selectedType, setSelectedType] = useState("movie");

  useEffect(() => {
    const scrollContainer = document.querySelector(`#${title}scrollableContainer`);
    scrollContainer?.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }, [selectedType])
  return (
    <div>
      <div className="flex gap-x-3 items-center">
        <p className="text-xl font-bold">{title}</p>
        <div className="flex items-center bg-black rounded-md py-2 px-4 gap-x-2">
          <p
            onClick={() => setSelectedType('movie')}
            className={`${
              selectedType === "movie" ? "bg-gray-700  rounded-md" : ""
            } cursor-pointer px-3 py-1`}
          >
            Movies
          </p>
          <p
            onClick={() => setSelectedType('tv')}
            className={`${
              selectedType === "tv" ? "bg-gray-700  rounded-md" : ""
            } cursor-pointer px-3 py-1`}
          >
            TV Shows
          </p>
        </div>
      </div>
      <>
        {
            selectedType === 'movie'? (
                <div id={title + "scrollableContainer"} className="flex my-4 w-full overflow-scroll gap-x-2 no-scrollbar">
                    {
                        movieData?.map((movie) => {
                           return  <div key={movie.id}>
                                <MovieAndTvCard type={selectedType} data={movie}/>
                            </div>
                        })
                    }
                </div>
            ): (
                <div  id={title + "scrollableContainer"} className="flex my-4 w-full overflow-scroll gap-x-2 no-scrollbar">
                    {
                        tvData?.map((tv) => {
                           return  <div key={tv.id}>
                                <MovieAndTvCard type={selectedType} data={tv}/>
                            </div>
                        })
                    }
                </div>
            )
        }
      </>
    </div>
  );
};

export default Category;
