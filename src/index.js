import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from '@mui/material/styles';
import App from "./Route";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StyledEngineProvider injectFirst>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StyledEngineProvider>
);
