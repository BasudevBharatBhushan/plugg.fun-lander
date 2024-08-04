import React, { useRef } from "react";
import { socialLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  //   useGSAP(() => {
  //     gsap.from(".social-icon", {
  //       ease: "slow(0.7,0.7,false)",
  //       delay: 3,
  //       scale: 0.5,
  //       opacity: 0,
  //       stagger: 0.2,
  //       duration: 3,
  //       scrollTrigger: {
  //         trigger: ".footer",
  //         start: "top 80%",
  //         end: "top 20%",
  //         scrub: 2,
  //         invalidateOnRefresh: true,
  //       },
  //     });
  //   }, []);

  const iconsRef = useRef([]);
  return (
    <footer className="footer w-full bg-gray-800 text-white font-Oswald">
      <div className="w-[85vw] mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-center md:text-left">
              We connect influencers and advertisers in a unique,
              blockchain-powered marketplace.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-center">
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  How It Works
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className=" flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>

              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    href={social.link}
                    target="_blank"
                    key={index}
                    ref={(el) => (iconsRef.current[index] = el)}
                    className="social-icon text-white hover:text-orange-500 transition duration-300 hover:scale-125 ease-in-out"
                  >
                    <FontAwesomeIcon size="lg" icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <i className="fab fa-discord text-2xl"></i>
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <i className="fab fa-telegram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p>&copy; 2024 plugg.fun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
