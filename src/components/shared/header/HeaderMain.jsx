import React, { useState, useRef, useEffect } from 'react';

const HeaderMain = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Dummy data
  const navItems = [
    { name: 'Home', dropdown: ['Home 1', 'Home 2', 'Home 3'] },
    { name: 'Pages', dropdown: ['About Us', 'Contact', 'FAQ'] },
    { name: 'Products', dropdown: ['Category 1', 'Category 2', 'Category 3'] },
  ];

  const cartItems = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 15.99 },
  ];

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white h-16 md:h-20 px-4 shadow-sm relative">
      <div className="h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Burger Button */}
          <div className="flex items-center">
            <button
              className="md:hidden mr-3 text-black focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>

            <div className="flex items-center">
              <div className="rounded-full bg-secondary md:mr-4 lg:mr-8">
                <img
                  src="/logo.png"
                  alt="Brand Logo"
                  className="h-8 w-auto md:h-10 lg:h-12"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/48?text=Logo';
                  }}
                />
              </div>
              <h1 className="text-primary text-sm md:text-base lg:text-lg font-bold ml-2 md:ml-3 lg:ml-4">
                Ekomercy
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 md:ms-12 lg:ms-24 me-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center text-black font-medium hover:text-primary transition-colors text-sm md:text-base"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-40 md:w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-gray-800 hover:bg-primary-50 hover:text-primary-500"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#"
              className="font-medium text-black hover:text-primary transition-colors text-sm md:text-base"
            >
              Contact
            </a>
          </div>

          {/* Icons and User Area */}
          <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6">
            {/* Inbox Icon*/}
            <button className="p-1 md:p-2 relative group">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-[10px] md:text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                3
              </span>
            </button>

            {/* Notification Icon */}
            <button className="p-2 relative group">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-[10px] md:text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                5
              </span>
            </button>

            {/* User Avatar / Login Register */}
            <div className="relative">
              {isLoggedIn ? (
                <button
                  className="flex items-center space-x-1 md:space-x-2 group"
                  onClick={() => toggleDropdown('user')}
                >
                  <img
                    src="/avatar-placeholder.jpg"
                    alt="User"
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full border border-black group-hover:border-primary transition-colors"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/32?text=U';
                    }}
                  />
                </button>
              ) : (
                <button
                  className="flex flex-col items-start group"
                  onClick={() => toggleDropdown('auth')}
                >
                  <span className="text-xs md:text-sm font-light text-black group-hover:text-primary transition-colors">
                    Welcome
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-black group-hover:text-primary transition-colors">
                    Login | Register
                  </span>
                </button>
              )}
            </div>

            {/* Cart with Dropdown */}
            <div className="relative">
              <button
                className="p-2 relative group"
                onClick={() => toggleDropdown('cart')}
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-[10px] md:text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {cartItems.length}
                </span>
              </button>

              {/* Cart dropdown remains the same */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-20 p-4 border-t border-gray-200"
        >
          {navItems.map((item) => (
            <div key={item.name} className="mb-3">
              <button
                className="flex items-center justify-between w-full text-black font-medium py-1.5 text-sm"
                onClick={() => toggleDropdown(item.name)}
              >
                <span>{item.name}</span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      activeDropdown === item.name
                        ? 'M5 15l7-7 7 7'
                        : 'M19 9l-7 7-7-7'
                    }
                  />
                </svg>
              </button>

              {activeDropdown === item.name && (
                <div className="pl-3 mt-1 space-y-1.5">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block py-1 text-gray-700 hover:text-primary text-xs"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#"
            className="block py-1.5 text-black font-medium hover:text-primary text-sm"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default HeaderMain;
