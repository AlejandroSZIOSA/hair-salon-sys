import React from "react";

import { Navigate, Outlet } from "react-router-dom";
const is_Authenticated = false;

const AdminLayout: React.FC = () => {
  /* const { is_Authenticated } = useAuth_Ctx(); */

  return is_Authenticated ? (
    <>
      <main>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminLayout;
