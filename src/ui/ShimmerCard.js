function ShimmerCard({ from }) {
  if (from)
    return (
      <div className="w-[80%] h-96 mx-auto flex flex-col gap-10 my-16">
        <div className=" bg-gray-100 rounded-lg h-24"></div>
        <div className="h-[70vh] flex gap-3">
          <div className="w-[70%] bg-gray-100 rounded-lg "></div>
          <div className="w-[30%] bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    );

  return (
    <div className="grid p-6 gap-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div className="h-56 rounded-md bg-gray-200"></div>
      <div className="h-56 rounded-md bg-gray-200"></div>
      <div className="h-56 rounded-md bg-gray-200"></div>
      <div className="h-56 rounded-md bg-gray-200"></div>
      <div className="h-56 rounded-md bg-gray-200"></div>
      <div className="h-56 rounded-md bg-gray-200"></div>
      <div className="h-56 rounded-md bg-gray-200"></div>
      <div className="h-56 rounded-md bg-gray-200"></div>
      <div className="h-56 rounded-md bg-gray-200"></div>
      <div className="h-56 rounded-md bg-gray-200"></div>
    </div>
  );
}

export default ShimmerCard;
