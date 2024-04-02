import { FadeLoader } from "react-spinners";

import React from "react";

export default function Spinner() {
  return (
    <div
      className="position-fixed d-flex align-items-center justify-content-center "
      style={{
        background: "rgba(255, 255, 255, 0.5)",
        width: "100vw",
        height: "100vh",
        zIndex: 1000000,
      }}
    >
      <FadeLoader color="#36d7b7" speedMultiplier={2} />
    </div>
  );
}
