import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import styles from '../Modules/SearchBar.module.css';

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search submitted:", search);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <SearchIcon />
        </button>
      </form>

      <button className={styles.micButton}>
        <MicNoneOutlinedIcon />
      </button>
    </div>
  );
}

export default SearchBar;
