import React from "react";
import styles from "./Header.module.scss";
import SearchBar from "@/app/components/Searchbar/Searchbar";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movie Finder</h1>
      <div className={styles.nav}>
        <a href="/" className={styles.link}>
          Home
        </a>
        <a href="/about" className={styles.link}>
          Tv shows
        </a>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
