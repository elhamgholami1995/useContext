import { useContext } from "react";
import { ThemeCOntext } from "../App";

export default function Panel({ title, children }) {
  const theme = useContext(ThemeCOntext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
