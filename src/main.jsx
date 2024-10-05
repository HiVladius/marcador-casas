import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Marcador from "./Marcador.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Marcador />
  </StrictMode>
);
