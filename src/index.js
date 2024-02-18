import React from "react";
import "./index.css";
import App from "./App";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Error'
import BlogPage from './Pages/BlogPage'
import PrivacyPolicy from './Pages/PrivacyPolicy'
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/dev.blogwiki", // Root path
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/BlogPage", // Root path
    element: <BlogPage />,
    errorElement: <Error />
  },
  {
    path: "/PrivacyPolicy", // Root path
    element: <PrivacyPolicy />,
    errorElement: <Error />
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
