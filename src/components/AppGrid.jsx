import React from "react";

function AppGrid({ apps }) {
  return (
    <div className="p-6 grid grid-cols-4 gap-6">
      {apps.map((a, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-white select-none cursor-pointer"
          onClick={() => window.open(a.link, "_blank")}
        >
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-white/10">
            <img src={a.icon} alt={a.name} className="w-10 h-10" />
          </div>
          <p className="text-xs mt-2 text-center w-20 truncate">{a.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AppGrid;
