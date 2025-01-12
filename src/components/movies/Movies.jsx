import { useDispatch, useSelector } from "react-redux";
import { setDiscoverMovie } from "../../store/slices/appSlice";
import { DISCOVER_MOVIE_URL, TMDB_API_OPTIONS } from "../../utils/constants";
import useFetchMovieDetails from "../../utils/hooks/useFetchMovieDetails";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/bootstrap.css";
import { useEffect, useState } from "react";
import DiscoverMovieAndTv from "../common/DiscoverMovieAndTv";

const Movies = () => {
  const discoverMovie = useSelector((state) => state.app.discoverMovie);
  const dispatch = useDispatch();
  useFetchMovieDetails(
    DISCOVER_MOVIE_URL(1),
    setDiscoverMovie,
    discoverMovie,
    true
  );

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const scrollContainer = document.querySelector("#parentContainer");
    scrollContainer?.scrollTo(0, 0);
  }, [currentPage]);

  if (
    discoverMovie?.results?.length === 0 ||
    discoverMovie?.results?.length === undefined
  )
    return;

  const handlePageChange = async (e) => {
    setCurrentPage(e);
    const res = await fetch(DISCOVER_MOVIE_URL(e), TMDB_API_OPTIONS);
    const data = await res.json();
    dispatch(setDiscoverMovie(data));
  };

  return (
    <div className="h-full">
      <DiscoverMovieAndTv type={"movie"} data={discoverMovie?.results} />
      <div className="flex justify-center">
        <ResponsivePagination
          extraClassName="pb-5 w-fit"
          current={currentPage}
          total={discoverMovie?.total_pages}
          onPageChange={handlePageChange}
          maxWidth={300}
        />
      </div>
    </div>
  );
};

export default Movies;
