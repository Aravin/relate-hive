'use client';

import React, { useState } from 'react';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-4xl text-red-500">
          <span>Relat</span><span className="text-green-500">Hive</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <>
              <li>
                <Link
                  href="/dashboard"
                  className={`btn btn-ghost font-bold text-gray-600 ${
                    pathname === '/dashboard' ? 'btn-active' : ''
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              {/* User Dropdown for Desktop */}
              <li className="relative">
                <button onClick={toggleDropdown} className="btn btn-ghost">
                  <div className="flex items-center">
                    <UserCircleIcon className="h-5 w-5 mr-2" />
                    User Name
                    <ChevronDownIcon className="h-4 w-4 ml-1" />
                  </div>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute right-0 mt-2 py-2 w-48 bg-base-100 border rounded-md shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                      >
                        <Cog6ToothIcon className="h-5 w-5 mr-2" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
                      >
                        <ArrowRightStartOnRectangleIcon className="h-5 w-5 mr-2" />
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/"
                  className={`btn btn-ghost font-bold text-gray-600 ${
                    pathname === '/' ? 'btn-active' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`btn btn-ghost font-bold text-gray-600 ${
                    pathname === '/about' ? 'btn-active' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`btn btn-ghost font-bold text-gray-600 ${
                    pathname === '/contact' ? 'btn-active' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
              {/* Login Button (Visible only on desktop) */}
              <li className="hidden md:block">
                <button
                  onClick={handleLogin}
                  className="btn btn-ghost font-bold text-gray-600"
                >
                  <ArrowRightEndOnRectangleIcon className="h-5 w-5 mr-2" />
                  Login
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation Dropdown */}
        <ul
          className={`md:hidden absolute top-16 right-4 bg-white py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          {/* Duplicate the navigation links here for mobile */}
          {isLoggedIn ? (
            <>
              <li>
                <Link
                  href="/dashboard"
                  className={`btn btn-ghost font-bold text-gray-600 ${
                    pathname === '/dashboard' ? 'btn-active' : ''
                  }`}
                >
                  Dashboard
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/"
                  className={`btn btn-ghost font-bold text-gray-600 ${
                    pathname === '/' ? 'btn-active' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`btn btn-ghost font-bold text-gray-600 ${
                    pathname === '/about' ? 'btn-active' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`btn btn-ghost font-bold text-gray-600 ${
                    pathname === '/contact' ? 'btn-active' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
            </>
          )}
          {/* User dropdown (adjust for mobile if needed) */}
          {isLoggedIn ? (
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="btn btn-ghost w-full text-left"
              >
                {/* Adjusted for mobile */}
                <div className="flex items-center">
                  <UserCircleIcon className="h-5 w-5 mr-2" />
                  User Name
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </div>
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 py-2 w-48 bg-base-100 border rounded-md shadow-lg">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <Cog6ToothIcon className="h-5 w-5 mr-2" />
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
                    >
                      <ArrowRightStartOnRectangleIcon className="h-5 w-5 mr-2" />
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogin}
                className="btn btn-ghost w-full text-left"
              >
                {/* Adjusted for mobile */}
                <ArrowRightEndOnRectangleIcon className="h-5 w-5 mr-2" />
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
