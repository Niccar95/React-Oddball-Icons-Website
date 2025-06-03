import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      //   {
      //     path: "/",
      //     element: <Home />,
      //   },
      //   {
      //     path: "/docs",
      //     element: <Documentation />,
      //   },
      //   {
      //     path: "/about",
      //     element: <About />,
      //   },
    ],

    // errorElement: <Error />,
  },
]);
