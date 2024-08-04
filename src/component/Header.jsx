import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  return (
    <header
      className={`fixed w-[95vw] border-2 border-white  rounded-md flex flex-row justify-between items-center px-5 py-3 font-Oswald transition-all duration-300 z-30 ${
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
        <p
          className={` ${
            isScrolled ? "text-xl text-black" : "text-2xl text-white "
          }    font-bold transition-all duration-300`}
        >
          Connect Wallet
        </p>
      </div>
    </header>
  );
};

export default Header;
