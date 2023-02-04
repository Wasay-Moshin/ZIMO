import React from "react";

function Categories() {
  return (
    <div className="categories mt-20 mb-20">
    <div className="container mx-auto px-4 ">
        <div className="mb-4">
        <span>OUR CATOGRIES</span>
        </div>
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="relative rounded overflow-hidden">
          <img
            className="w-80"
            src="Assets/YACHTS.png"
            alt=""
          />
          <div className="absolute px-6">
            <p className="absolute text-white bottom-2 px-20">Yachts </p>
          </div>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            className="w-80 h-75"
            src="Assets/Property 1821.jpg"
            alt=""
          />
          <div className="absolute px-6">
            <p className="absolute text-white bottom-2 px-20">Property </p>
          </div>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            className="w-80"
            src="Assets/CARS.png"
            alt=""
          />
          <div className="absolute px-6">
            <p className="absolute text-white bottom-2 px-20">Cars</p>
          </div>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            className="w-80"
            src="Assets/REAL ESTATE 1.jpg"
            alt=""
          />
          <div className="absolute px-6">
            <p className="absolute text-white bottom-2 px-20">Property </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-5">
       <h1>our platform for all preminum listings</h1>
       <div className="mt-2">
        <h2>Unlimited potentials</h2>
       </div>
      </div>
    </div>
    </div>
  );
}

export default Categories;
