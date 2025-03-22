import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    
      },
  {
    path: "/videopage",
    element: <VideoPage/>

  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
