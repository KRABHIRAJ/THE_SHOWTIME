import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getImageCdnUrl } from "../../../utils/constants";

const CarouselContainer = () => {
  const nowPlayingMovies = useSelector((state) => state.app.nowPlayingMovies);
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const inter = setInterval(() => {
        setCarouselIndex((currIndex) => {
            if(currIndex === nowPlayingMovies.length - 1){
                return 0;
            }else{
                return currIndex + 1;
            }
        })
    }, 4000)

    return () => {
        clearInterval(inter)
    }
  }, [])
  return (
    <div className="h-[500px] w-screen">
        <img className="h-full w-full object-cover" src={getImageCdnUrl('original', nowPlayingMovies[carouselIndex]?.backdrop_path)} alt="bannner_img" />
    </div>
  )
}

export default CarouselContainer