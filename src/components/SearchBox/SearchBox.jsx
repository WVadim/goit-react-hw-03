import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onSearchChange }) => (
  // <input
  //   className={styles.search}
  //   type="text"
  //   value={filter}
  //   onChange={onSearchChange}
  //   placeholder="Search contacts..."
  // />
  <div className={styles.searchBox}>
    <p>Find contacts by name</p>
    <input
      className={styles.search}
      type="text"
      value={filter}
      onChange={onSearchChange}
      placeholder="Search contacts..."
    />
  </div>
);

export default SearchBox;
