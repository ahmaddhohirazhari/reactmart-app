import React from 'react';

const HeaderNav = () => {
  return (
    <header className="bg-primary text-white py-2 md:py-4">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Search Field - Full width on mobile, 5/12 on desktop */}
          <div className="w-full md:w-5/12 mb-2 md:mb-0">
            <div className="flex items-center bg-white rounded-md">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-1 md:py-2 px-2 md:px-3 text-sm md:text-base text-gray-800 placeholder-gray-400 focus:outline-none rounded-l-md"
              />
              <button className="bg-white p-1 md:p-2 text-gray-800 rounded-r-md hover:bg-gray-100 transition-colors">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Navigation - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex md:w-7/12 justify-end">
            <nav className="flex items-center space-x-4 lg:space-x-6">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  ),
                  text: 'Free shipping over $199',
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  text: '30 days money back',
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  ),
                  text: '100% secure payment',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                  <span className="text-xs md:text-sm whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Toggle - Visible only on mobile */}
          <div className="md:hidden w-full flex justify-center mt-2">
            <div className="flex items-center space-x-4 overflow-x-auto py-1 px-2">
              {['Free Shipping', '30 Days Return', 'Secure Payment'].map(
                (text, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-primary-dark rounded-full px-3 py-1"
                  >
                    <span className="text-xs whitespace-nowrap">{text}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
