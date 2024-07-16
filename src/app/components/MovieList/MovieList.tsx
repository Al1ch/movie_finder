"use client";
import React from "react";
import styles from "./MovieList.module.scss";
import useMovies from "@/app/hooks/useMovies";
import { Movie } from "@/../global";
import MovieCard from "@/app/components/MovieCard/MovieCard";

type Props = {
  searchValue: string;
};

const MovieList = ({ searchValue }: Props) => {
  const { movies, isLoading, error } = useMovies();

  return (
    <div className={styles.movieList}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {movies
        ?.filter((movie: Movie) =>
          movie.title.toLowerCase().includes(searchValue ?? "")
        )
        ?.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            image={movie.backdrop_path}
            title={movie.title}
            releaseDate={movie.release_date}
            id={movie.id}
          />
        ))}
    </div>
  );
};

export default MovieList;
