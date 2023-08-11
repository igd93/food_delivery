import React from "react";
import { categories } from "./data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Categories
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
        {categories.map((item, index) => (
          <div>
            <div
              className="bg-gray-100 rounded-lg p-4 flex 
            justify-between items-center"
              key={index}
            >
              <h2 className="font-bold sm:text-xl">{item.name}</h2>
              <img className="w-40 h-[200px] object-cover rounded-xl" src={item.image} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
