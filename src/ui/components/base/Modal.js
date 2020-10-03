import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  const [show, setShow] = useState(false);
  const isMobile = () => window.innerWidth <= 640;

  const closePopup = (evt) => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 150);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      setShow(true);
    });
  }, [open]);

  return ReactDom.createPortal(
    <>
      <div className="transition-opacity ease-in duration-100 fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div
          className={`${
            isMobile()
              ? show
                ? "opacity-100"
                : "translate-y-full"
              : show
              ? "opacity-100"
              : "opacity-50"
          } bg-white sm:w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 absolute bottom-0 sm:bottom-auto w-full overflow-y-auto duration-150 transform transition-transform sm:transition-opacity ease-in sm:translate-y-0 will-change`}
        >
          <div className="py-4 text-left px-6">
            <div className="flex justify-between items-center relative">
              <p className="text-2xl font-bold w-full text-center pt-4">
                Transfer
              </p>
              <div
                onClick={closePopup}
                className="cursor-pointer z-50 absolute top-0 right-0"
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("lightbox")
  );
}
