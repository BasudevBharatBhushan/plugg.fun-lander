import React from "react";

const Header = () => {
  return (
    <div className=" w-[95vw] border border-gray-600 mt-3 rounded-md flex flex-row justify-between items-center px-5 py-3 font-Caveat">
      <div>
        <p className="text-3xl font-extrabold text-orange-500">plugg.fun</p>
      </div>

      <div>
        <p className="text-2xl  text-black font-bold">Connect Wallet</p>
      </div>
    </div>
  );
};

export default Header;
