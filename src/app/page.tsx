"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import useMovies from "./hooks/useMovies";
import popCornBg from "@/app/assets/image/popcorn.jpg";
import MovieCard from "./components/MovieCard/MovieCard";
import { Movie } from "../../global";

export default function Home({
  searchParams,
}: {
  readonly searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("searchbar ", searchParams);
  const { movies, isLoading, error } = useMovies();

  return (
    <main className={styles.container}>
      <div className={styles.wallpaper}>
        <div className={styles.heroInfo}>
          <span className={styles.info}>NOW PLAYING </span>
          <h1 className={styles.heroTitle}>Movie Finder </h1>
        </div>
        <Image src={popCornBg} alt="Wallpaper" className={styles.heroImage} />
      </div>
      <div className={styles.movieList}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {movies
          ?.filter((movie: Movie) =>
            movie.title
              .toLowerCase()
              .includes((searchParams.search as string) ?? "")
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
    </main>
  );
}
