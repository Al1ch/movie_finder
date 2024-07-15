"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";
import { Movie } from "../../../global";

const useMovieDetails = (movieId: string) => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=2a0cb5fbcd150f8df32fb34362da0fd4`,

    fetcher
  );

  console.log("data detail ", data);
  return {
    movieDetails: data,
    detailIsLoading: isLoading,
    error,
  };
};

export default useMovieDetails;
