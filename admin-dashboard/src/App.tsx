import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import Header from "@/components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to the Admin Dashboard</h1>
      </main>
    </>
  );
}

export default App;
