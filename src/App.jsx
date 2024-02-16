import { createContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";

export const ThemeCOntext = createContext();
export default function MyApp() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeCOntext.Provider value={theme}>
      <div>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use dark mode
        </label>
      </div>
    </ThemeCOntext.Provider>
  );
}
