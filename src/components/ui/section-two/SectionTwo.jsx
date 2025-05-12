import React, { useEffect, useState } from 'react';

const SectionTwo = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const brandItems = [
    { id: 1, image: '/1.png' },
    { id: 2, image: '/2.png' },
    { id: 3, image: '/3.png' },
    { id: 4, image: '/4.png' },
    { id: 5, image: '/5.png' },
    { id: 6, image: '/6.png' },
    { id: 7, image: '/7.png' },
    { id: 8, image: '/8.png' },
    { id: 9, image: '/9.png' },
    { id: 10, image: '/10.png' },
    { id: 11, image: '/11.png' },
    { id: 12, image: '/12.png' },
  ];

  const categoryItems = [
    { id: 1, name: 'Laptops', image: '/laptops.png' },
    { id: 2, name: 'PC Gaming', image: '/pc.png' },
    { id: 3, name: 'Headphones', image: '/headphones.png' },
    { id: 4, name: 'Monitors', image: '/monitor.png' },
  ];

  useEffect(() => {
    setBrands(brandItems);
    setCategories(categoryItems);
  }, []);

  const displayedBrands = showAllBrands ? brands : brands.slice(0, 10);
  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 4);

  return (
    <div className="w-full h-full container mx-auto ">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Brands Section */}
        <div className="bg-white w-full md:w-1/2 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between mb-4 p-4 items-center">
            <h1 className="font-bold text-lg">FEATURE BRAND</h1>
            {brands.length > 10 && (
              <button
                onClick={() => setShowAllBrands(!showAllBrands)}
                className="text-sm font-light text-gray-600 hover:text-primary transition"
              >
                {showAllBrands ? 'Show Less' : 'View All'}
              </button>
            )}
          </div>
          <div>
            <ul className="grid grid-cols-5 gap-4">
              {displayedBrands.map((brand) => (
                <li key={brand.id} className="flex justify-center">
                  <img
                    src={`src/assets/brands${brand.image}`}
                    alt={`Brand ${brand.id}`}
                    className="w-full max-w-[80px] h-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white w-full md:w-1/2 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between mb-4  p-4 items-center">
            <h1 className="font-bold text-lg">TOP CATEGORIES</h1>
            {categories.length && (
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="text-sm font-light text-gray-600 hover:text-primary transition"
              >
                {showAllCategories ? 'Show Less' : 'View All'}
              </button>
            )}
          </div>
          <div>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {displayedCategories.map((category) => (
                <li key={category.id} className="text-center">
                  <div className="rounded-lg p-2 mb-2">
                    <img
                      src={`src/assets/categories${category.image}`}
                      alt={`Category ${category.id}`}
                      className="w-full h-16 object-contain mx-auto"
                    />
                  </div>
                  <p className="font-medium text-sm">{category.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
