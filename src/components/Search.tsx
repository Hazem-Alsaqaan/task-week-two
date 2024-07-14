import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { getSearchTasks } from "../redux/actions/tasksActions";

const Search = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchSubmit = () => {
    navigate("/search");
    dispatch(getSearchTasks(searchText));
    setSearchText("");
  };
  return (
    <div className="flex-1 flex items-center justify-end">
      <div className="relative bg-inherit overflow-hidden rounded-full m-1  flex items-center justify-center">
        <FiSearch className=" text-base absolute top-[calc(50%-8px)] left-2 text-neutral-100 max-sm:text-sm max-sm:top-[calc(50%-7px)]" />
        <input
          type="search"
          placeholder="Search..."
          className="bg-inherit text-sm pl-7 py-1 rounded-l-full border-[1px] border-solid border-neutral-700 focus:outline-none text-white max-sm:text-xs max-sm:pl-6 max-sm:w-40"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => handleSearchSubmit()}
          className=" bg-indigo-500 text-sm text-white py-1 px-2 rounded-r-full focus:outline-none max-sm:text-xs"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
