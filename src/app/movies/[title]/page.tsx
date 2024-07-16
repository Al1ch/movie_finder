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
import useMovies from "@/app/hooks/useMovies";

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
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading data.</p>}
      {movie && movieDetails && (
        <div className={styles.movieContainer}>
          <MovieCard image={movie.backdrop_path} id={movie.id} />
          <div className={styles.movieInfoContainer}>
            <div className={styles.movieHeaderContainer}>
              <div className={styles.movieHeader}>
                <h1 className={styles.title}>{movie.title}</h1>
                <div className={styles.rating}>
                  <StarSvg />
                  <span>{Math.round(movie.vote_average * 10) / 10}</span>
                  <span className={styles.movieVote}>| {movie.vote_count}</span>
                </div>
              </div>
              <div className={styles.categoryList}>
                {movieDetails.genres.map((genre) => (
                  <Button
                    key={genre.id}
                    size="sm"
                    backgroundColor="transparent"
                    radius="normal"
                  >
                    {genre.name}
                  </Button>
                ))}
              </div>
            </div>
            <p className={styles.overview}>{movie.overview}</p>
            <div className={styles.infoContainer}>
              <span className={styles.titleInfo}>Release Date</span>
              <span className={styles.infoText}>
                {movie.release_date
                  .replaceAll("-", "/")
                  .split("/")
                  .reverse()
                  .join("/")}
              </span>
            </div>
            <div className={styles.infoContainer}>
              <span className={styles.titleInfo}>Duration</span>
              <span className={styles.infoText}>
                {movieDetails.runtime} minutes
              </span>
            </div>
            <Link
              href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}
            >
              <Button size="md" backgroundColor="primary" radius="normal">
                <div className={styles.buttonContent}>
                  <PlaySvg />
                  <span className={styles.buttonTitle}>Watch Trailer</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      )}
      <div className={styles.similarMoviesContainer}>
        <h2 className={styles.similarMoviesTitle}>Similar Movies</h2>

        <div className={styles.movieList}>
          {movies
            ?.filter(
              (movieSuggestion) =>
                movieSuggestion.genre_ids.some((genreId) =>
                  movie?.genre_ids.includes(genreId)
                ) && movieSuggestion.id !== movie.id
            )
            ?.map((movie: Movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                image={movie.backdrop_path}
                title={movie.title}
                releaseDate={movie.release_date}
              />
            ))}
        </div>
      </div>

      <div className={styles.allMoviesList}>
        <h2 className={styles.similarMoviesTitle}>All Movies</h2>
        <div className={styles.allMoviesContainer}>
          {movies
            ?.filter((movie: Movie) =>
              movie.title
                .toLowerCase()
                .includes((searchParams.get("search") as string) ?? "")
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
      </div>
    </main>
  );
}
