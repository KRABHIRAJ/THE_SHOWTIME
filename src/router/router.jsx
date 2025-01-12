import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../components/home/Home";
import Movies from "../components/movies/Movies";
import TvShow from "../components/tvShow/TvShow";
import WatchMovieAndTv from "../components/watch/WatchMovieAndTv";
import SearchResult from "../components/searchResult/SearchResult";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TvShow />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/watch/:id" element={<WatchMovieAndTv />} />
            <Route path="/:type/watch/:id" element={<WatchMovieAndTv />} />
        </Route>
    )
)

export default router;