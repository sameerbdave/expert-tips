import Link from 'next/link';

const CATEGORIES = [
  { name: 'Mobile', icon: '📱', color: 'from-blue-500 to-blue-600' },
  { name: 'TV', icon: '📺', color: 'from-purple-500 to-purple-600' },
  { name: 'Electronics', icon: '🖥️', color: 'from-green-500 to-green-600' },
  { name: 'Skincare', icon: '💆', color: 'from-pink-500 to-pink-600' },
  { name: 'Hair Care', icon: '💇', color: 'from-orange-500 to-orange-600' },
  { name: 'Makeup', icon: '💄', color: 'from-red-500 to-red-600' },
  { name: 'Wellness', icon: '🧘', color: 'from-teal-500 to-teal-600' },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {CATEGORIES.map((category) => (
        <Link 
          key={category.name}
          href={`/category/${category.name.toLowerCase()}`}
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
