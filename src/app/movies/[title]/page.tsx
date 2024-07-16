import styles from "./page.module.scss";
import MovieList from "@/app/components/MovieList/MovieList";
import MovieCarousel from "@/app/components/MovieCarousel/MovieCarousel";
import MovieBio from "@/app/components/MovieBio/MovieBio";

export default function MoviePage({
  searchParams,
  params,
}: {
  readonly params: {
    readonly title: string | string | string[] | undefined;
  };
  readonly searchParams: { [key: string]: string | string[] | undefined };
}) {
  const movieId = searchParams.id;
  const searchValue = searchParams.search as string;

  return (
    <main className={styles.container}>
      <MovieBio movieId={movieId as string} title={params.title as string} />
      {
        <div className={styles.similarMoviesContainer}>
          <h2 className={styles.titleSection}>Similar Movies</h2>
          <MovieCarousel movieId={movieId as string} />
        </div>
      }

      <div className={styles.allMoviesList}>
        <h2 className={styles.titleSection}>All Movies</h2>
        <MovieList searchValue={searchValue} />
      </div>
    </main>
  );
}
