import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import {BoxContentProvider} from "./context/BoxContext";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <BoxContentProvider>
    
    <App/>
    </BoxContentProvider>
  </TransactionsProvider>,
  document.getElementById("root"),
);
