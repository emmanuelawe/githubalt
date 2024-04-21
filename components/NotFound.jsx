import React from "react";
import NFError from "../src/assets/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="bg-[#B3D5F2]/20 dark:bg-gray-700 ">
        <nav className="items-center sticky top-0 justify-center flex font-semibold">
          <Link to="/">
            <button className="bg-[#4AA2D9] text-white font-semibold p-2 rounded-lg">
              Home
            </button>
          </Link>
        </nav>
      <section className="flex flex-col h-screen justify-center items-center ">
        <img src={NFError} alt="404" className="w-48 lg:w-96" />
        <p className="text-xl font-medium dark:text-white">Page not found</p>
      </section>
    </main>
  );
};

export default NotFound;
