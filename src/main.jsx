import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blog from "./Pages/Blog/Blog";
import Main from "./Components/Main/Main";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import AuthProvider from "./Components/providers/AuthProvider";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Service from "./Pages/Service/Service";
import PrivateRoute from "./Routes/PrivateRoute";

import ChefRecipes from "./Pages/Recipes/ChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://chef-recipe-hunter-server-phi-five.vercel.app/chef"),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-phi-five.vercel.app/chef/${params.id}`
          ),
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
