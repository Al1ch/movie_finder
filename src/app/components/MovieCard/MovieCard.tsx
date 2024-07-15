"use client";
import React from "react";
import styles from "./MovieCard.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  image: string;
  title?: string;
  releaseDate?: string;
  id: number;
};

const MovieCard = ({ image, title, releaseDate, id }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movies/${title}?id=${id}`);
  };
  return (
    <button className={styles.container} onClick={handleClick}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt="movie title"
        className={styles.image}
        width={1000}
        height={1000}
      />
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{title} </h2>
        {/* <span className={styles.infoText}> {releaseDate}</span> */}
      </div>
    </button>
  );
};

export default MovieCard;
