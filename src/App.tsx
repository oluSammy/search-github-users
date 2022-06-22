import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import Pagination from "./components/pagination/Pagination";

function App() {
  return (
    <div>
      <Navbar />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
