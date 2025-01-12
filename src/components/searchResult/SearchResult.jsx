import { useSelector } from "react-redux"
import DiscoverMovieAndTv from "../common/DiscoverMovieAndTv"

const SearchResult = () => {
    const searchData = useSelector((state) => state.app.searchData);
  return (
    <div>
        <DiscoverMovieAndTv type={''} data={searchData}  />
    </div>
  )
}

export default SearchResult