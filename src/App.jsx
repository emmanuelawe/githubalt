import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepoPage from "../components/RepoPage";
import "./index.css";
import RepoDetails from "../components/RepoDetails";
import NotFound from "../components/NotFound";
import { useState } from "react";
import { useEffect } from "react";
import Light from "../src/assets/light.png";
import Dark from "../src/assets/dark.png";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const user = "emmanuelawe";

  // Darkmode implementation
  useEffect(() => {
    // Checking user default mode on device
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === "dark" ? true : false);
  }, []);

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`${
        darkMode ? "dark" : ""
      } dark:bg-gray-900 bg-[#B3D5F2]/20 scrollbar-hide h-screen`}
    >
      <div className="fixed bottom-12 right-2 pl-10 pt-4 lg:pl-40 lg:pt-4 flex justify-end pr-8 lg:pr-44">
        <button
          onClick={toggleDisplayMode}
          className="bg-gray-900 w-14 lg:w-20 dark:bg-white dark:text-black text-gray-100 p-2 rounded-full font-bold border "
        >
          {darkMode ? (
            <img src={Dark} alt="Light mode" />
          ) : (
            <img src={Light} alt="Dark mode" />
          )}
        </button>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<RepoPage />} />
          <Route path={`/repos/${user}/:name`} element={<RepoDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
