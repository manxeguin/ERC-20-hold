import React, { useEffect } from "react";
import TransferIcon from "../svg/Transfer";
import { useTransfer } from "../providers/TransferProvider";
import { useAccounts } from "../providers/AccountsProvider";

const FIELD_FROM = "from";
const FIELD_AMMOUNT = "ammount";

export default function TransferForm({ accountTo }) {
  const { doTransfer } = useTransfer();
  const { data } = useAccounts();
  const formData = {};

  const filteredAddresses = () =>
    data.accounts
      .map((account) => account.address)
      .filter((address) => address !== accountTo);

  const AvailableAccounts = () =>
    filteredAddresses().map((address) => (
      <option key={address} value={address}>
        {address}
      </option>
    ));

  const onSubmitForm = () => {
    doTransfer(formData[FIELD_FROM], accountTo, formData[FIELD_AMMOUNT]);
  };

  const onChangeCb = (event) => {
    formData[event.target.name] = event.target.value;
  };

  useEffect(() => {
    formData[FIELD_FROM] = filteredAddresses()[0];
    formData[FIELD_AMMOUNT] = 0;
  }, []);

  return (
    <div>
      <div className="text-center px-6">
        <div className="flex flex-col justify-items-center">
          <div className="mx-auto">
            <TransferIcon></TransferIcon>
          </div>
          <div className="mx-auto">
            <form className="w-full max-w-lg mx-auto my-5">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 mb-2 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    From
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={onChangeCb}
                    >
                      <AvailableAccounts></AvailableAccounts>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs italic pt-1">
                    The sender account
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    To
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={accountTo}
                    name="accountTo"
                    type="text"
                    disabled="disabled"
                  />
                  <p className="text-gray-600 text-xs italic">
                    The reciever account
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Ammount
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    onChange={onChangeCb}
                    placeholder="0.000"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <button
          onClick={onSubmitForm}
          className="w-full px-4 bg-primary-800 p-3 rounded-lg text-white hover:bg-primary-900"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
