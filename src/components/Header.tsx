'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { data: session } = useSession();

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
        
        {/* Auth Buttons / User Profile */}
        <div className="flex gap-2 items-center">
          {session?.user ? (
            // User Profile with Dropdown
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="text-gray-700 font-medium hidden md:inline">
                  {session.user.name?.split(' ')[0]}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-600 transition ${isProfileOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    👤 My Profile
                  </Link>
                  <Link
                    href="/my-tips"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    📝 My Tips
                  </Link>
                  <Link
                    href="/saved"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    ❤️ Saved Tips
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: '/' });
                      setIsProfileOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  >
                    🚪 Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Login and Sign Up Buttons
            <>
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
            </>
          )}
          
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
            {session?.user ? (
              <>
                <hr className="my-2" />
                <Link 
                  href="/profile" 
                  className="block text-gray-700 hover:text-blue-600 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  👤 My Profile
                </Link>
                <Link 
                  href="/my-tips" 
                  className="block text-gray-700 hover:text-blue-600 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📝 My Tips
                </Link>
                <hr className="my-2" />
                <button
                  onClick={() => {
                    signOut({ callbackUrl: '/' });
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-red-600 hover:text-red-700 transition py-2"
                >
                  🚪 Sign Out
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
}
