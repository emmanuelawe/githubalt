import React from "react";
import ErrorImage from "../src/assets/errorb.png";

const ErrorUI = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center bg-[#B3D5F2]/20 dark:bg-gray-900">
      <img
        src={ErrorImage}
        alt="Something went wrong"
        className="w-48 lg:w-96"
      />
      <p className="text-base md:text-xl font-medium">
        Uh oh! Something went wrong.
      </p>
    </main>
  );
};

export default ErrorUI;
