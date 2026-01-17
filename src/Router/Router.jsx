import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "career",
        Component: Career,
      },
    ],
  },
]);

export default router;
