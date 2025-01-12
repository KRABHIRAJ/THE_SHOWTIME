/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { getImageCdnUrl } from "../../utils/constants";
import StarIcon from "@mui/icons-material/Star";

const MovieAndTvCard = ({ type, data }) => {
  const navigate = useNavigate();
  if (!data) return;
  const image_path = data?.poster_path || data?.profile_path;
  const handleClick = () => {
    type ? navigate(`/${type}/watch/${data.id}`) : navigate(`/${data.media_type}/watch/${data.id}`) 
  }
  return (
    <div onClick={handleClick} className="bg-black max-w-[182px] p-2 w-fit rounded-md">
        <div className="min-w-[150px] flex-shrink-0 cursor-pointer h-[160px] md:h-[200px] lg:h-[250px]">
        <img
            src={getImageCdnUrl("w500", image_path)}
            alt={data?.original_title}
            className="min-w-[150px] h-[160px] md:h-[200px] lg:h-[250px] object-cover rounded-md transition-transform duration-300 hover:scale-95"
        />
        </div>
        <div>
        <p className="text-sm max-w-[120px] font-semibold mt-2 line-clamp-1">
          {data?.name ||
            data?.title ||
            data?.original_title ||
            data?.original_name}
        </p>
        <div className="text-xs text-gray-200 flex justify-between items-center mt-2" >
          <p>{data?.first_air_date || data?.release_date}</p>
          <div className="text-xs flex gap-x-1 items-center">
            <StarIcon sx={{ color: "#facc15", fontSize: "16px" }} />
            <p>{data?.vote_average?.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieAndTvCard;
