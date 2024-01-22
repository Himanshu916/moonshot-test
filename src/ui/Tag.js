function Tag({ tagName, from, setQuery }) {
  return (
    <p
      onClick={() => {
        if (from) setQuery(tagName);
        else return;
      }}
      className={`${
        from ? "border-2 border-gray-400 cursor-pointer" : ""
      }bg-gray-100 rounded-md w- text-gray-600 px-2 py-1`}
    >
      {tagName}
    </p>
  );
}

export default Tag;
