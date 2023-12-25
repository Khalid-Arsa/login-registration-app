import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

const PrivateLayout: React.FC = () => {
  const token = false;

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return (
    <React.Fragment>
      <div id="defaultLayout">
        <aside>
          <Link to="/dashboard"> Dashboard </Link>
          <Link to="/users"> Users </Link>
        </aside>
        <div className="content">
          <header>
            <div>Header</div>
            <div>
              <a href="#" className="btn-logout">
                Logout
              </a>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrivateLayout;
