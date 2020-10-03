import React from "react";
import { hot } from "react-hot-loader/root";
import Dashboard from "./components/Dashboard";
import AccountsProvider from "./providers/AccountsProvider";
import TransferProvider from "./providers/TransferProvider";

const App = () => {
  return (
    <AccountsProvider>
      <TransferProvider>
        <Dashboard></Dashboard>
      </TransferProvider>
    </AccountsProvider>
  );
};

export default hot(App);
