import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1 className="text-6xl text-blue-500 text-center">
          This is a Home Page
        </h1>
      </div>
    ),
  },
]);

export default router;
