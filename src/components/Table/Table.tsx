import Header from "../Header/Header";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import styles from "./table.module.css";

const Table = () => {
  return (
    <div className={styles.root}>
      <TableHeader />
      <Header />
      <TableBody />
    </div>
  );
};

export default Table;
