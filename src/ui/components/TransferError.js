import React from "react";
import ErrorIcon from "../svg/Error";
import MessageIcon from "./base/MessageIcon";
import Button from "./base/Button";

export default function TransferError({ onClickButton }) {
  return (
    <div>
      <MessageIcon message="Tranfer completed with error">
        <ErrorIcon></ErrorIcon>
      </MessageIcon>
      <div className="flex justify-end pt-2">
        <Button onClickButton={onClickButton}>close</Button>
      </div>
    </div>
  );
}
