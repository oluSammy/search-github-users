import React from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={`${styles.prev} ${styles.control}`}>
          <MdOutlineNavigateBefore className={styles.pageIcon} />
        </div>
        <div className={styles.numbersContainer}>
          <div className={`${styles.num} ${styles.activeNum}`}>1</div>
          <div className={`${styles.num}`}>2</div>
          <div className={`${styles.num}`}>3</div>
          <div className={`${styles.num}`}>...</div>
          <div className={`${styles.num}`}>4</div>
          <div className={`${styles.num}`}>5</div>
        </div>
        <div className={`${styles.next} ${styles.control}`}>
          <MdOutlineNavigateNext className={styles.pageIcon} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
