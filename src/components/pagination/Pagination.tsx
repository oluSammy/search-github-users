import React, { useContext } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import constants from "../../constants";
import { AppContext } from "../../context";
import styles from "./pagination.module.css";

const Pagination = () => {
  const { currentPage, isLoading, totalDocs, fetchUsers, users, searchQuery } =
    useContext(AppContext);

  const totalPages = Math.ceil(totalDocs / constants.PER_PAGE);
  const prevPages = Array.from({ length: currentPage - 1 }, (_, i) => i + 1);
  const noOfPrevData =
    currentPage === 1 ? 0 : (currentPage - 1) * constants.PER_PAGE;
  const lastDoc = noOfPrevData + users.length;
  let remainingPages = totalPages - currentPage;

  const nextPages = [];

  while (remainingPages > 0 && nextPages.length < 5) {
    nextPages.push(nextPages.length + currentPage + 1);
    remainingPages--;
  }

  const pageNumbers = [...prevPages.slice(-4), currentPage, ...nextPages];

  const handleFetchDataForPage = (pageNum: number) => {
    if (pageNum === currentPage) return;
    fetchUsers(searchQuery, pageNum);
  };

  const fetchPage = (direction: "next" | "prev") => {
    if (direction === "prev" && currentPage === 1) return;
    if (direction === "next" && lastDoc === totalDocs) return;

    direction === "next"
      ? handleFetchDataForPage(currentPage + 1)
      : handleFetchDataForPage(currentPage - 1);
  };

  return (
    <div className={styles.root}>
      {!users.length || isLoading ? (
        ""
      ) : (
        <div className={styles.container}>
          <div
            className={`${styles.prev} ${styles.control}`}
            onClick={() => fetchPage("prev")}
          >
            <MdOutlineNavigateBefore className={styles.pageIcon} />
          </div>
          <div className={styles.numbersContainer}>
            {pageNumbers.map((num) => (
              <div
                onClick={() => handleFetchDataForPage(num)}
                className={`${styles.num} ${
                  currentPage === num && styles.activeNum
                }`}
                key={num}
              >
                {num}
              </div>
            ))}
          </div>
          <div
            className={`${styles.next} ${styles.control}`}
            onClick={() => fetchPage("next")}
          >
            <MdOutlineNavigateNext className={styles.pageIcon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
