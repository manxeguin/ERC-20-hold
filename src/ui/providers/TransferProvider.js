import React, { createContext, useContext, useState } from "react";
import { makeTransfer } from "../../services/AccountsService";
import { Loading, Success, Error, InitialState } from "./utils";

const TransferContext = createContext(InitialState());

const TransferProvider = ({ children }) => {
  const [state, setState] = useState(InitialState());

  const doTransfer = (from, to, ammount) => {
    setState(Loading());
    return makeTransfer(from, to, ammount)
      .then((res) => setState(Success(res)))
      .catch((error) => setState(Error(error)));
  };

  const initTransfer = () => {
    setState(InitialState());
  };

  const providerValues = {
    ...state,
    doTransfer,
    initTransfer,
  };

  return (
    <TransferContext.Provider value={providerValues}>
      {children}
    </TransferContext.Provider>
  );
};

export const useTransfer = () => useContext(TransferContext);

export default TransferProvider;
