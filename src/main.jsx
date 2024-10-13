import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div
      style={{
        cursor: "url(/assets/images/gun2.png), auto",
        background:
          "linear-gradient(90deg, rgba(201, 9, 32, 1) 0%, rgba(11, 11, 11, 1) 89%)",
        fontFamily: "Anton SC, sans-serif",
        fontWeight: 100,
        fontSize: "large",
        fontStyle: "normal",
      }}
    >
      <App />
    </div>
  </StrictMode>
);
