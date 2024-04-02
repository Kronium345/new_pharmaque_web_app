import { TextInput } from "./input";

import React from "react";

export default function Form({
  handleSubmit,
  children,
  btnText = "Submit",
  btnClr = "bg-blue-500 hover:bg-blue-700",
  className,
}) {
  return (
    <form onSubmit={handleSubmit} className={"p-2 md:p-5 " + className}>
      {children}
      <button
        type="submit"
        className={"text-white w-full py-2 px-4 rounded mt-5 " + btnClr}
      >
        {btnText}
      </button>
    </form>
  );
}

export { TextInput };
