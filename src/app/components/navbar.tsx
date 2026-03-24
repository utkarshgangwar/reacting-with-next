"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Navbar: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme, toggleTheme } = context;

  const isLight = theme === "light";

  return (
    <nav
      className={`sticky top-0 z-50 border-1 ${
        isLight ? "bg-white text-black shadow-md" : "bg-gray-900 text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex space-x-6">
            <span className="font-semibold">Navbar</span>
          </div>

          {/* Right */}
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-md ${
              isLight ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {isLight ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
    