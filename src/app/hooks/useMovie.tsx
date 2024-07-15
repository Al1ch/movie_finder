"use clien";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";
import { Movie } from "../../../global";

const useMovie = (id: string) => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${id}}&api_key=2a0cb5fbcd150f8df32fb34362da0fd4`,

    fetcher
  );

  const movie: Movie = data?.results[0];

  return {
    movie: movie,
    isLoading,
    error,
  };
};

export default useMovie;
