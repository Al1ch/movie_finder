"use client";
import Image from "next/image";
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
import styles from "./MovieBio.module.scss";

type Props = {
  movieId: string;
  title: string;
};

const MovieBio = ({ movieId, title }: Props) => {
  const { movieDetails, detailIsLoading } = useMovieDetails(movieId as string);
  const { movie, isLoading, error } = useMovie(title as string);
  if (isLoading || detailIsLoading) {
    return <p>Loading...</p>;
  }
  if (error) return <p>Error loading data.</p>;

  return (
    <div className={styles.movieContainer}>
      <div className={styles.movieImageContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="movie backdrop"
          objectFit="cover"
          width={500}
          height={500}
          className={styles.movieImage}
        />
      </div>
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
            {movieDetails &&
              movieDetails.genres.map((genre) => (
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
        <div className={styles.bottomInfoContainer}>
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
    </div>
  );
};

export default MovieBio;
