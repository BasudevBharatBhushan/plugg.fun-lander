import React, { useState, useEffect } from "react";
import { useWalletContext } from "../context/WalletContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    connect,
    disconnect,
    connected,
    setVisible,
    publicKey,
    connectWallet,
  } = useWalletContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shortenedPublicKey = publicKey
    ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
    : "";

  return (
    <header
      className={`fixed w-[95vw] border-2 border-white rounded-md flex flex-row justify-between items-center px-5 py-3 font-Oswald transition-all duration-300 z-30 ${
        isScrolled ? "bg-white w-full rounded-none mt-0 py-1" : "bg-black mt-3"
      }`}
    >
      <div>
        <p
          className={`${
            isScrolled ? "text-2xl" : "text-3xl"
          } font-extrabold text-orange-500 transition-all duration-300`}
        >
          plugg.fun
        </p>
      </div>

      <div>
        {connected ? (
          <div className="flex items-center">
            <span
              className={`${
                isScrolled ? "text-xl text-black" : "text-2xl text-white"
              } font-bold transition-all duration-300`}
            >
              {shortenedPublicKey}
            </span>
            <button
              className={`ml-4 font-thin ${
                isScrolled
                  ? "bg-black text-white border border-black"
                  : "bg-white text-black border border-white"
              } py-1 px-3 rounded-md font-bold transition-all duration-300 hover:bg-orange-500 hover:text-white`}
              onClick={disconnect}
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            className={`${
              isScrolled ? "text-xl text-black" : "text-2xl text-white"
            } font-bold transition-all duration-300 cursor-pointer hover:text-orange-500`}
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
