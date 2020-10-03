import React, { createContext, useContext, useState, useEffect } from "react";
import { getAccounts } from "../../services/AccountsService";
import { Loading, Success, Error } from "./utils";

const LOADING_STATE = Loading();

const AccountsContext = createContext(LOADING_STATE);

const AccountsProvider = ({ children }) => {
  const [state, setState] = useState(LOADING_STATE);

  const fetchAccounts = () =>
    getAccounts()
      .then((res) => setState(Success(res)))
      .catch((error) => setState(Error(error)));

  useEffect(() => {
    fetchAccounts();
  }, []);

  const providerValues = {
    ...state,
    fetchAccounts,
  };

  return (
    <AccountsContext.Provider value={providerValues}>
      {children}
    </AccountsContext.Provider>
  );
};

export const useAccounts = () => useContext(AccountsContext);

export default AccountsProvider;
