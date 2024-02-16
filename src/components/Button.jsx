import { useContext } from "react";
import { ThemeCOntext } from "../App";

export default function Button({ children }) {
  const theme = useContext(ThemeCOntext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
