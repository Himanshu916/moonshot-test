import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KEY } from "../../utils/constants";
import ShimmerCard from "../../ui/ShimmerCard";

function ProductCard() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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
      console.log(json.hits[0]);
      setProduct(json.hits[0]);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(id);
  if (!product) return <ShimmerCard />;
  const { largeImageURL, user, likes, type, user_id, views, downloads } =
    product;

  return (
    <div className="my-12 overflow-hidden rounded-xl">
      <div className="flex px-6 py-3 bg-gray-100 text-lg font-semibold  text-gray-700 justify-between items-center">
        <h3>Preview ID : 48777</h3>
        <button>&times;</button>
      </div>
      <div className="flex flex-col lg:flex-row px-6 py-10 gap-4">
        <div className=" lg:w-[70%] overflow-hidden">
          <img
            className="rounded-lg h-[100%]  w-full  object-cover "
            src={largeImageURL}
            alt="jefhje"
          />
        </div>
        <div className="lg:w-[30%] flex flex-col ">
          <div className="flex flex-col mb-8 gap-4">
            <h3 className="text-lg font-semibold  text-gray-700">Download</h3>

            <ul className="flex text-sm flex-col gap-1  rounded-md border-2 border-b-0  border-gray-200">
              <li className="flex border-b-2 px-3 py-2 bg-gray-100 border--gray-200 justify-between">
                <p>Small</p>
                <p>640 x 960</p>
              </li>
              <li className="flex border-b-2 px-3 py-2  border--gray-200 justify-between">
                <p>Medium</p>
                <p>1920 x 2660</p>
              </li>
              <li className="flex  border-b-2 px-3 py-2  border--gray-200 justify-between">
                <p>Big</p>
                <p>2400 x 3600</p>
              </li>
              <li className="flex border-b-2 px-3 py-2  border--gray-200 justify-between">
                <p>Original</p>
                <p>3850 X 5640</p>
              </li>
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
