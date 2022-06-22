import React from "react";
import styles from "../Table/table.module.css";
import { CgProfile } from "react-icons/cg";
import { BiCode, BiCodeCurly, BiLinkExternal } from "react-icons/bi";
import { IoGitCommit } from "react-icons/io5";
import { GoGist } from "react-icons/go";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { RiUserFollowLine, RiGitRepositoryCommitsLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className={styles.thead}>
      <tr className={styles.tr}>
        <th className={styles.th}>
          <CgProfile className={styles.tableIcon} />
        </th>
        <th className={styles.th}>
          <BiCodeCurly className={styles.tableIcon} />
          <span className={styles.tableTitle}>Username </span>
        </th>
        <th className={styles.th}>
          <BiCode className={styles.tableIcon} />
          <span className={styles.tableTitle}>name </span>
        </th>
        <th className={styles.th}>
          <IoGitCommit className={styles.tableIcon} />
          <span className={styles.tableTitle}>company </span>
        </th>
        <th className={styles.th}>
          <RiGitRepositoryCommitsLine className={styles.tableIcon} />
          <span className={styles.tableTitle}>repos </span>
        </th>
        <th className={styles.th}>
          <GoGist className={styles.tableIcon} />
          <span className={styles.tableTitle}>gists </span>
        </th>
        <th className={styles.th}>
          <RiUserFollowLine className={styles.tableIcon} />
          <span className={styles.tableTitle}>followers </span>
        </th>
        <th className={styles.th}>
          <MdOutlineFollowTheSigns className={styles.tableIcon} />
          <span className={styles.tableTitle}>following </span>
        </th>
        <th className={styles.th}>
          <BiLinkExternal className={styles.tableIcon} />
          <span className={styles.tableTitle}>view </span>
        </th>
      </tr>
    </div>
  );
};

export default Header;
