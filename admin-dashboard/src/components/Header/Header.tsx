import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.rootHeader}>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
