import { useSelector } from "react-redux";
import useFetchMovieDetails from "../../utils/hooks/useFetchMovieDetails";
import {
  NOW_PLAYING_TV_URL,
  NOW_PLAYING_URL,
  POPULAR_TV_URL,
  POPULAR_URL,
  TOP_RATED_TV_URL,
  TOP_RATED_URL,
  TRENDING_MOVIES_URL,
  TRENDING_TV_URL,
} from "../../utils/constants";
import {
  setNowPlayingMovies,
  setNowPlayingTvShows,
  setPopularMovies,
  setPopularTvShows,
  setTopRatedMovies,
  setTopRatedTvShows,
  setTrendingMovies,
  setTrendingTvShows,
} from "../../store/slices/appSlice";

const Home = () => {
  const nowPlayingMovies = useSelector((state) => state.app.nowPlayingMovies);
  const popularMovies = useSelector((state) => state.app.popularMovies);
  const trendingMovies = useSelector((state) => state.app.trendingMovies);
  const topRatedMovies = useSelector((state) => state.app.topRatedMovies);
  const nowPlayingTvShows = useSelector((state) => state.app.nowPlayingTvShows);
  const popularTvShows = useSelector((state) => state.app.popularTvShows);
  const trendingTvShows = useSelector((state) => state.app.trendingTvShows);
  const topRatedTvShows = useSelector((state) => state.app.topRatedTvShows);
  useFetchMovieDetails(NOW_PLAYING_URL, setNowPlayingMovies, nowPlayingMovies);
  useFetchMovieDetails(TRENDING_MOVIES_URL, setTrendingMovies, popularMovies);
  useFetchMovieDetails(TOP_RATED_URL, setTopRatedMovies, trendingMovies);
  useFetchMovieDetails(POPULAR_URL, setPopularMovies, topRatedMovies);
  useFetchMovieDetails(
    NOW_PLAYING_TV_URL,
    setNowPlayingTvShows,
    nowPlayingTvShows
  );
  useFetchMovieDetails(TRENDING_TV_URL, setTrendingTvShows, popularTvShows);
  useFetchMovieDetails(TOP_RATED_TV_URL, setTopRatedTvShows, trendingTvShows);
  useFetchMovieDetails(POPULAR_TV_URL, setPopularTvShows, topRatedTvShows);
  return <div className="text-white">Home</div>;
};

export default Home;
