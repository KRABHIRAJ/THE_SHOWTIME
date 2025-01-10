import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getImageCdnUrl } from "../../../utils/constants";
import CarouselDetails from "./CarouselDetails";

const CarouselContainer = () => {
  const nowPlayingMovies = useSelector((state) => state.app.nowPlayingMovies);
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const inter = setInterval(() => {
        setCarouselIndex((currIndex) => {
            if(currIndex >= nowPlayingMovies.length - 1){
                return 0;
            }else{
                return currIndex + 1;
            }
        })
    },10000)

    return () => {
        clearInterval(inter)
    }
  }, [])
  return (
    <div className="h-[500px] w-screen relative">
        <img className="h-full w-full object-cover opacity-[0.4]" src={getImageCdnUrl('original', nowPlayingMovies[carouselIndex]?.backdrop_path)} alt="bannner_img" />
        <div className="absolute bottom-[10%]">
            <CarouselDetails data={nowPlayingMovies[carouselIndex]} />
        </div>
    </div>
  )
}

export default CarouselContainer