import { useSelector } from "react-redux";
import Category from "./category/Category";

const MainContainer = () => {
    const nowPlayingMovies = useSelector((state) => state.app.nowPlayingMovies);
    const popularMovies = useSelector((state) => state.app.popularMovies);
    const trendingMovies = useSelector((state) => state.app.trendingMovies);
    const topRatedMovies = useSelector((state) => state.app.topRatedMovies);
    const nowPlayingTvShows = useSelector((state) => state.app.nowPlayingTvShows);
    const popularTvShows = useSelector((state) => state.app.popularTvShows);
    const trendingTvShows = useSelector((state) => state.app.trendingTvShows);
    const topRatedTvShows = useSelector((state) => state.app.topRatedTvShows);
  return (
    <div className="p-4 w-full bg-gray-700">
        <Category title={'Upcoming / On The Air'} movieData={nowPlayingMovies} tvData={nowPlayingTvShows} />
        <Category title={'Trending'} movieData={trendingMovies} tvData={trendingTvShows} />
        <Category title={'Top Rated'} movieData={topRatedMovies} tvData={topRatedTvShows} />
        <Category title={'Popular'} movieData={popularMovies} tvData={popularTvShows} />
    </div>
  )
}

export default MainContainer