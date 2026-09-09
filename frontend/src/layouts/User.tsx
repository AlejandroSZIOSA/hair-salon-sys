import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>User Footer</footer>
    </>
  );
};

export default UserLayout;
