import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchQuery: "",
  tvShowData: [],
  nowPlayingMovies: [],
  trendingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  nowPlayingTvShows: [],
  trendingTvShows: [],
  popularTvShows: [],
  topRatedTvShows: [],
  discoverMovie: [],
  discoverTvSeries: [],
  searchData: [],
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setTrendingMovies: (state, action) => {
      state.trendingMovies = [...action.payload];
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = [...action.payload];
    },
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = [...action.payload];
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = [...action.payload];
    },
    setTrendingTvShows: (state, action) => {
      state.trendingTvShows = [...action.payload];
    },
    setPopularTvShows: (state, action) => {
      state.popularTvShows = [...action.payload];
    },
    setNowPlayingTvShows: (state, action) => {
      state.nowPlayingTvShows = [...action.payload];
    },
    setTopRatedTvShows: (state, action) => {
      state.topRatedTvShows = [...action.payload];
    },
    setTvShowData: (state, action) => {
      state.tvShowData = [...action.payload];
    },
    setDiscoverMovie: (state, action) => {
      state.discoverMovie = {...action.payload};
    },
    setDiscoverTvSeries: (state, action) => {
      state.discoverTvSeries = {...action.payload};
    },
    setSearchData: (state, action) => {
      state.searchData = [...action.payload];
    },
  },
});

export const {
  setSearchQuery,
  setTrendingMovies,
  setPopularMovies,
  setNowPlayingMovies,
  setTopRatedMovies,
  setTrendingTvShows,
  setPopularTvShows,
  setNowPlayingTvShows,
  setTopRatedTvShows,
  setDiscoverMovie,
  setDiscoverTvSeries,
  setSearchData,
} = appSlice.actions;

export default appSlice.reducer;
