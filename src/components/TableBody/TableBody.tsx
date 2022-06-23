import { useContext } from "react";
import { AppContext } from "../../context";
import styles from "../Table/table.module.css";
import TableRow from "../TableRow/TableRow";

const TableBody = () => {
  const { users } = useContext(AppContext);

  return (
    <div className={styles.tbody}>
      {users.map((user) => (
        <TableRow key={user.id} user={user} />
      ))}
    </div>
  );
};

export default TableBody;
