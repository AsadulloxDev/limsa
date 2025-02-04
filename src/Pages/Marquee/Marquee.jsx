import React from "react";
import Marquee from "react-fast-marquee";
function MarqueeContent() {
  return (
    <div className="bg-[#212121]">
      <Marquee direction="right" speed={200}>
        <div className="flex gap-10">
        <h1 className="text-3xl text-white">WEBSITE BUILDING SERVICE</h1>
        <h1 className="text-3xl text-white">/</h1>
        <h1 className="text-3xl text-white">MOBILE APPS </h1>
        <h1 className="text-3xl text-white">/</h1>
        <h1 className="text-3xl text-white">AUTOMATION SYSTEMS</h1>
        <h1 className="text-3xl text-white">/</h1>
        <h1 className="text-3xl text-white">DIGITAL SOLUTIONS</h1>
        <h1 className="text-3xl text-white">/</h1>
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeContent;
