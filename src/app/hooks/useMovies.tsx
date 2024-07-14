"use clien";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";

const useMovies = () => {
  const { data, error, isLoading } = useSWR(
    // `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}`,
    `https://api.themoviedb.org/3/movie/now_playing?api_key=2a0cb5fbcd150f8df32fb34362da0fd4`,

    fetcher
  );

  return {
    movie: data,
    isLoading,
    error,
  };
};

export default useMovies;
