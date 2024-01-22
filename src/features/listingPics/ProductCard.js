import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { KEY, sizes } from "../../utils/constants";

import ShimmerCard from "../../ui/ShimmerCard";
import SizeList from "../../ui/SizeList";
import Tag from "../../ui/Tag";

function ProductCard() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  function selectHandler(selected) {
    setSelected(0);
    setSelected(selected);
  }
  useEffect(
    function () {
      getProduct(id);
    },
    [id]
  );

  async function getProduct(id) {
    try {
      const data = await fetch(
        `https://pixabay.com/api/?key=${KEY}&id=${id}&image_type=photo`
      );
      const json = await data.json();

      setProduct(json.hits[0]);
    } catch (error) {
      console.log(error);
    }
  }

  if (!product) return <ShimmerCard from="product" />;
  const { largeImageURL, user, tags, likes, type, user_id, views, downloads } =
    product;

  return (
    <div className="my-12 overflow-hidden rounded-xl">
      <div className="flex px-6 py-3 bg-gray-100 text-lg font-semibold  text-gray-700 justify-between items-center">
        <h3>Preview ID : {id}</h3>
        <button
          className="border-[3px] flex items-center justify-between font-bold border-black rounded-md px-2"
          onClick={() => navigate(-1)}
        >
          &times;
        </button>
      </div>

      <div className="flex flex-col lg:flex-row px-6 py-10 gap-4">
        <div className="lg:w-[70%]">
          <div className=" w-[100%] overflow-hidden">
            <img
              className="rounded-lg lg:h-svh  w-[100%]  object-cover "
              src={largeImageURL}
              alt="jefhje"
            />
          </div>
          <div className="flex my-3 gap-3">
            <h3 className="text-[1.5rem] font-bold">Tags : </h3>
            <div className="flex gap-3">
              {tags.split(",").map((tag) => (
                <Tag key={tag} tagName={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] flex flex-col ">
          <div className="flex flex-col mb-8 gap-4">
            <h3 className="text-lg font-semibold  text-gray-700">Download</h3>

            <ul className="flex text-sm flex-col gap-1  rounded-md border-2 border-b-0  border-gray-200">
              {sizes.map((item) => (
                <SizeList
                  selected={selected === item.id}
                  onSelect={selectHandler}
                  key={item.id}
                  id={item.id}
                >
                  {" "}
                  <p>{item.text}</p>
                  <p>{item.size}</p>
                </SizeList>
              ))}
            </ul>
            <a
              href={product.previewURL}
              className="bg-green-500 text-center font-semibold rounded-md text-sm text-white px-3 py-2"
            >
              Download for free
            </a>
          </div>
          <div className="flex flex-col mb-4 gap-4">
            <h3 className="text-lg font-semibold  text-gray-700">
              Information
            </h3>
            <div className="grid gap-4 grid-cols-3 ">
              <div>
                <h4 className="text-gray-600 font-semibold">User</h4>
                <p className="font-bold text-gray-800 text-lg">{user}</p>
              </div>
              <div className="text-center">
                <h4 className="text-gray-600 font-semibold">User ID</h4>
                <p className="font-bold text-gray-800 text-lg">{user_id}</p>
              </div>
              <div className="text-center">
                <h4 className="text-gray-600 font-semibold">Type</h4>
                <p className="font-bold text-gray-800 text-lg">{type}</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Views</h4>
                <p className="font-bold text-gray-800 text-lg">{views}</p>
              </div>
              <div className="text-center">
                <h4 className="text-gray-600 font-semibold">Downloads</h4>
                <p className="font-bold text-gray-800 text-lg">{downloads}</p>
              </div>
              <div className="text-center">
                <h4 className="text-gray-600 font-semibold">Likes</h4>
                <p className="font-bold text-gray-800 text-lg">{likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
