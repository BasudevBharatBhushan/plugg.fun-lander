import React, { useRef } from "react";
import { HeroImg, SolanaImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const solanaImagesRef = useRef([]);

  useGSAP(() => {
    gsap.from(".hero-header", {
      duration: 1,
      scale: 2,
      x: -100,
      y: -100,
      opacity: 0,
      ease: "bounce",
    });

    gsap.from(".hero-content", {
      duration: 1,
      scale: 2,
      x: 100,
      y: 100,
      opacity: 0,
      ease: "bounce",
    });

    gsap.fromTo(
      ".hero-button",
      { rotation: 180 },
      {
        delay: 1,
        duration: 0.5,
        rotation: 360,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".hero-img",
      { opacity: 0, scale: 0.8 },
      {
        duration: 1,
        opacity: 1,
        ease: "bounce",
        scale: 1,
      }
    );
  }, []);

  return (
    <div className="w-full max-w-[85vw] mx-auto h-auto rounded-md mt-3 font-Caveat relative overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-x-5  justify-items-center xl:justify-items-stretch relative z-10 p-4">
        <div className="flex flex-col items-center xl:items-end justify-center order-2 xl:order-1 text-center xl:text-right">
          <h1 className="hero-header text-3xl lg:text-5xl xl:text-4xl font-extrabold mb-4">
            Let your favorite influencer shill this for you
          </h1>
          <p className="hero-content font-bold text-lg lg:text-3xl xl:text-xl">
            Bid for an adspot on any influencer's socials. Just for 0.02 Sol
          </p>
        </div>
        <div className="order-1 xl:order-2 xl:row-span-2 rounded-md flex justify-center items-center">
          <img
            className="hero-img w-full max-w-[80vw] xl:max-w-[30vw] rounded-lg z-10"
            src={HeroImg}
            alt="Hero"
          />
        </div>
        <div className="flex order-3 justify-center xl:justify-end items-center xl:items-start w-full">
          <button className="hero-button bg-orange-500 hover:bg-blue-600 hover:scale-110 py-3 px-10 rounded-xl text-white text-xl transition ease-in-out">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
