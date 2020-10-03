import { get, post } from "./HttpRequest";

const ACCOUNTS_API_ROUTE = "http://localhost:3000/api/accounts";
const TRANSFER_ROUTE = "/transfer";

const getAccounts = () => {
  return get(ACCOUNTS_API_ROUTE);
};

const makeTransfer = (from, to, ammount) => {
  return post(`${ACCOUNTS_API_ROUTE}${TRANSFER_ROUTE}`, {
    from,
    to,
    ammount,
  });
};

export { getAccounts, makeTransfer };
