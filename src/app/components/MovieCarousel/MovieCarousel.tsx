"use client";
import MovieCard from "@/app/components/MovieCard/MovieCard";
import useMovies from "@/app/hooks/useMovies";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  movieId: string;
};

const MovieCarousel = ({ movieId }: Props) => {
  const { movies, isLoading: isMoviesLoading, error } = useMovies();

  if (isMoviesLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading data.</p>;
  }

  const currentMovieGenre = movies?.find(
    (el) => el.id.toString() === movieId
  )?.genre_ids;

  return (
    <Carousel className="flex w-full ">
      <CarouselContent className="flex -ml-1 ">
        {movies
          ?.filter(
            (movieSuggestion) =>
              movieSuggestion.genre_ids.some((genreId) =>
                currentMovieGenre?.includes(genreId)
              ) && movieSuggestion.id.toString() !== movieId
          )
          .map((movie, index) => (
            <CarouselItem
              key={index}
              className="basis-11/12  sm:basis-1/2 md:basis-1/2  lg:basis-1/4 "
            >
              <MovieCard
                id={movie.id}
                key={movie.id}
                image={movie.backdrop_path}
                title={movie.title}
                releaseDate={movie.release_date}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MovieCarousel;
