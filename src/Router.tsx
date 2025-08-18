import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import News from "./pages/News";

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
      {
        path: "/news",
        element: <News />,
      },
    ],

    // errorElement: <Error />,
  },
]);
