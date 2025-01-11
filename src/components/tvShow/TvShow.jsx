import { useDispatch, useSelector } from "react-redux";
import { setDiscoverTvSeries } from "../../store/slices/appSlice";
import { DISCOVER_TV_SHOW_URL, TMDB_API_OPTIONS } from "../../utils/constants";
import useFetchMovieDetails from "../../utils/hooks/useFetchMovieDetails";
import { useState } from "react";
import DiscoverMovieAndTv from "../common/DiscoverMovieAndTv";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/bootstrap.css";

const TvShow = () => {
  const discoverTvSeries = useSelector((state) => state.app.discoverTvSeries);
  const dispatch = useDispatch();
  useFetchMovieDetails(
    DISCOVER_TV_SHOW_URL(1),
    setDiscoverTvSeries,
    discoverTvSeries,
    true
  );

  const [currentPage, setCurrentPage] = useState(1);
  if (
    discoverTvSeries?.results?.length === 0 ||
    discoverTvSeries?.results?.length === undefined
  )
    return;

  const handlePageChange = async (e) => {
    setCurrentPage(e);
    const res = await fetch(DISCOVER_TV_SHOW_URL(e), TMDB_API_OPTIONS);
    const data = await res.json();
    dispatch(setDiscoverTvSeries(data));
  };

  return (
    <div className="h-full">
      <DiscoverMovieAndTv data={discoverTvSeries?.results} />
      <div className="flex justify-center">
          <ResponsivePagination
            extraClassName="pb-5 w-fit"
            current={currentPage}
            total={discoverTvSeries?.total_pages}
            onPageChange={handlePageChange}
            maxWidth={500}
          />
      </div>
    </div>
  );
}

export default TvShow