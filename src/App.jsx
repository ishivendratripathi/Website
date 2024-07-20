import { NavLink } from "react-router-dom";
import "./App.css";
import Signup from "./routes/Signup";
import { Outlet } from "react-router-dom";

function App() {
  const tabs = ["/", "Teams", "Client", "About Us", "signup"];
  console.log("outlet is ", Outlet);

  const isSignupPage = location.pathname === "/signup";
  return (
    <>
      {!isSignupPage && (
        <div id="navig" className="mt-2 h-16 flex items-center justify-center">
          <ul className="md:w-1/2 w-full border-2 md:rounded-3xl bg-yellow-50 p-2 flex gap-4 justify-around ">
            <img className="h-10 w-14 my--4" src="./logo.png" alt="" />
            {tabs.map((tab) => {
              return (
                <li
                  key={tab}
                  className="flex items-center justify-center bg-transparent font-medium"
                >
                  <NavLink
                    to={tab}
                    className={({ isActive }) => {
                      // console.log("isactive is ",isActive);
                      //todo: use isPending if needed
                      return (
                        (isActive
                          ? "bg-yellow-200 underline underline-offset-2"
                          : "bg-yellow-50 ") +
                        " px-1 rounded-md w-full h-full flex items-center justify-center"
                      );
                    }}
                  >
                    {tab == "/" ? "Home" : tab}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {<Outlet />}
    </>
  );
}

export default App;
