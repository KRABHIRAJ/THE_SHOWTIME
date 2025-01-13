/* eslint-disable react/prop-types */

import StarIcon from "@mui/icons-material/Star";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { getImageCdnUrl } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const CarouselDetails = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/watch/${data.id}`);
  }

  return (
    <div className="flex items-center px-4 max-w-[75%] ">
      <div className="hidden md:flex md:flex-[0.2]">
        <img className="w-[150px] h-[200px] rounded-lg object-cover"  src={getImageCdnUrl('original', data?.poster_path)} alt="poster_img" />
      </div>
      <div className=" md:flex-[0.8] pl-2">
        <p className="font-bold text-2xl tracking-wide mb-2 line-clamp-1">{data?.original_title || data?.title}</p>
        <div className="flex gap-x-1 text-sm items-center">
          <StarIcon sx={{ color: "#facc15", fontSize: "20px" }} />
          <p>{data?.vote_average.toFixed(1)}</p>
        </div>
        <p className="line-clamp-2 my-1 text-[15px]">{data?.overview}</p>
        <p className="font-semibold text-sm">
          Released : <span className="ml-1">{data?.release_date}</span>
        </p>
        <button onClick={handleClick} className="bg-gray-600 p-2 px-4 mt-3 rounded-lg hover:bg-gray-700">
          Watch Now <PlayCircleIcon />{" "}
        </button>
      </div>
    </div>
  );
};

export default CarouselDetails;
