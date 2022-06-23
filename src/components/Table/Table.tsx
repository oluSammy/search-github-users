import { useContext } from "react";
import { AppContext } from "../../context";
import Header from "../Header/Header";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import { TableLoader } from "../UI/Loader";
import styles from "./table.module.css";

const Table = () => {
  const { isLoading, users } = useContext(AppContext);
  return (
    <div className={styles.root}>
      <TableHeader />
      {!isLoading && users.length > 0 ? <Header /> : ""}
      {isLoading ? (
        <TableLoader />
      ) : users.length > 0 ? (
        <TableBody />
      ) : (
        <div className={styles.instructionContainer}>
          <h2 className={styles.instructionTitle}>Search Github users</h2>
          <h4 className={styles.subTitle}>
            put a keyword e.g "octocat" in the search box and click on the
            search button
          </h4>
        </div>
      )}
    </div>
  );
};

export default Table;
