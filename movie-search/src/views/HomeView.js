import React from "react";
import Loading from "../components/Loading/Loading";
import Search from "../components/Search/Search";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";

const HomeView = () => {
  return (
    <div>
      <p>HomeView</p>
      <Search />
      <ErrorMsg>errorMessage</ErrorMsg>
      <Loading />
    </div>
  );
};

export default HomeView;
