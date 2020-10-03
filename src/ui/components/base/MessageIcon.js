import React from "react";

export default function MessageIcon({ message, children }) {
  return (
    <div>
      <div className="text-center px-6">
        <div className="flex flex-col justify-items-center">
          <div className="mx-auto">{children}</div>
          <div className="mx-auto p-6">
            <span>{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
