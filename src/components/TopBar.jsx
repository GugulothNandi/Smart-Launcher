import React from "react";

function TopBar({ open, time, battery }) {
  return (
    <div
      className={`absolute top-0 left-0 right-0 flex justify-between px-6 py-3 text-white bg-black/50 transition-all duration-500 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div>{time}</div>
      <div>{battery}%</div>
    </div>
  );
}

export default TopBar;
