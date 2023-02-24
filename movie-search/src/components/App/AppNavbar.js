import React from "react";
import MovieImg from "../../assets/images/movie.svg";
import AppNavbarTabs from "./AppNavbarTabs";

const AppNavbar = () => {
  return (
    <div className="navbar">
      <img src={MovieImg} alt="Movie logo" />
      <AppNavbarTabs />
    </div>
  );
};
export default AppNavbar;
