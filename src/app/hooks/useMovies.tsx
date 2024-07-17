"use clien";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";
import { Movie } from "../../../global";

const useMovies = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`,

    fetcher
  );

  const movies: Movie[] = data?.results;

  return {
    movies: movies,
    isLoading,
    error,
  };
};

export default useMovies;
