import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import Example from "./example";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    {/* <App /> */}
    <Example />
  </QueryClientProvider>,
  document.getElementById("root")
);
