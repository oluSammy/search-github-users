import styles from "./tableHeader.module.css";
import { useContext } from "react";
import { AppContext } from "../../context";
import constants from "../../constants";

const TableHeader = () => {
  const { searchQuery, totalPages, currentPage } = useContext(AppContext);
  const perPage = constants.PER_PAGE;

  const start = currentPage === 1 ? currentPage : currentPage * perPage + 1;

  return (
    <div className={styles.root}>
      <div className={styles.keyword}>
        {searchQuery && "Search Query:"}{" "}
        <span className={styles.keywordSpan}>{searchQuery && searchQuery}</span>
      </div>
      <div className={styles.pageCount}>
        {totalPages ? (
          <h6 className={styles.pageCountText}>
            Showing Results:{" "}
            <span className={styles.pageCountTextSpan}>
              {" "}
              {start} - {currentPage * perPage} of {totalPages}
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
