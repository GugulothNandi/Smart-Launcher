import React from "react";

function HomeHandle({ onOpen }) {
  return (
    <div className="absolute bottom-10 w-full flex justify-center">
      <div
        onClick={onOpen}
        className="w-20 h-4 bg-white/80 rounded-full cursor-pointer"
      ></div>
    </div>
  );
}

export default HomeHandle;
