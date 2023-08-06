import "./styles/normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { theme } from "styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
