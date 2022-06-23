import "./styles/App.css";
import styles from "./components/Table/table.module.css";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import Pagination from "./components/pagination/Pagination";
import TableHeader from "./components/TableHeader/TableHeader";
import { useContext } from "react";
import { AppContext } from "./context";

function App() {
  const { isLoading, users } = useContext(AppContext);
  return (
    <div>
      <Navbar />
      <div className="table-wrapper">
        <TableHeader />
        {!isLoading && !users.length && (
          <div className={styles.instructionContainer}>
            <div className={styles.instructionTitle}>
              <div>Search Github users</div>
            </div>
            <div className={styles.subTitle}>
              <div>
                put a keyword e.g "octocat" in the search box and click on the
                search button
              </div>
            </div>
          </div>
        )}
        <div style={{ overflowX: "scroll" }}>
          <Table />
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default App;
