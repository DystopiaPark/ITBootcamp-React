import React, { useEffect, useReducer } from "react";
import API from "../config/api";
import Loading from "../components/Loading/Loading";
import Search from "../components/Search/Search";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import { apiKey } from "../config/apiKey";
import { initialState, reducer } from "../reducer/Reducer";
import MoviesList from "../components/Movies/MoviesList";

const HomeView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, errorMessage, loading } = state;

  const handleMovieSearch = (movie) => {
    API.get(`?s=${movie}&${apiKey}`).then((res) => {
      if (res.data.Response === "True") {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: "SEARCH_MOVIES_FAILED",
          payload: res.data.Error,
        });
      }
    });
  };

  useEffect(() => {
    handleMovieSearch("batman");
  }, []);

  return (
    <div>
      <h2>Home View</h2>
      <Search onSubmit={handleMovieSearch} />
      <div>
        {loading && !errorMessage ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorMsg>{errorMessage}</ErrorMsg>
        ) : (
          <MoviesList movies={movies} />
        )}
      </div>
    </div>
  );
};

export default HomeView;
