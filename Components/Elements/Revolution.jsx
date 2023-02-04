import React from "react";

function Revolution() {
  return (
    <div className="revolution mt-5 mb-5">
      <div className="flex items-center justify-center text-black">
        <p>A Real State and proverty platform that is changing the world</p>
      </div>
      <div className="container mx-auto px-8">
        <div class="grid grid-cols-1 gap-4">
          <div className="mt-8">
            <h2>A Revolutionary Platform </h2>
            <h1>Entires - Seller</h1>
            <h1>World Wide</h1>
          </div>
          <div className="flex items-end justify-end flex-col">
            <img className="h-30 w-96" src="Assets/ZIMO ZIG B.png" alt="" />
            <span>
              Connecting User from Across the globe
              <br /> to facilate life's most important
              <br /> peronal transactions
            </span>
          </div>
          <div className="flex items-start justify-start flex-col">
            <p className="text-2xl">The best of the best</p>
            <p className="text-start">
              Connecting User from Across the globe
               to facilate
               <br/> life's most important
               peronal transactions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revolution;
