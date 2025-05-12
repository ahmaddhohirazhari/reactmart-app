import React from 'react';
import CategoryNav from './CategoryNav';
import BannerMain from './BannerMain';

const SectionOne = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 lg:my-2 mb-3">
      <BannerMain />
      <CategoryNav />
    </div>
  );
};

export default SectionOne;
