import { useDispatch, useSelector } from "react-redux";
import logo3 from "../../assets/logo3.png";
import HeaderMenu from "./headerMenu/HeaderMenu";
import SearchIcon from "@mui/icons-material/Search";
import { setSearchQuery } from "../../store/slices/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.app.searchQuery);

  return (
    <div className="sticky top-0 z-50 bg-black shadow-2xl px-4 flex text-white justify-between">
      <Link to="/">
        <div className="w-[150px] h-[50px]  cursor-pointer">
          <img src={logo3} alt="Logo" className="object-cover w-full h-full" />
        </div>
      </Link>
      <div className="flex items-center justify-end gap-x-4 w-[50%]">
        <div className="py-1 flex justify-between items-center px-2 text-white bg-gray-500 rounded-lg w-full">
          <input
            className="w-[90%] outline-none border-none bg-gray-500  p-1"
            type="text"
            placeholder="Search for Movies ..."
            value={query}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
          <SearchIcon className="p-1 cursor-pointer hover:bg-black hover:rounded-md transition-all " />
        </div>

        <div className=" flex items-center gap-x-4">
          <HeaderMenu title={"Home"} />
          <HeaderMenu title={"Movies"} />
          <HeaderMenu title={"TV"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
