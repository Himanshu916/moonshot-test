// import { Link } from "react-router-dom";
import Header from "../ui/Header";
import Search from "../ui/Search";
// import SearchResult from "./SearchResult";

function Home() {
  return (
    <div className=" px-6 py-6  min-h-screen bg-hero3  bg-no-repeat bg-cover bg-center bg-fixed">
      <Header />
      <h1 className="text-[3.5rem] text-white w-[50%] mx-auto font-bold my-16 text-center">
        Discover over 2,000,000 free Stock Images
      </h1>
      <Search />

      <p className="text-white px-3 py-1 my-6 mx-auto w-fit outline-2 outline-double rounded-md outline-[rgb(250,250,250,0.3)] bg-[rgb(23,23,23,0.6)] ">
        <strong>Trending : </strong>
        <span>flowers,love,forest,river</span>
      </p>

      {/* <SearchResult /> */}
    </div>
  );
}

export default Home;
