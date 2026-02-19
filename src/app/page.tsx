import CategoryGrid from '@/components/CategoryGrid';
import TipCard from '@/components/TipCard';
import { ExpertTip } from '@/types';

// Mock featured tips data - replace with API call later
const FEATURED_TIPS: ExpertTip[] = [
  {
    id: '1',
    title: 'Top 10 Mobile Photography Tips for Beginners',
    description: 'Learn how to capture stunning photos using just your smartphone. Professional-looking results without expensive equipment.',
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
    id: '2',
    title: 'Korean Skincare Routine: 7-Step Method Explained',
    description: 'Master the famous Korean skincare routine that celebrities swear by. Clear, glowing skin in just 7 steps.',
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
    id: '3',
    title: 'Best Wellness Practices for Remote Workers',
    description: 'Stay healthy and energized while working from home. Simple exercises, nutrition tips, and mental wellness strategies.',
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
    id: '4',
    title: 'TV Buying Guide 2026: 4K vs 8K Comparison',
    description: 'Complete guide to choosing the right TV. Understand the difference between 4K, 8K, and which one fits your needs.',
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
    id: '5',
    title: 'Hair Care for Curly Hair: Complete Routine',
    description: 'Say goodbye to frizz! Learn the secrets to nourishing and defining your natural curls with this comprehensive guide.',
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
    id: '6',
    title: 'Makeup for Beginners: Natural Everyday Look',
    description: 'Learn to create a fresh, natural makeup look perfect for everyday wear. Expert tips for a flawless finish.',
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
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Share Knowledge. Get Inspired.</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover expert tips and tutorials on Mobile, TV, Electronics, Skincare, Hair Care, Makeup, and Wellness. Learn from experts, share your knowledge, and grow together.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              Explore Tips
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Share Your Tip
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Browse Categories</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Tips</h2>
          <p className="text-gray-600 mb-12">Check out the most popular expert tips from our community</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {FEATURED_TIPS.map((tip) => (
              <TipCard key={tip.id} tip={tip} />
            ))}
          </div>

          <div className="text-center">
            <button className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              View All Tips →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Expert Community</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Share your expertise, help others, and discover amazing tips from experts worldwide. No registration required—just login with Google or Facebook!
          </p>
          <button className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Get Started Now
          </button>
        </div>
      </section>
    </>
  );
}
