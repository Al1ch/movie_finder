"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import SearchIcon from "@/app/assets/vectors/search.svg";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const handleSubmit = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        searchValue.length === 0
          ? router.replace(`?id=${searchParams.get("id")}`)
          : router.replace(
              `?id=${searchParams.get("id")}&&search=${searchValue}`
            );
      }
    };

    document.addEventListener("keydown", handleSubmit);

    return () => {
      document.removeEventListener("keydown", handleSubmit);
    };
  }, [router, searchValue, searchParams]);

  return (
    <div className={styles.container}>
      <form>
        <input
          type="text"
          className={styles.input}
          onChange={handleChange}
          placeholder="Search for a movie"
          value={searchValue}
        />
      </form>
      <SearchIcon className={styles.icon} />
    </div>
  );
};

export default SearchBar;
