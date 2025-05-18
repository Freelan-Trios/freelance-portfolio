import { RouterProvider } from "react-router-dom";
import { rootRouter } from "./routes";

export default function App() {
  return <RouterProvider router={rootRouter} />;
}
