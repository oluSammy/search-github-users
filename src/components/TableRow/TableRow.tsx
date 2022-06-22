import React from "react";
import styles from "../Table/table.module.css";

export interface IUser {
  pic: string;
  username: string;
  name: string;
  company: string;
  repos: number;
  gists: number;
  followers: number;
  following: number;
  view: string;
}

interface IProp {
  user: IUser;
}

const TableRow: React.FC<IProp> = ({
  user: {
    pic,
    username,
    name,
    company,
    repos,
    gists,
    followers,
    following,
    view,
  },
}) => {
  return (
    <tr className={styles.tableData}>
      <td className={styles.td}>
        <figure className={styles.imgBox}>
          <img className={styles.profilePic} src={pic} alt={name} />
        </figure>
      </td>
      <td className={styles.td}>{username}</td>
      <td className={styles.td}>{name}</td>
      <td className={styles.td}>{company}</td>
      <td className={styles.td}>{repos}</td>
      <td className={styles.td}>{gists}</td>
      <td className={styles.td}>{followers}</td>
      <td className={styles.td}>{following}</td>
      <td className={styles.td}>view user</td>
    </tr>
  );
};

export default TableRow;
