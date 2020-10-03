import React, { useEffect } from "react";

import TransferForm from "./TransferForm";
import TransferConfirmation from "./TransferConfirmation";
import TransferError from "./TransferError";
import Spinner from "./base/Spinner";
import { useTransfer } from "../providers/TransferProvider";

export default function Transfer({ selectedAddress, onFinishTransfer }) {
  const { data, error, loading, initTransfer } = useTransfer();

  const onCloseTransferModal = () => {
    onFinishTransfer();
  };

  useEffect(() => {
    initTransfer();
  }, []);

  const TransferResult = ({ selectedAddress }) => {
    if (data || error) {
      return data ? (
        <TransferConfirmation
          onClickButton={onCloseTransferModal}
        ></TransferConfirmation>
      ) : (
        <TransferError onClickButton={onCloseTransferModal}></TransferError>
      );
    } else {
      return <TransferForm accountTo={selectedAddress}></TransferForm>;
    }
  };

  const Loading = () => (
    <div className="flex flex-col justify-items-center">
      <div className="mx-auto w-32 h-32 justify-items-center">
        <Spinner />
        <p className="text-gray-600 text-xs italic pt-1">
          Completing the transfer
        </p>
      </div>
    </div>
  );

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <TransferResult selectedAddress={selectedAddress}></TransferResult>
      )}
    </>
  );
}
