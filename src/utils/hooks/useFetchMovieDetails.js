import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";

const useFetchMovieDetails = (url, dispatchFunction, movieData, isPagination=false) => {
    const dispatch = useDispatch();
    
    const fetchMovieDetails = async () => {
        const res = await fetch(url, TMDB_API_OPTIONS);
        const data = await res.json();
        if(isPagination){
            dispatch(dispatchFunction(data));
        }else{
            dispatch(dispatchFunction(data?.results));
        }
    }

    useEffect(() => {
        movieData.length === 0 && fetchMovieDetails();
    }, [])
}

export default useFetchMovieDetails;