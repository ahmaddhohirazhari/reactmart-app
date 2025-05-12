import React, { useState } from 'react';

const HeaderTop = () => {
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  // Dummy data
  const currencies = ['USD', 'IDR', 'EUR', 'GBP'];
  const languages = ['ENG', 'ID', 'ES', 'FR'];

  return (
    <header className="h-16 p-4 bg-white ">
      {/* Top Bar */}
      <div className="h-12 flex items-center justify-between">
        {/* Contact Info */}
        <div className="flex items-center gap-4 h-[30px]">
          <button className="bg-secondary-100 hover:bg-secondary-200 px-3 py-1 rounded-md transition-colors duration-200">
            <span className="text-secondary-900 font-medium">Hotline 24/7</span>
          </button>
          <span className="text-secondary-900 font-medium">
            (025) 3886 25 16
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-4">
            <li className="text-secondary-900 hover:text-primary-500 transition-colors duration-200">
              <a href="#" className="font-medium">
                Sell on Swoo
              </a>
            </li>
            <li className="text-secondary-900 hover:text-primary-500 transition-colors duration-200">
              <a href="#" className="font-medium">
                Order Tracking
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4 relative">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-secondary-900 font-medium"
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              >
                {selectedCurrency}
                <svg
                  className="w-4 h-4"
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
              {showCurrencyDropdown && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-10">
                  {currencies.map((currency) => (
                    <div
                      key={currency}
                      className="px-4 py-2 hover:bg-secondary-50 cursor-pointer"
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setShowCurrencyDropdown(false);
                      }}
                    >
                      {currency}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <span className="text-secondary-300">|</span>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-secondary-900 font-medium"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                {selectedLanguage}
                <svg
                  className="w-4 h-4"
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
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-10">
                  {languages.map((language) => (
                    <div
                      key={language}
                      className="px-4 py-2 hover:bg-secondary-50 cursor-pointer"
                      onClick={() => {
                        setSelectedLanguage(language);
                        setShowLanguageDropdown(false);
                      }}
                    >
                      {language}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderTop;
