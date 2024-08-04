import { useState, useRef } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SolanaImg } from "./utils";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";

function App() {
  const solanaImagesRef = useRef([]);

  useGSAP(() => {
    // New animations for Solana images
    solanaImagesRef.current.forEach((img, index) => {
      gsap.to(img, {
        x: "random(-50, 50, 5)",
        y: "random(-50, 50, 5)",
        rotation: "random(-15, 15)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });
  }, []);
  return (
    <div className="flex flex-col justify-start items-center bg-black h-auto relative overflow-x-hidden">
      {/* Floating Solana Images */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <img
            key={index}
            ref={(el) => (solanaImagesRef.current[index] = el)}
            className="absolute w-16 opacity-20"
            src={SolanaImg}
            alt=""
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div> */}
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
