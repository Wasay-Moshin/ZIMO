import React from "react";

function Hero() {
  return (
    <div className="custom-img w-full h-screen bg-cover bg-center ">
      <div className="container mx-auto px-6 pt-5">
        <div className="grid   grid-cols-3 gap-4">
          <div className="flex items-baseline justify-baseline">
            <img className="w-7 " src="Assets/ZIMO Menu.svg" alt="" />
            &nbsp;
            &nbsp;
            <img className="w-20" src="Assets/ZIMO W.svg" alt="" />
            &nbsp;
            &nbsp;
            <p>About</p>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-20  block" src="Assets/ZIMO ZIG W.svg" alt="" />
          </div>
          <div>
            <div className="flex items-end justify-end flex-col">
              <img className="w-3" src="Assets/ZIMO User Icon W.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="discover pt-[13rem]"  data-aos="zoom-in">
        <h5 className="text-white ml-[2rem]">Discover</h5>
        <h1 className="text-white ml-[2rem]">A NEW WORLD</h1>
        <p className="ml-[2rem]">FOR THOSE WHO WISH FOR MORE...</p>
      </div>
      <div className="flex items-center justify-center absolute inset-x-0 bottom-0 h-16">
        <p>BRINGING THE WORLD CLOSER TOGETHER</p>
      </div>
    </div>
  );
}

export default Hero;
