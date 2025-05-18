import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../views/home/Home";
import About from "../views/home/About";
import Projects from "../views/home/Projects";
import Blog from "../views/home/Blog";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/blogs", element: <Blog /> },
    ],
  },
]);
