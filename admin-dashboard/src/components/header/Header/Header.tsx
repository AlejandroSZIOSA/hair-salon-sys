import React from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  subHeaderLabel: string;
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ subHeaderLabel, children }) => {
  return (
    <header>
      <h1>app-logo</h1>
      <div className={styles.headerInnerContainer}>
        <div>
          <h2>{subHeaderLabel}</h2>
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;
