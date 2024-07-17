"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";
import { Movie, MovieDetails } from "../../../global";

const useMovieDetails = (movieId: string) => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`,
    fetcher
  );

  const movieDetails: MovieDetails = data;
  return {
    movieDetails: movieDetails,
    detailIsLoading: isLoading,
    error,
  };
};

export default useMovieDetails;
