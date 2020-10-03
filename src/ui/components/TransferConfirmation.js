import React from "react";
import ConfirmationIcon from "../svg/Confirmation";
import MessageIcon from "./base/MessageIcon";
import Button from "./base/Button";

export default function TransferConfirmation({ onClickButton }) {
  return (
    <div>
      <MessageIcon message="Tranfer completed with success">
        <ConfirmationIcon></ConfirmationIcon>
      </MessageIcon>
      <div className="flex justify-end pt-2">
        <Button onClickButton={onClickButton}>close</Button>
      </div>
    </div>
  );
}
