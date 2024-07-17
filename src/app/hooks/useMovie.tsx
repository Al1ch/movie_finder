"use clien";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";
import { Movie } from "../../../global";

const useMovie = (id: string) => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${id}}&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`,

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
