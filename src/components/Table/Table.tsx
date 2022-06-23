import { useContext } from "react";
import { AppContext } from "../../context";
import Header from "../Header/Header";
import TableBody from "../TableBody/TableBody";
import { TableLoader } from "../UI/Loader";
import styles from "./table.module.css";

const Table = () => {
  const { isLoading, users } = useContext(AppContext);
  return (
    <div className={styles.root}>
      {!isLoading && users.length > 0 ? <Header /> : ""}
      {isLoading ? <TableLoader /> : users.length > 0 ? <TableBody /> : ""}
    </div>
  );
};

export default Table;
