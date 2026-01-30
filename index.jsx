import { createRoot } from "react-dom/client";
import Page from "./Page";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Page page="resume.md" />
  </div>
);
