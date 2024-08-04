import React from "react";
import { BidVectorImg, RewardVectorImg, HuntCelebVectorImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  useGSAP(() => {
    // Step 1
    gsap.from(".vector-image-1", {
      ease: "slow(0.7,0.7,false)",
      x: "-100%",
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: ".vector-image-1",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".card-description-1", {
      ease: "slow(0.7,0.7,false)",
      x: "100%",
      duration: 3,

      opacity: 0,
      scrollTrigger: {
        trigger: ".card-description-1",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Step 2
    gsap.from(".vector-image-2", {
      ease: "slow(0.7,0.7,false)",
      x: "-100%",
      duration: 3,

      opacity: 0,
      scrollTrigger: {
        trigger: ".vector-image-2",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".card-description-2", {
      ease: "slow(0.7,0.7,false)",
      x: "100%",
      duration: 3,

      opacity: 0,
      scrollTrigger: {
        trigger: ".card-description-2",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Step 3
    gsap.from(".vector-image-3", {
      ease: "slow(0.7,0.7,false)",
      x: "-100%",
      duration: 3,

      opacity: 0,
      scrollTrigger: {
        trigger: ".vector-image-3",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".card-description-3", {
      ease: "slow(0.7,0.7,false)",
      x: "100%",
      duration: 3,

      opacity: 0,
      scrollTrigger: {
        trigger: ".card-description-3",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div className="w-[85vw] my-5 py-[5vh] text-white font-Oswald">
      <div className="how-it-works grid grid-cols-1 lg:grid-cols-2 justify-items-stretch items-center gap-8">
        <div className="col-span-1 lg:col-span-2 flex justify-center items-center py-5">
          <p className="text-5xl font-thin underline">How does it work</p>
        </div>

        {/* Step 1 */}
        <div className="lg:order-1 order-2 card-description-1">
          <p className="text-center lg:text-right text-2xl lg:text-3xl">
            Step 1: Hunt for your fave celeb on twitter
          </p>
        </div>
        <div className="p-10 lg:order-2 order-1 vector-image-1">
          <img className="rounded-xl w-full" src={HuntCelebVectorImg} alt="" />
        </div>

        {/* Step 2 */}
        <div className="p-10 lg:order-3 order-3 vector-image-2">
          <img className="rounded-xl w-full" src={BidVectorImg} alt="" />
        </div>
        <div className="lg:order-4 order-4 card-description-2">
          <p className="text-center lg:text-left text-2xl lg:text-3xl">
            Step 2: Drop a bid for ad real estate on the celeb for 0.02 sol
          </p>
        </div>

        {/* Step 3 */}
        <div className="lg:order-5 order-6 card-description-3">
          <p className="text-center lg:text-right text-2xl lg:text-3xl">
            Step 3: Sit back, relax and snag those sweet rewards
          </p>
        </div>
        <div className="p-10 lg:order-6 order-5 vector-image-3">
          <img className="rounded-xl w-full" src={RewardVectorImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
