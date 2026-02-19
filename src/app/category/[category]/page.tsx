import TipCard from '@/components/TipCard';
import { ExpertTip } from '@/types';

// Mock tips data - replace with API call later
const ALL_TIPS: ExpertTip[] = [
  {
    id: '1',
    title: 'Top 10 Mobile Photography Tips for Beginners',
    description: 'Learn how to capture stunning photos using just your smartphone.',
    content: 'Full content here...',
    category: 'Mobile',
    subcategory: 'Photography',
    author: {
      id: 'user-1',
      email: 'expert@example.com',
      name: 'Sarah Tech',
      avatar: '👩‍💼',
      socialProvider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=400&h=300&fit=crop',
    rating: 4.8,
    views: 1250,
    shares: 45,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['photography', 'mobile', 'beginner'],
  },
  {
    id: '7',
    title: 'Essential Android Tips & Tricks',
    description: 'Master your Android phone with these hidden features and shortcuts.',
    content: 'Full content...',
    category: 'Mobile',
    subcategory: 'Android',
    author: {
      id: 'user-7',
      email: 'android@example.com',
      name: 'Alex Mobile',
      avatar: '👨‍💻',
      socialProvider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1512941691920-25bda036cbff?w=400&h=300&fit=crop',
    rating: 4.7,
    views: 2100,
    shares: 67,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['android', 'mobile', 'tips'],
  },
  {
    id: '2',
    title: 'Korean Skincare Routine: 7-Step Method Explained',
    description: 'Master the famous Korean skincare routine that celebrities swear by.',
    content: 'Full content here...',
    category: 'Skincare',
    subcategory: 'Korean Beauty',
    author: {
      id: 'user-2',
      email: 'beauty@example.com',
      name: 'Emma Beauty',
      avatar: '👩‍🎓',
      socialProvider: 'facebook',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop',
    rating: 4.9,
    views: 2150,
    shares: 87,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['skincare', 'korean', 'beauty'],
  },
  {
    id: '8',
    title: 'Natural Skincare for Oily Skin',
    description: 'Control excess oil and achieve a matte glow naturally.',
    content: 'Full content...',
    category: 'Skincare',
    subcategory: 'Oily Skin',
    author: {
      id: 'user-8',
      email: 'skincare@example.com',
      name: 'Dr. Beauty',
      avatar: '👨‍⚕️',
      socialProvider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop',
    rating: 4.6,
    views: 1890,
    shares: 45,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['skincare', 'oily-skin', 'natural'],
  },
  {
    id: '3',
    title: 'Best Wellness Practices for Remote Workers',
    description: 'Stay healthy and energized while working from home.',
    content: 'Full content here...',
    category: 'Wellness',
    subcategory: 'Work-Life Balance',
    author: {
      id: 'user-3',
      email: 'wellness@example.com',
      name: 'Dr. Health',
      avatar: '👨‍⚕️',
      socialProvider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
    rating: 4.7,
    views: 1890,
    shares: 65,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['wellness', 'health', 'remote-work'],
  },
  {
    id: '9',
    title: 'Morning Yoga Routine for Flexibility',
    description: 'Start your day with these simple yoga poses.',
    content: 'Full content...',
    category: 'Wellness',
    subcategory: 'Yoga',
    author: {
      id: 'user-9',
      email: 'yoga@example.com',
      name: 'Yoga Master',
      avatar: '🧘‍♀️',
      socialProvider: 'facebook',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
    rating: 4.8,
    views: 2340,
    shares: 78,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['wellness', 'yoga', 'flexibility'],
  },
  {
    id: '4',
    title: 'TV Buying Guide 2026: 4K vs 8K Comparison',
    description: 'Complete guide to choosing the right TV.',
    content: 'Full content here...',
    category: 'TV',
    subcategory: 'Buying Guide',
    author: {
      id: 'user-4',
      email: 'tech@example.com',
      name: 'Mike Tech',
      avatar: '👨‍💻',
      socialProvider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop',
    rating: 4.6,
    views: 3200,
    shares: 120,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['tv', 'electronics', 'buying-guide'],
  },
  {
    id: '10',
    title: 'Best Streaming Services for Different Budgets',
    description: 'Compare popular streaming platforms and choose the best for you.',
    content: 'Full content...',
    category: 'TV',
    subcategory: 'Streaming',
    author: {
      id: 'user-10',
      email: 'streaming@example.com',
      name: 'Stream Expert',
      avatar: '🎬',
      socialProvider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop',
    rating: 4.7,
    views: 2890,
    shares: 102,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['tv', 'streaming', 'comparison'],
  },
  {
    id: '5',
    title: 'Hair Care for Curly Hair: Complete Routine',
    description: 'Say goodbye to frizz! Learn the secrets to nourishing and defining your natural curls.',
    content: 'Full content here...',
    category: 'Hair Care',
    subcategory: 'Curly Hair',
    author: {
      id: 'user-5',
      email: 'haircare@example.com',
      name: 'Jessica Curl',
      avatar: '👩‍🦱',
      socialProvider: 'facebook',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeae34c1e9?w=400&h=300&fit=crop',
    rating: 4.8,
    views: 2670,
    shares: 98,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['hair', 'curly-hair', 'beauty'],
  },
  {
    id: '11',
    title: 'Hair Growth Tips: Complete Guide',
    description: 'Achieve longer, stronger hair with proven methods.',
    content: 'Full content...',
    category: 'Hair Care',
    subcategory: 'Hair Growth',
    author: {
      id: 'user-11',
      email: 'hairgrowth@example.com',
      name: 'Hair Expert',
      avatar: '💇‍♀️',
      socialProvider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeae34c1e9?w=400&h=300&fit=crop',
    rating: 4.7,
    views: 2100,
    shares: 76,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['hair', 'growth', 'beauty'],
  },
  {
    id: '6',
    title: 'Makeup for Beginners: Natural Everyday Look',
    description: 'Learn to create a fresh, natural makeup look perfect for everyday wear.',
    content: 'Full content here...',
    category: 'Makeup',
    subcategory: 'Natural Look',
    author: {
      id: 'user-6',
      email: 'makeup@example.com',
      name: 'Lisa Glow',
      avatar: '👩‍🎨',
      socialProvider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    rating: 4.9,
    views: 3890,
    shares: 156,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['makeup', 'beauty', 'beginner'],
  },
  {
    id: '12',
    title: 'Contouring Techniques for Beginners',
    description: 'Master the art of contouring to enhance your features.',
    content: 'Full content...',
    category: 'Makeup',
    subcategory: 'Contouring',
    author: {
      id: 'user-12',
      email: 'contouring@example.com',
      name: 'Makeup Artist',
      avatar: '💄',
      socialProvider: 'facebook',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    rating: 4.8,
    views: 3120,
    shares: 134,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['makeup', 'contouring', 'techniques'],
  },
  {
    id: '13',
    title: 'Smartphone Buying Guide 2026',
    description: 'Find the perfect phone for your needs and budget.',
    content: 'Full content...',
    category: 'Electronics',
    subcategory: 'Smartphones',
    author: {
      id: 'user-13',
      email: 'electronics@example.com',
      name: 'Tech Reviewer',
      avatar: '📱',
      socialProvider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1511707267537-b85cb00c7b67?w=400&h=300&fit=crop',
    rating: 4.7,
    views: 4210,
    shares: 189,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['electronics', 'phones', 'buying-guide'],
  },
  {
    id: '14',
    title: 'Best Budget Gadgets Under $100',
    description: 'Great tech gadgets that won\'t break the bank.',
    content: 'Full content...',
    category: 'Electronics',
    subcategory: 'Gadgets',
    author: {
      id: 'user-14',
      email: 'gadgets@example.com',
      name: 'Gadget Guru',
      avatar: '🔌',
      socialProvider: 'facebook',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    rating: 4.6,
    views: 3560,
    shares: 145,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['electronics', 'gadgets', 'budget'],
  },
];

// Category display names and plurals
const CATEGORY_NAMES: { [key: string]: string } = {
  'mobile': 'Mobile',
  'tv': 'TV',
  'electronics': 'Electronics',
  'skincare': 'Skincare',
  'hair-care': 'Hair Care',
  'makeup': 'Makeup',
  'wellness': 'Wellness',
};

const CATEGORY_ICONS: { [key: string]: string } = {
  'mobile': '📱',
  'tv': '📺',
  'electronics': '🖥️',
  'skincare': '💆',
  'hair-care': '💇',
  'makeup': '💄',
  'wellness': '🧘',
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = CATEGORY_NAMES[params.category];
  const categoryIcon = CATEGORY_ICONS[params.category];
  
  // Filter tips by category (normalize the comparison)
  const filteredTips = ALL_TIPS.filter(
    tip => tip.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (!categoryName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 text-lg">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{categoryIcon}</span>
            <h1 className="text-4xl font-bold">{categoryName}</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Explore expert tips and tutorials in {categoryName.toLowerCase()}. Learn from industry experts and discover valuable insights.
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredTips.length} tips found in {categoryName}
            </h2>
          </div>

          {filteredTips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTips.map((tip) => (
                <TipCard key={tip.id} tip={tip} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No tips found in this category yet.</p>
              <p className="text-gray-500">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have an Expert Tip to Share?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Share your {categoryName.toLowerCase()} expertise with our growing community.
          </p>
          <button className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Submit Your Tip
          </button>
        </div>
      </section>
    </>
  );
}
