import React from "react";

function Tickets() {
  return (
    <div className="container mx-auto px-8 tickets mb-5">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-start justify-center flex-col">
          <img className="w-80" src="Assets/ZIMO B.png" alt="" />
          <div className="mt-3 mb-5">
            <span>One Sources</span>
            <h1>Entry Tickets</h1>
            <p>For All Premium Listing</p>
          </div>
        </div>
        <div>
          <img className="rounded-md " src="Assets/Property 1821.jpg" alt="" />
          <div className="text-center mt-3">
            <span>Lets your Dreams find you</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
