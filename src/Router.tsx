import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/docs",
        element: <Documentation />,
      },
      // {
      //     path: "/about",
      //     element: <About />,
      //   },
    ],

    // errorElement: <Error />,
  },
]);
