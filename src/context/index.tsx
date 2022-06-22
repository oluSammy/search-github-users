import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useContext,
} from "react";
import axios from "axios";
import constants from "../constants";

export interface IUser {
  username: string;
  avatar: string;
  followers: number;
  following: number;
  gists: number;
  repos: number;
  company: string;
  name: string;
  url: string;
}

interface IProp {
  children: React.ReactNode;
}

interface prop {
  users: IUser[];
  isLoading: boolean;
  error: string;
  searchQuery: string;
  currentPage: number;
  totalPages: number;
}

const AppContext = createContext({} as prop);

const AppProvider = (props: IProp) => {
  const [users, setUsers] = useState<IUser[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchUsers = useCallback(async (searchQuery: string, page: number) => {
    try {
      setIsLoading(true);
      setError("");
      const users = await axios.get(
        `${constants.API_URL}${searchQuery}&per_page=${constants.PER_PAGE}`
      );
    } catch (e: any) {
      setIsLoading(false);
      setError("an error occurred");
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{ users, isLoading, error, searchQuery, currentPage, totalPages }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
