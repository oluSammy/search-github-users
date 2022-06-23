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
    html_url,
  },
}) => {
  return (
    <div className={styles.tableData}>
      <div className={styles.td}>
        <figure className={styles.imgBox}>
          <img className={styles.profilePic} src={avatar_url} alt={name} />
        </figure>
      </div>
      <div className={styles.td}>{login}</div>
      <div className={styles.td}>{name ? name : "--"}</div>
      <div className={styles.td}>{company ? company : "--"}</div>
      <div className={styles.td}>{public_repos}</div>
      <div className={styles.td}>{public_gists}</div>
      <div className={styles.td}>{followers}</div>
      <div className={styles.td}>{following}</div>
      <a href={html_url} target="__" className={styles.td}>
        view user
      </a>
    </div>
  );
};

export default TableRow;
