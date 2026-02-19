import TipCard from '@/components/TipCard';
import { ALL_TIPS } from '@/lib/tips-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const displayName = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${displayName} Tips - Expert Tips`,
    description: `Discover expert tips and advice for ${displayName}. Get the best tutorials and recommendations.`,
  };
}

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

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryName = CATEGORY_NAMES[category];
  const categoryIcon = CATEGORY_ICONS[category];
  
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
