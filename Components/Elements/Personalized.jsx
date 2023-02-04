import React from "react";

function Personalized() {
  return (
    <div className="personalized-img bg-cover bg-center h-screen">
      <div className="">
        <div class="grid lg:grid-cols-2 gap-20">
          <div className="flex items-center justify-center pt-[10rem]">
            <img className=" h-30 w-80" src="Assets/ZIMO ZIG W.svg" alt="" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <div>
            <h1>Personalised for You</h1>
            </div>
            <span>
              DELIVERING THOUSANDS OF PERSONALISED ALERTS <br /> EVERYDAY, OUR
              USERS CAN BE FIRST IN LINE WHEN <br /> THAT OPPORTUNITY OF A
              LIFETIME IS HERE.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personalized;
