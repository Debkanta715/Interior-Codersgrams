import React, { useState } from "react";

const Header = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const navItems = [
    {
      name: "Kitchens",
      hasDropdown: true,
    },
    {
      name: "Design Ideas",
      hasDropdown: true,
    },
    {
      name: "Cities",
      hasDropdown: true,
    },
    {
      name: "Trends",
      hasDropdown: true,
    },
    {
      name: "Guides",
      hasDropdown: true,
    },
    {
      name: "Price Calculators",
      hasDropdown: true,
    },
    {
      name: "Our Portfolio",
      hasDropdown: false,
      badge: "NEW",
    },
    {
      name: "More",
      hasDropdown: true,
    },
  ];

  const mobileNavItems = [
    {
      name: "Home",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: "Design Ideas",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      name: "Let's Talk",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
          <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a.997.997 0 00-.086-1.391l-4.064-3.696z"/>
        </svg>
      ),
      isCenter: true,
    },
    {
      name: "Portfolio",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "More",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      onClick: () => setIsMoreMenuOpen(true),
    },
  ];

  const moreMenuItems = [
    { name: "Login/Register", hasArrow: false },
    { name: "Design Ideas", hasArrow: true },
    { name: "Cities", hasArrow: true },
    { name: "Guides", hasArrow: true },
    { name: "Price Calculators", hasArrow: true },
    { name: "Modular Kitchen", hasArrow: true },
    { name: "Commercial Interiors", hasArrow: false },
    { name: "Trends", hasArrow: false },
    { name: "Refer And Earn", hasArrow: false, highlight: true },
    { name: "Contact Us", hasArrow: false },
    { name: "Careers", hasArrow: false },
  ];

  return (
    <>
    {/* Header for Large Screen */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-2 md:px-4 h-16 max-w-full">
          <div className="p-2 shrink-0">
            <img
              src="interiorLogo.svg"
              className="w-22 h-10"
              alt="interiorLogo"
            />
          </div>
          <div className="md:block hidden flex-1 ml- overflow-x-auto hide-scrollbar">
            <ul className="flex gap-4 ml-5 items-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-sm font-medium text-gray-700 hover:text-[#eb5976] cursor-pointer flex items-center gap-1"
                >
                  <a href="#">{item.name}</a>{" "}
                  {item.hasDropdown ? (
                    <i className="fa-solid fa-angle-down text-xs text-gray-500"></i>
                  ) : (
                    <span className="px-1 py-0.5 text-[10px] text-white bg-[#eb5976] rounded-xs font-semibold">
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="bg-linear-to-r from-white-600 to-pink-200 py-1 px-1 border-2 border-pink-200 border-dashed rounded-xs flex items-center gap-1 cursor-pointer">
              <img src="storeIcon.gif" alt="storeIcon" className="w-6 h-6" />
              <span className="md:block hidden text-xs font-semibold text-gray-700 hover:text-[#eb5976]">
                STORE
              </span>
            </div>
            <div className="cursor-pointer hover:opacity-90 transition-opacity">
              <div className="bg-[#1c2f59] p-2 rounded-xs relative">
                <img src="ai_Icon.svg" alt="ai_Icon" className="w-5 h-5" />
                <div className="bg-amber-500 text-white text-[6px] font-bold px-1 rounded-lg absolute top-7 left-1">
                  FREE
                </div>
              </div>
            </div>
            <div className="bg-[#1c2f59] text-white md:px-4 md:py-2.5 px-2 py-2 rounded-xs cursor-pointer">
              <p className="text-xs font-medium">Get Free Estimate</p>
            </div>
            <div className="cursor-pointer md:block hidden">
              <img
                src="loginAvatar.svg"
                alt="userImg"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="flex items-center justify-around px-2 py-2">
          {mobileNavItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center cursor-pointer ${
                item.isCenter ? 'relative -mt-6' : ''
              }`}
              onClick={item.onClick}
            >
              {item.isCenter ? (
                <div className="bg-[#eb5976] text-white p-3 rounded-full shadow-lg hover:bg-[#d94d69] transition-colors">
                  {item.icon}
                </div>
              ) : (
                <>
                  <div className="text-gray-600 hover:text-[#eb5976] transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs text-gray-600 mt-1 font-medium">
                    {item.name}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* More Menu Section */}
      {isMoreMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMoreMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="md:hidden fixed top-0 left-0 right-0 bottom-16 bg-gray-50 z-50 overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMoreMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="bg-white">
              {moreMenuItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between px-4 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                    item.highlight ? 'bg-pink-50' : ''
                  }`}
                >
                  <span className={`text-sm ${item.highlight ? 'text-[#eb5976] font-medium' : 'text-gray-700'}`}>
                    {item.name}
                  </span>
                  {item.hasArrow && (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;