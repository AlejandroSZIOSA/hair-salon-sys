/* import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
 */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/Login/Login";
import ControlPanelPage from "./pages/PanelControl/PanelControl";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Navigate to="/login" />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "control-panel",
          element: <ControlPanelPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
