import styles from "./SearchBar.module.css";
import { ReactComponent as SearchBarIcon } from "../icons/search_bar_icon.svg";

function SearchBar() {
  return (
    <div id={styles.search_bar}>
      <div id={styles.icon}>
        <SearchBarIcon />
      </div>
      <input
        type="text"
        id="header-search"
        placeholder="Wyszukaj lekarza"
        name="s"
      />
    </div>
  );
}

export default SearchBar;
