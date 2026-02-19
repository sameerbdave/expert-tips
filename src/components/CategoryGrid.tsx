import Link from 'next/link';

const CATEGORIES = [
  { name: 'Mobile', slug: 'mobile', icon: '📱', color: 'from-blue-500 to-blue-600' },
  { name: 'TV', slug: 'tv', icon: '📺', color: 'from-purple-500 to-purple-600' },
  { name: 'Electronics', slug: 'electronics', icon: '🖥️', color: 'from-green-500 to-green-600' },
  { name: 'Skincare', slug: 'skincare', icon: '💆', color: 'from-pink-500 to-pink-600' },
  { name: 'Hair Care', slug: 'hair-care', icon: '💇', color: 'from-orange-500 to-orange-600' },
  { name: 'Makeup', slug: 'makeup', icon: '💄', color: 'from-red-500 to-red-600' },
  { name: 'Wellness', slug: 'wellness', icon: '🧘', color: 'from-teal-500 to-teal-600' },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {CATEGORIES.map((category) => (
        <Link 
          key={category.slug}
          href={`/category/${category.slug}`}
        >
          <div className={`bg-gradient-to-br ${category.color} rounded-lg p-6 hover:shadow-lg transition cursor-pointer text-center`}>
            <div className="text-3xl mb-2">{category.icon}</div>
            <h3 className="text-white font-semibold text-sm">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
