"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import useMovie from "@/app/hooks/useMovie";
import { Movie } from "../../../../global";
import MovieCard from "@/app/components/MovieCard/MovieCard";
import StarSvg from "@/app/assets/vectors/star.svg";
import Button from "@/app/components/Button/Button";
import PlaySvg from "@/app/assets/vectors/play.svg";
import useMovieDetails from "@/app/hooks/useMovieDetails";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import MovieList from "@/app/components/MovieList/MovieList";
import useMovies from "@/app/hooks/useMovies";
import MovieCarousel from "@/app/components/MovieCarousel/MovieCarousel";
import MovieBio from "@/app/components/MovieBio/MovieBio";

export default function MoviePage({
  params,
}: {
  readonly params: {
    readonly title: string | string | string[] | undefined;
  };
  readonly searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { movie, isLoading, error } = useMovie(params.title as string);
  const { movies, isLoading: isMoviesLoading } = useMovies();
  const searchParams = useSearchParams();
  const movieId = searchParams.get("id");

  const { movieDetails, detailIsLoading } = useMovieDetails(movieId as string);

  return (
    <main className={styles.container}>
      <MovieBio movieId={movieId as string} title={params.title as string} />
      {movie && (
        <div className={styles.similarMoviesContainer}>
          <h2 className={styles.titleSection}>Similar Movies</h2>
          <MovieCarousel genres={movie?.genre_ids} movieId={movie?.id} />
        </div>
      )}

      <div className={styles.allMoviesList}>
        <h2 className={styles.titleSection}>All Movies</h2>
        <MovieList searchValue={searchParams.get("search") as string} />
      </div>
    </main>
  );
}
