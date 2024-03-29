import { createContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { ToggleTheme } from "./components/ToggleTheme";

export default function MyApp() {
  return (
    <ThemeProvider>
      <div>
        <Form />
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}
