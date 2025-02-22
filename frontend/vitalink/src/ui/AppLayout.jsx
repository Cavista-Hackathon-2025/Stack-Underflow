import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="text-5xl w-full h-full bg-red-700">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
