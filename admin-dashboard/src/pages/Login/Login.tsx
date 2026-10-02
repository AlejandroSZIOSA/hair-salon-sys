import Header from "@/components/header/Header/Header";
import React from "react";
import styles from "./Login.module.css";

const LoginPage: React.FC = () => {
  return (
    <>
      <Header subHeaderLabel="Admin" />
      <main>
        <h1>Login ADMIN </h1>
        <form>
          <fieldset>
            <legend>Login ADMIN </legend>
            <label htmlFor="userEmail">
              UserEmail:
              <input type="email" id="userEmail" name="userEmail" />
            </label>

            <label htmlFor="password">
              Password: <input type="password" id="password" name="password" />
            </label>

            <button type="submit">Login</button>
          </fieldset>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
