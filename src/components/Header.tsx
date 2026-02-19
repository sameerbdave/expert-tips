import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Expert Tips
        </Link>
        
        <div className="hidden md:flex gap-6">
          <Link href="/category" className="text-gray-700 hover:text-blue-600 transition">
            Categories
          </Link>
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Explore
          </Link>
        </div>
        
        <div className="flex gap-2">
          <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
