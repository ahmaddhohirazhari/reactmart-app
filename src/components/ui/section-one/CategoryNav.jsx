import React, { useEffect, useState } from 'react';

const CategoryNav = () => {
  const [categories, setCategories] = useState([]);

  const categoriesItem = [
    { name: 'Laptops', icon: '/laptop.png' },
    { name: 'PC & Computers', icon: '/pc.png' },
    { name: 'Cell Phones', icon: '/phone.png' },
    { name: 'Tablets', icon: '/tablet.png' },
    { name: 'Cameras', icon: '/camera.png' },
  ];

  useEffect(() => {
    setCategories(categoriesItem);
  }, []);

  return (
    <div
      className={`bg-white p-4 rounded-lg w-full md:w-1/4  order-2 md:order-1  `}
    >
      <div className="border-b pb-2 mb-4">
        <h1 className="text-l font-semibold">Category</h1>
      </div>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-3 border border-gray-400 hover:bg-gray-100 p-3 rounded cursor-pointer transition-colors"
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-6 h-6 object-contain"
            />
            <div className="text-start w-[200px]">
              <span className="text-s font-bold text-start">
                {category.name}
              </span>
            </div>
            <span className="text-s bg-primary-100 h-6 w-6 text-center items-center rounded-full">
              {index}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNav;
