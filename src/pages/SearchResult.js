import { useEffect, useState } from "react";
import Card from "../features/listingPics/Card";
import { KEY } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import Header from "../ui/Header";
import Search from "../ui/Search";
import ShimmerCard from "../ui/ShimmerCard";
import SearchFilters from "../ui/SearchFilters";

function SearchResult() {
  const [images, setImages] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q")?.split(" ") || [];
  const searchString = searchQuery.join("+");

  useEffect(
    function () {
      getImages(searchString);
    },
    [searchString]
  );
  function setQuery(name) {
    searchParams.set("q", name.toLowerCase());
    setSearchParams(searchParams);
  }

  async function getImages(searchString) {
    try {
      const data = await fetch(
        `https://pixabay.com/api/?key=${KEY}&q=${searchString}&image_type=photo`
      );
      const json = await data.json();

      setImages(json.hits);
    } catch (error) {
      console.log(error);
    }
  }
  if (images.length === 0) return <ShimmerCard />;

  return (
    <>
      <div className="flex flex-col gap-12 px-6 py-6 max-h-svh bg-hero3  bg-no-repeat bg-cover bg-center bg-fixed ">
        <Header />
        <Search />
        <h2 className="text-center capitalize  text-white text-[2.5rem] font-bold">
          Results:{searchQuery.join(" ")}
        </h2>
      </div>

      <SearchFilters setQuery={setQuery} />

      <div className=" grid px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10">
        {images.map((img) => (
          <Card key={img.id} image={img} />
        ))}
      </div>
    </>
  );
}

export default SearchResult;
