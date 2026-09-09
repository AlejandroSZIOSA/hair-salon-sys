/* import { useState } from "react";
import heroImg from "@/assets/hero.png";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import UserLayout from "@/layouts/User";
import HomePage from "./pages/Home/Home";
import BookingPage from "./pages/Booking/Booking";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" />,
        },
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "booking",
          element: <BookingPage />,
        },
      ],
    },

    /*   {
      path: "/admin",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" />,
        },
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "booking",
          element: <BookingPage />,
        },
      ],
    }, */
  ]);

  return <RouterProvider router={router} />;
}

export default App;
