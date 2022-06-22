import octocat from "../../assets/images/Octocat.png";
import styles from "./navbar.module.css";
// import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <figure className={styles.imgContainer}>
          <img className={styles.navImg} src={octocat} alt="octocat" />
        </figure>
        <h1 className={styles.title}>Github Users</h1>
      </div>
      <form className={styles.navForm}>
        <input
          type="search"
          name="search"
          placeholder="search github users"
          id=""
          className={styles.navInput}
        />
        <button className={styles.navBtn}>Search</button>
      </form>
    </div>
  );
};

export default Navbar;
