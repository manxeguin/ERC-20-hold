import React, { useState } from "react";
import Modal from "./base/Modal";
import { useAccounts } from "../providers/AccountsProvider";
import MessageIcon from "./base/MessageIcon";
import ErrorIcon from "../svg/Error";
import Spinner from "./base/Spinner";
import Accounts from "./Accounts";
import Transfer from "./Transfer";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();
  const { data, error, loading, fetchAccounts } = useAccounts();

  const onClickAccount = (address) => {
    setSelectedAddress(address);
    setIsOpen(true);
  };

  const closeTransferPopup = () => {
    // refreshing accounts each time the popup close (ideally would be better to check transfer status)
    fetchAccounts();
    setIsOpen(false);
  };

  return (
    <div className="flex-grow md:container mx-auto sm:px-4 pt-6 pb-8">
      <div className="flex flex-wrap">
        <div className="w-full mb-6 lg:mb-0 px-4 flex flex-col">
          <div className="flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
            <div className="border-b">
              <div className="flex justify-between px-6 -mb-px">
                <h3 className="text-blue-dark py-4 font-normal text-lg">
                  Your ERC Holdable Wallet
                </h3>
                <div className="flex"></div>
              </div>
            </div>
            {loading ? (
              <Spinner />
            ) : error ? (
              <MessageIcon message="Error loading accounts">
                <ErrorIcon />
              </MessageIcon>
            ) : (
              <Accounts data={data} onClickRow={onClickAccount} />
            )}
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={closeTransferPopup}>
        <Transfer
          selectedAddress={selectedAddress}
          onFinishTransfer={closeTransferPopup}
        ></Transfer>
      </Modal>
    </div>
  );
};

export default Dashboard;
