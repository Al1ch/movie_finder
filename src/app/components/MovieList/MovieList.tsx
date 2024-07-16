"use client";
import React from "react";
import styles from "./MovieList.module.scss";
import useMovies from "@/app/hooks/useMovies";
import { Movie } from "@/../global";
import MovieCard from "@/app/components/MovieCard/MovieCard";
import cn from "classnames";

type Props = {
  searchValue: string;
};

const MovieList = ({ searchValue }: Props) => {
  const { movies, isLoading, error } = useMovies();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;
  const movieListFiltered = movies?.filter((movie: Movie) =>
    movie.title.toLowerCase().includes(searchValue ?? "")
  );
  const maxMovieInaRow = 4;

  return (
    <div
      className={cn(styles.movieList, {
        [styles.center]: movieListFiltered.length > maxMovieInaRow,
      })}
    >
      {movieListFiltered?.map((movie: Movie) => (
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
