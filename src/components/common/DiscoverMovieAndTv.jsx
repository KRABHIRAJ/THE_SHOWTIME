/* eslint-disable react/prop-types */

import MovieAndTvCard from "./MovieAndTvCard";

const DiscoverMovieAndTv = ({data}) => {
    if(data.length === 0) return;

    return (
      <div className="p-4 grid grid-cols-3 md:grid-cols-5 gap-4 justify-center">
          {
              data.map((data) => {
                return ((data?.profile_path == null && data?.poster_path===null) || data?.poster_path === null) ? null : 
                   <div className="flex justify-center" key={data?.id}>
                      <MovieAndTvCard  data={data} />
                  </div>
              })
          }
      </div>
    )
  }

export default DiscoverMovieAndTv