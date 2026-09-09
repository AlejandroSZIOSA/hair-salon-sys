/* import { useState } from "react";
import heroImg from "@/assets/hero.png";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserLayout, AdminLayout } from "@/layouts/index";
import { HomePage, BookingPage } from "@/pages/index.ts";
import {
  AdminDashboardPage,
  AdminAppointmentsPage,
  AdminSettingsPage,
} from "@/pages/index.ts";
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

    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboardPage />,
        },
        {
          path: "appointments",
          element: <AdminAppointmentsPage />,
        },
        {
          path: "settings",
          element: <AdminSettingsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
