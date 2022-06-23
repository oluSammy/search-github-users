import React, { useState, createContext, useCallback } from "react";
import axios from "axios";
import constants from "../constants";

export interface IUser {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_gists: number;
  public_repos: number;
  company: string;
  name: string;
  url: string;
  id: string;
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
  totalDocs: number;
  fetchUsers: (searchQuery: string, page: number) => void;
}

export const AppContext = createContext({} as prop);

const AppProvider = (props: IProp) => {
  const [users, setUsers] = useState<IUser[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);

  const fetchUsers = useCallback(async (searchQuery: string, page: number) => {
    try {
      setIsLoading(true);
      setError("");
      setSearchQuery(searchQuery);

      const config = {
        headers: {
          Authorization: `token ${process.env.REACT_APP_API_KEY}`,
        },
      };

      const { data } = await axios.get(
        `${constants.API_URL}q=${searchQuery}&per_page=${constants.PER_PAGE}&page=${page}`,
        config
      );
      const usersUrl = data.items.map((user: { url: string }) => user.url);
      const usersData = usersUrl.map(async (url: string) => {
        const { data } = await axios.get(url, config);
        return data;
      });
      const allUsers = await Promise.all(usersData);
      setTotalDocs(data.total_count);
      setCurrentPage(page);
      setUsers(allUsers);
      setIsLoading(false);
    } catch (e: any) {
      console.log(e.response.data, "resasdfghjk");
      setIsLoading(false);
      setError("an error occurred");
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        users,
        isLoading,
        error,
        searchQuery,
        currentPage,
        totalDocs,
        fetchUsers,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
