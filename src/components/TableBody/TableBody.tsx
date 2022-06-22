import React from "react";
import styles from "../Table/table.module.css";
import TableRow, { IUser } from "../TableRow/TableRow";

const data = [
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
  {
    pic: "https://avatars.githubusercontent.com/u/31919592?v=4",
    username: "olusammy",
    name: "olumorin samuel",
    company: "Decagon",
    repos: 220,
    gists: 23,
    followers: 30,
    following: 333,
    view: "https://github.com/Olusamimaths",
  },
];

const TableBody = () => {
  return (
    <div className={styles.tbody}>
      {data.map((user: IUser, idx: number) => (
        <TableRow key={idx} user={user} />
      ))}
    </div>
  );
};

export default TableBody;
