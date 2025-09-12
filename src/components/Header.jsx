import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white w-full h-24">
        <div className="w-full border-b border-gray-200 h-full">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/src/assets/logo/Foodieland..png" 
                alt="Foodieland Logo" 
                className="w-[110px] h-[30px] object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex space-x-8">
              <a 
                href="#home" 
                className="font-inter text-base font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 px-3 py-2 transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#recipes" 
                className="font-inter text-base font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 px-3 py-2 transition-colors duration-200"
              >
                Recipes
              </a>
              <a 
                href="#blog" 
                className="font-inter text-base font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 px-3 py-2 transition-colors duration-200"
              >
                Blog
              </a>
              <a 
                href="#contact" 
                className="font-inter text-base font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 px-3 py-2 transition-colors duration-200"
              >
                Contact
              </a>
              <a 
                href="#about" 
                className="font-inter text-base font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 px-3 py-2 transition-colors duration-200"
              >
                About us
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-12">
              {/* Facebook */}
              <a 
                href="#" 
                className="text-gray-900 hover:text-orange-600 transition-colors duration-200"
              >
                <img 
                  src="/src/assets/icons/001-facebook.png" 
                  alt="Facebook" 
                  className="w-[9.92px] h-[19.84px] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-lg" style={{display: 'none'}}>f</span>
              </a>

              {/* Twitter */}
              <a 
                href="#" 
                className="text-gray-900 hover:text-orange-600 transition-colors duration-200"
              >
                <img 
                  src="/src/assets/icons/003-twitter.png" 
                  alt="Twitter" 
                  className="w-[22px] h-[17.88px] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-lg" style={{display: 'none'}}>🐦</span>
              </a>

              {/* Instagram */}
              <a 
                href="#" 
                className="text-gray-900 hover:text-orange-600 transition-colors duration-200"
              >
                <img 
                  src="/src/assets/icons/004-instagram.png" 
                  alt="Instagram" 
                  className="w-[22px] h-[22px] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-lg" style={{display: 'none'}}>📷</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-900 hover:text-orange-600 transition-colors duration-200"
              >
                <img 
                  src="/src/assets/icons/menu.svg" 
                  alt="Menu" 
                  className="h-6 w-6"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-2xl" style={{display: 'none'}}>☰</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation - Outside header */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex justify-between items-center px-4 h-24 border-b border-gray-200">
              <div className="flex items-center">
                <img 
                  src="/src/assets/logo/Foodieland..png" 
                  alt="Foodieland Logo" 
                  className="w-[110px] h-[30px] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-2xl font-lobster text-gray-900 ml-2" style={{display: 'none'}}>
                  Foodieland.
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-900 hover:text-orange-600 transition-colors duration-200"
              >
                <span className="text-2xl">✕</span>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 px-4 pt-8 flex flex-col justify-start">
              <nav className="space-y-4 text-center">
                <a 
                  href="#home" 
                  className="font-inter text-lg font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#recipes" 
                  className="font-inter text-lg font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recipes
                </a>
                <a 
                  href="#blog" 
                  className="font-inter text-lg font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
                <a 
                  href="#contact" 
                  className="font-inter text-lg font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="#about" 
                  className="font-inter text-lg font-medium tracking-[-0.02em] text-gray-900 hover:text-orange-600 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </a>
              </nav>

              {/* Mobile Social Media Icons */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-center space-x-6">
                  <a 
                    href="#" 
                    className="text-gray-900 hover:text-orange-600 transition-colors duration-200"
                  >
                    <img 
                      src="/src/assets/icons/001-facebook.png" 
                      alt="Facebook" 
                      className="w-[9.92px] h-[19.84px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-lg" style={{display: 'none'}}>f</span>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-900 hover:text-orange-600 transition-colors duration-200"
                  >
                    <img 
                      src="/src/assets/icons/003-twitter.png" 
                      alt="Twitter" 
                      className="w-[22px] h-[17.88px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-lg" style={{display: 'none'}}>🐦</span>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-900 hover:text-orange-600 transition-colors duration-200"
                  >
                    <img 
                      src="/src/assets/icons/004-instagram.png" 
                      alt="Instagram" 
                      className="w-[22px] h-[22px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-lg" style={{display: 'none'}}>📷</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
