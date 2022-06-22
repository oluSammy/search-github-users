import styles from "./tableHeader.module.css";

const TableHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.keyword}>
        Search Query: <span className={styles.keywordSpan}>Olusammy</span>
      </div>
      <div className={styles.pageCount}>
        <h6 className={styles.pageCountText}>
          Showing Results:{" "}
          <span className={styles.pageCountTextSpan}> 21 - 30 of 200</span>
        </h6>
      </div>
    </div>
  );
};

export default TableHeader;
