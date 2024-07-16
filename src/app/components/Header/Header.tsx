import React from "react";
import styles from "./Header.module.scss";
import SearchBar from "@/app/components/Searchbar/Searchbar";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        <h1 className={styles.title}>Movie Finder</h1>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Header;
