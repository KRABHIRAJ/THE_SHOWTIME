export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`
    }
};

export const TRENDING_MOVIES_URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';


export const DISCOVER_TV_SHOW_URL = (page) =>  {
    return `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_original_language=hi&with_watch_providers=8&watch_region=IN`
}
export const DISCOVER_MOVIE_URL =  (page) => {
    return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_original_language=hi`;
}
export const SEARCH_MOVIE_URL = (query) => {
    return `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`
}



export const getVideoUrl = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
}

export const getYoutubeUrl = (key) => {
    return `https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&modestbranding=1&controls=0&rel=0&fs=0&iv_load_policy=3`
}

export const getImageCdnUrl = (size, path) => {
    return `https://image.tmdb.org/t/p/${size}${path}`
}
