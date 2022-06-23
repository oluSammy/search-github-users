import styles from "./tableHeader.module.css";
import { useContext } from "react";
import { AppContext } from "../../context";
import constants from "../../constants";

const TableHeader = () => {
  const { searchQuery, totalDocs, currentPage, users } = useContext(AppContext);
  const perPage = constants.PER_PAGE;

  const start =
    currentPage === 1 ? currentPage : (currentPage - 1) * perPage + 1;
  const lastIndex =
    currentPage === 1
      ? currentPage * perPage
      : (currentPage - 1) * perPage + users.length;

  return (
    <div className={styles.root}>
      <div className={styles.keyword}>
        {searchQuery && "Search Query:"}{" "}
        <span className={styles.keywordSpan}>{searchQuery && searchQuery}</span>
      </div>
      <div className={styles.pageCount}>
        {totalDocs ? (
          <h6 className={styles.pageCountText}>
            Showing Results:{" "}
            <span className={styles.pageCountTextSpan}>
              {" "}
              {start} - {lastIndex} of {totalDocs}
            </span>
          </h6>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TableHeader;
