import Image from "next/image";
import styles from "./page.module.scss";
import useMovies from "./hooks/useMovies";
import popCornBg from "@/app/assets/image/popcorn.jpg";
import MovieCard from "./components/MovieCard/MovieCard";
import MovieList from "./components/MovieList/MovieList";
import { Movie } from "../../global";

export default function Home({
  searchParams,
}: {
  readonly searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className={styles.container}>
      <div className={styles.wallpaper}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>Unlimited Movies</h1>
          <span className={styles.heroSubtitle}>
            Find the latest and greatest movies on the big screen <br />
            all registered in our database.
          </span>
        </div>
        <Image src={popCornBg} alt="Wallpaper" className={styles.heroImage} />
      </div>
      <div className={styles.containerContent}>
        <h2 className={styles.title}>Movies On Screen</h2>
        <MovieList searchValue={searchParams.search as string} />
      </div>
    </main>
  );
}
