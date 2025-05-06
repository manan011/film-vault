import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center space-x-10 pl-4 py-4">
      <img
        src="https://cdn.pixabay.com/photo/2022/08/07/20/43/cinema-7371380_1280.png"
        alt="Film Vault Logo"
        className="w-12 h-12 object-contain rounded-xl shadow-sm"
      />

      <Link to="/" className="text-xl font-bold text-black">Movies</Link>
      <Link to="watchlist" className="text-xl font-bold text-black">WatchList</Link>
    </div>
  );
};

export default NavBar;
