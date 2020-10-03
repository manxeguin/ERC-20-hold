import React from "react";

export default function Accounts({ data, onClickRow }) {
  const numAccounts = data.accounts.length;

  return data.accounts.map((account) => (
    <div
      key={account.address}
      className="flex flex-col lg:flex-row px-6 py-6 text-grey-darker items-center border-b -mx-4"
    >
      <div className="flex-1 px-4 items-center w-full">
        <span className="text-xs font-bold">{account.address}</span>
      </div>
      <div className="flex-1 flex-row px-4 w-full">
        <div className="flex">
          <div className="text-left py-2 sm:text-right ">
            <span className="text-base sm:text-xs font-light whitespace-no-wrap">
              ammount:
            </span>
          </div>
          <div className="flex-1 py-2 text-right">
            <span className="text-right font-light text-sm">
              {account.balance}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex-row px-4 w-full">
        <div className="flex">
          <div className="text-left py-2 sm:text-right">
            <span className="text-base font-light sm:text-xs whitespace-no-wrap">
              on hold:
            </span>
          </div>
          <div className="flex-1 py-2 text-right">
            <span className="text-right font-light text-sm">
              {account.onHold}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 w-full">
        {numAccounts > 1 ? (
          <button
            onClick={() => onClickRow(account.address)}
            className="w-full bg-primary-800 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-lg py-4 sm:py-3 flex items-center justify-center sm:w-32 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300"
          >
            transfer
          </button>
        ) : null}
      </div>
    </div>
  ));
}
