import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  function searchHandler() {
    navigate("/search");
    searchParams.set("q", searchQuery);
    setSearchParams(searchParams);
    setSearchQuery("");
  }

  return (
    <div className=" px-3 py-2 text-white w-[70%] mx-auto  rounded-md items-center border-2 border-[rgb(250,250,250,0.3)] bg-[rgb(23,23,23,0.4)]">
      <div className=" flex gap-2 items-center ">
        <div className="text-[1.5rem]">
          <CiSearch />
        </div>
        <div className="flex-1 relative">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full    placeholder-white bg-transparent   px-2 py-1  border-l-2 border-l-slate-100 outline-none"
            placeholder="Start  new Search"
            type="text"
            name=""
            id=""
          />
          <button
            onClick={searchHandler}
            className="border-2 border-white right-0 px-3 py-[0.1rem] rounded-md  absolute"
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
