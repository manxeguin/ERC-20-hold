import React from "react";

export default function Button({ onClickButton, children }) {
  return (
    <button
      onClick={onClickButton}
      className="w-full px-4 bg-primary-800 p-3 rounded-lg text-white hover:bg-primary-900"
    >
      {children}
    </button>
  );
}
