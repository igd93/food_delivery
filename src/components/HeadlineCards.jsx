import React from "react";

const HeadlineCards = () => {
  return (
    <div
      className="max-w-[1640px] mx-auto p-4 
    py-12 grid md:grid-cols-3 gap-6"
    >
      {/* Card 1*/}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div
          className="absolute w-full h-full bg-black/60
        rounded-xl text-white"
        >
          <p className="font-bold text-2xl px-2 pt-4">
            Best Summer Burgers 
          </p>
          <p className="px-2">Special Offer till 31/8</p>
          <button
            className="border-white bg-white text-black
          mx-2 absolute bottom-4"
          >
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] 
        w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>

      {/* Card 2*/}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div
          className="absolute w-full h-full bg-black/60
        rounded-xl text-white"
        >
          <p className="font-bold text-2xl px-2 pt-4">
            Special Offers
          </p>
          <p className="px-2">Changes weekly</p>
          <button
            className="border-white bg-white text-black
          mx-2 absolute bottom-4"
          >
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] 
        w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
      </div>

      {/* Card 3*/}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div
          className="absolute w-full h-full bg-black/60
        rounded-xl text-white"
        >
          <p className="font-bold text-2xl px-2 pt-4">
            Delicious Deserts
          </p>
          <p className="px-2">Daily offers</p>
          <button
            className="border-white bg-white text-black
          mx-2 absolute bottom-4"
          >
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] 
        w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1611497438246-dcbb383de3c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
