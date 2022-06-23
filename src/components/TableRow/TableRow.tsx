import React from "react";
import { IUser } from "../../context";
import styles from "../Table/table.module.css";

interface IProp {
  user: IUser;
}

const TableRow: React.FC<IProp> = ({
  user: {
    login,
    name,
    company,
    public_repos,
    public_gists,
    followers,
    following,
    avatar_url,
    url,
  },
}) => {
  return (
    <tr className={styles.tableData}>
      <td className={styles.td}>
        <figure className={styles.imgBox}>
          <img className={styles.profilePic} src={avatar_url} alt={name} />
        </figure>
      </td>
      <td className={styles.td}>{login}</td>
      <td className={styles.td}>{name ? name : "--"}</td>
      <td className={styles.td}>{company ? company : "--"}</td>
      <td className={styles.td}>{public_repos}</td>
      <td className={styles.td}>{public_gists}</td>
      <td className={styles.td}>{followers}</td>
      <td className={styles.td}>{following}</td>
      <td className={styles.td}>view user</td>
    </tr>
  );
};

export default TableRow;
