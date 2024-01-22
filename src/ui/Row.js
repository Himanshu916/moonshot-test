function Row({ children, type }) {
  if (type === "horizontal")
    return <div className="flex flex-wrap gap-2 my-3">{children}</div>;

  return <div>{children}</div>;
}

export default Row;
