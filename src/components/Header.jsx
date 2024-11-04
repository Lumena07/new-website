// Header.jsx
import React, { useState } from 'react';
import { Calendar, ChevronDown, Menu, Search, User, X, Plane, FileText, CheckSquare, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/pictures/logo.png';

const Header = () => (
  <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
    <div className="max-w-[2000px] mx-auto px-6">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src={logo} alt="Auric Air Logo" className="h-10" />
          </Link>
          <nav className="hidden lg:flex space-x-8">
            <Link to="/destinations" className="text-gray-600 hover:text-gray-900 text-base">Destinations</Link>
            <Link to="/charter" className="text-gray-600 hover:text-gray-900 text-base">Charter Services</Link>
            <Link to="/safari" className="text-gray-600 hover:text-gray-900 text-base">Safari Packages</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 text-base">About Us</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hidden lg:flex items-center space-x-2 text-gray-600">
            <User size={20} />
            <span>My Account</span>
          </button>
          <button className="lg:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;