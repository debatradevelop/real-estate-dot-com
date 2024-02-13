import React from "react";
import { FaSearch, FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-slate-200 flex flex-wrap justify-between items-center mx-auto p-2">
        <Link to="/">
          <h1 className="text-sm sm:text-2xl ">
            <span className=" font-bold text-slate-900 ">Real</span>
            <span className=" font-semibold text-slate-800">Estate</span>
            <span className=" font-semibold text-slate-600">.com</span>
          </h1>
        </Link>
        <form className="bg-slate-100 rounded-lg p-2 flex items-center text-2xl">
          <input
            className="hover:text-current bg-slate-100 focus:outline-none w-24 sm:w-64 "
            placeholder="Search...."
            type="text"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex p-2 gap-4 ">
          <Link to="/about">
            <li className="hidden sm:inline hover:underline text-slate-500">
              About
            </li>
          </Link>
          <Link to="/">
            <li className="hidden sm:inline hover:underline text-slate-500">
              Home
            </li>
          </Link>
          <Link to="/signup">
            <li className=" hover:underline text-slate-500">SignUp</li>
          </Link>
        </ul>
      </header>
    </>
  );
}
