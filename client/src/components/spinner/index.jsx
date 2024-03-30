import { FadeLoader } from "react-spinners";

import React from "react";

export default function Spinner() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-[1000000] bg-[rgba(255,255,255,0.8)]">
      <FadeLoader color="#36d7b7" speedMultiplier={2} />
    </div>
  );
}
