import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./core/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./core/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
