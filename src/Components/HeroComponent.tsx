"use client";

import React from "react";
import { Input } from "./ui/input";

export const HeroComponent = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-center gap-2.5 relative w-full h-full min-h-dvh px-4 ">
      <div className="flex flex-col w-[957px] items-start justify-center gap-10 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-2.00px] ml-[-1.00px] [-webkit-text-stroke:1px_#020713] bg-gradient-to-b from-[rgb(23,37,84)_0%] to-[rgb(30,64,175)_100%]  [-webkit-background-clip:text] bg-clip-text  [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'HK_Grotesk-Medium',Helvetica] font-medium text-transparent text-8xl tracking-[0] leading-[96px]">
            How skilled are you?
            <br />
            Let&#39;s find out your score!
          </p>
          <p className="relative w-[732px] [font-family:'Inter-Medium',Helvetica] font-medium text-blue-950 text-[32px] tracking-[0] leading-[39.0px]">
            SkilledScore - A smarter way to find right skills and jobs. Unlock your potential with SkilledScore -
            Transform your skills today!
          </p>
        </div>
        <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
          <Input placeholder="Your email address" type="email" />
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-3 relative flex-[0_0_auto] bg-slate-900 rounded-lg">
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
              Find your score
            </button>
          </div>
        </div>
      </div>
      <img
        className="top-[110px] left-[1180px] absolute w-[100px] h-[100px] object-cover"
        alt="Purple cube"
        src="purple-cube.png"
      />
      <img
        className="top-[472px] left-[779px] absolute w-[100px] h-[100px] object-cover"
        alt="Purple helix"
        src="purple-helix.png"
      />
      <img
        className="absolute w-[434px] h-[447px] top-1/4 right-6 object-cover bg-transparent -z-10"
        alt="Visual"
        src="visual.png"
      />
    </div>
  );
};
