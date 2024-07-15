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

export default function MoviePage({
  params,
}: {
  readonly params: {
    readonly title: string | string | string[] | undefined;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const { movie, isLoading, error } = useMovie(params.title as string);
  const searchParams = useSearchParams();
  const movieId = searchParams.get("id");

  const { movieDetails, detailIsLoading } = useMovieDetails(movieId as string);

  return (
    <main className={styles.container}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading data.</p>}
      {movie && (
        <div className={styles.movieContainer}>
          <MovieCard image={movie.backdrop_path} id={movie.id} />
          <div className={styles.movieInfoContainer}>
            <div className={styles.movieHeader}>
              <h1 className={styles.title}>{movie.title}</h1>
              <div className={styles.rating}>
                <StarSvg />
                <span>{Math.round(movie.vote_average * 10) / 10}</span>
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
            <Button size="md" backgroundColor="primary" radius="normal">
              <div className={styles.buttonContent}>
                <PlaySvg />
                <span className={styles.buttonTitle}>Watch Trailer</span>
              </div>
            </Button>
          </div>
          {/* <div className={styles.wallpaper}>
            <div className={styles.heroInfo}>
              <span className={styles.info}>{movie.title}</span>
              <h1 className={styles.heroTitle}>Movie Finder</h1>
            </div>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt="Wallpaper"
              className={styles.heroImage}
              width={500}
              height={281} // Vous pouvez ajuster la taille selon vos besoins
            />
          </div>
          <div className={styles.movieList}>
            {movie.results.map((movie: Movie) => (
              <MovieCard
                key={movie.id}
                image={movie.backdrop_path}
                title={movie.title}
                releaseDate={movie.release_date}
              />
            ))}
          </div> */}
        </div>
      )}
    </main>
  );
}
