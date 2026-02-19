import TipActions from '@/components/TipActions';
import CommentSection from '@/components/CommentSection';
import TipCard from '@/components/TipCard';
import { ALL_TIPS } from '@/lib/tips-data';
];

interface TipPageProps {
  params: Promise<{ id: string }>;
}

export default async function TipPage({ params }: TipPageProps) {
  const { id } = await params;
  
  // Find the tip by ID
  const tip = ALL_TIPS.find(t => t.id === id);

  if (!tip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tip Not Found</h1>
          <p className="text-gray-600 text-lg mb-8">The tip you're looking for doesn't exist.</p>
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  // Get related tips from the same category
  const relatedTips = ALL_TIPS.filter(
    t => t.category === tip.category && t.id !== tip.id
  ).slice(0, 3);

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative h-96 bg-gray-900">
        {tip.imageUrl && (
          <img
            src={tip.imageUrl}
            alt={tip.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-4 pb-8 text-white w-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold">
                {tip.category}
              </span>
              {tip.subcategory && (
                <span className="text-gray-200 text-sm">{tip.subcategory}</span>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-4">{tip.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{tip.author.avatar}</span>
                <div>
                  <p className="font-semibold">{tip.author.name}</p>
                  <p className="text-gray-300 text-sm">
                    {new Date(tip.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Stats */}
          <div className="flex gap-8 mb-12 text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <span>👁️</span>
              <span>{tip.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center gap-2">
              <span>❤️</span>
              <span>{tip.rating} rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📤</span>
              <span>{tip.shares} shares</span>
            </div>
          </div>

          {/* Actions */}
          <TipActions tipId={tip.id} initialLikes={Math.floor(tip.rating * 100)} initialShares={tip.shares} />

          {/* Content */}
          <div className="mt-12 prose prose-lg max-w-none">
            {tip.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {tip.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {tip.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <CommentSection tipId={tip.id} />
        </div>
      </section>

      {/* Related Tips */}
      {relatedTips.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Tips in {tip.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTips.map((relatedTip) => (
                <TipCard key={relatedTip.id} tip={relatedTip} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
