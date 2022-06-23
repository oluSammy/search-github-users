import { useState, useContext } from "react";
import octocat from "../../assets/images/Octocat.png";
import styles from "./navbar.module.css";
import { AppContext } from "../../context";

const Navbar = () => {
  const [input, setInput] = useState("");
  const { fetchUsers } = useContext(AppContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    fetchUsers(input, 1);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <figure className={styles.imgContainer}>
          <img className={styles.navImg} src={octocat} alt="octocat" />
        </figure>
        <h1 className={styles.title}>Octocat</h1>
      </div>
      <form className={styles.navForm} onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="search github users"
          id=""
          className={styles.navInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className={`${styles.navBtn} ${!input && styles.navBrnDisabled}`}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
