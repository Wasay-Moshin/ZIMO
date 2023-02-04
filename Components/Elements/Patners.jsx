import React from "react";

function Patners() {
  return (
    <div className="patners">
      <div className="mt-[12rem] mb-[12rem]">
        <div class="grid lg:grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <img className=" h-30 w-80 " src="Assets/ZIMO B.png" alt="" />
          </div>
          <div className="mt-2 flex items-start justify-start flex-col">
            <img
              className="h-30 w-80 mb-2"
              src="Assets/CIVICA CES B.png"
              alt=""
            />
            <img className="h-30 w-80" src="Assets/Barclays.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patners;
