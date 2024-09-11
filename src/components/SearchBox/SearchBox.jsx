import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onSearchChange }) => (
  <input
    className={styles.search}
    type="text"
    value={filter}
    onChange={onSearchChange}
    placeholder="Search contacts..."
  />
);

export default SearchBox;
