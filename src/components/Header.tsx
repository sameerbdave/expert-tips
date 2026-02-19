'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Expert Tips
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link href="/category/mobile" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Categories
          </Link>
          <Link href="/#featured" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Explore
          </Link>
        </div>
        
        {/* Auth Buttons */}
        <div className="flex gap-2 items-center">
          <Link
            href="/login"
            className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium"
          >
            Login
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Sign Up
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-2 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <Link 
              href="/category/mobile" 
              className="block text-gray-700 hover:text-blue-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              href="/#featured" 
              className="block text-gray-700 hover:text-blue-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
