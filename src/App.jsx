import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();
  const tabs = ["/", "Teams", "Client", "About Us", "signup"];

  const isAuthPage =
    location.pathname === "/signup" || location.pathname === "/signin";

  return (
    <>
      {!isAuthPage && (
        <div id="navig" className="mt-2 h-16 flex items-center justify-center">
          <ul className="md:w-1/2 w-full border-2 md:rounded-3xl bg-yellow-50 p-2 flex gap-4 justify-around">
            <img className="h-10 w-14 my--4" src="./logo.png" alt="Logo" />
            {tabs.map((tab) => (
              <li
                key={tab}
                className="flex items-center justify-center bg-transparent font-medium"
              >
                <NavLink
                  to={tab}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-yellow-200 underline underline-offset-2"
                        : "bg-yellow-50"
                    } px-1 rounded-md w-full h-full flex items-center justify-center`
                  }
                >
                  {tab === "/" ? "Home" : tab}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default App;
