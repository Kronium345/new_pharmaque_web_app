import { IoMdClose } from "react-icons/io";

import React from "react";

import "./modal.css";
import { TextInput } from "../form";

export default function Modal({
  open = true,
  handleClose,
  children,
  modalTitle = "Modal Title",
}) {
  return (
    <>
      {open && (
        <div className="cus-modal-header">
          <div className="cus-modal-body">
            <div className="cus-modal-header2 mb-2">
              <p className="fs-4 fw-bold mb-0">{modalTitle}</p>
              <IoMdClose fontSize={20} onClick={handleClose} />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
