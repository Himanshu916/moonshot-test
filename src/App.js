import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Product from "./pages/Product";
// import { useState } from "react";
// import { imageSlides } from "./utils/constants";
// import { imageSlides } from "./utils/constants";

function App() {
  // const [active, setActive] = useState(0);
  // useEffect(
  //   function () {
  //     const timeout = setTimeout(function () {
  //       if (active === 2) setActive(0);
  //       else setActive((c) => c + 1);
  //     }, 5000);

  //     return () => clearTimeout(timeout);
  //   },
  //   [active]
  // );
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "search",
      element: <SearchResult />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
  ]);
  // console.log(`bg-hero${active}`);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
