import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findByIdUrl, getSimilarUrl, getVideoUrl, getYoutubeUrl } from "../../utils/constants";
import axios from "axios";
import WatchDescriptionCard from "./WatchDescriptionCard";
import { extractTags, formatAmount } from "../../utils/helper";
import DiscoverMovieAndTv from "../common/DiscoverMovieAndTv";

const WatchMovieAndTv = () => {
  const params = useParams();
  const [trailerVideoUrl, setTrailerVideoUrl] = useState("");
  const [videoDetails, setVideoDetails] = useState({});
  const [similarVideo, setSimilarVideo] = useState([]);

  const fetchTrailerVideo = async () => {
    try{
        const response = await axios.get(getVideoUrl(params?.id, params?.type));
        setTrailerVideoUrl(getYoutubeUrl(response?.data?.results[0]?.key));
    }catch(err){
        console.error("Err in fetchTrailerVideo: ", err);
    }
  };
  const fetchCurrentDetail = async () => {
    try {
      const response = await axios.get(findByIdUrl(params?.id, params?.type));
      setVideoDetails(response?.data);
    } catch (err) {
      console.error("Err in fetchCurrentDetail: ", err);
    }
  };

  const fetchSimilarVideo = async () => {
    try{
        const response = await axios.get(getSimilarUrl(params?.id, params?.type))
        setSimilarVideo(response?.data?.results);
    }catch(err){
        console.error('Err in fetchSimilarVideo: ', err)
    }
  }
  useEffect(() => {
    fetchTrailerVideo();
    fetchCurrentDetail();
    fetchSimilarVideo();
    const scrollContainer = document.querySelector("#parentContainer");
    scrollContainer?.scrollTo(0, 0);
  }, [params?.id]);
  return (
    <div>
      <iframe
        className=" w-full h-[360px] md:h-[90vh] top-0 left-0"
        src={trailerVideoUrl}
        referrerPolicy="strict-origin-when-cross-origin"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="p-6">
        <div>
            <p className="text-2xl font-bold">Overview: </p>
            <p>{videoDetails?.overview}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-6">
            {params?.type === 'tv' && <WatchDescriptionCard title={"Seasons"} subtitle={videoDetails?.number_of_seasons} />}
            {params?.type === 'movie' && <WatchDescriptionCard title={"Budget"} subtitle={`$${formatAmount(videoDetails?.budget)}`} />}
            {params?.type === 'tv' && <WatchDescriptionCard title={"Episodes"} subtitle={videoDetails?.number_of_episodes} />}
            {params?.type === 'tv' && <WatchDescriptionCard title={"First Air Date"} subtitle={videoDetails?.first_air_date} />}
            <WatchDescriptionCard title={"Production company"} subtitle={extractTags(videoDetails?.production_companies, 'name')} />
            <WatchDescriptionCard title={"Genre"} subtitle={extractTags(videoDetails?.genres, 'name')} />
            {params?.type === 'movie' && <WatchDescriptionCard title={"Runtime"} subtitle={`${videoDetails?.runtime} minutes`} />}
            {params?.type === 'movie' && <WatchDescriptionCard title={"Release Date"} subtitle={videoDetails?.release_date} />}
            <WatchDescriptionCard title={"Rating"} subtitle={`${videoDetails?.vote_average?.toFixed(1)} / 10`} />
        </div>
        <div>
            <p className="text-2xl font-bold mt-6">You may also like: </p>
            <DiscoverMovieAndTv type={params?.type} data={similarVideo} />
        </div>
      </div>
    </div>
  );
};

export default WatchMovieAndTv;
