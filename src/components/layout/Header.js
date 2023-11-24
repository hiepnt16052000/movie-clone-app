import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar bg-color-black text-color-gray-light py-[30px]">
      <div className="container">
        <div className="flex items-center justify-between navbar-wrapper">
          <Link to="/" className="navbar-brand">
            <img
              src="https://uiparadox.co.uk/templates/animeloop/demo/assets/media/logo.png"
              alt=""
              className="object-cover w-auto h-full"
            />
          </Link>
          <div className="navbar-collapse">
            <ul className="flex gap-4 navbar-menu">
              <li className="px-2 text-base font-semibold menu-item color-gray hover:text-color-purple text-color-gray-light">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-color-primary" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="px-2 text-base font-semibold menu-item color-gray hover:text-color-purple text-color-gray-light">
                <NavLink
                  to="/movie"
                  className={({ isActive }) =>
                    isActive ? "text-color-primary" : ""
                  }
                >
                  Movie
                </NavLink>
              </li>
              <li className="px-2 text-base font-semibold menu-item color-gray hover:text-color-purple text-color-gray-light">
                <NavLink
                  to="/tv-series"
                  className={({ isActive }) =>
                    isActive ? "text-color-primary" : ""
                  }
                >
                  TV Series
                </NavLink>
              </li>
            </ul>
            {/* <form action="" className="">
                <div className="navbar-search w-[400px] mx-[15px] border-2 border-color-gray-light rounded-xl flex items-center">
                  <input
                    type="text"
                    className="search py-[6px] px-[20px] flex flex-grow text-base font-mediu leading-7 text-white border-r-2 border-color-gray-light"
                    placeholder="Search"
                  />
                  <i className="fa-solid fa-magnifying-glass px-[12px] py-[6px] text-base cursor-pointer text-white"></i>
                </div>
              </form> */}
          </div>
          <div className="flex items-center gap-4 navbar-action">
            <Link
              href=""
              className="navbar-signup px-[10px] py-[5px] rounded-lg border-2 border-color-primary text-base font-semibold hover:bg-color-primary min-w-[65px] text-white"
            >
              Signup
            </Link>
            <Link
              href=""
              className="navbar-signin px-[10px] py-[5px] rounded-lg border-2 border-color-purple text-base font-semibold hover:bg-color-purple min-w-[65px] text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
