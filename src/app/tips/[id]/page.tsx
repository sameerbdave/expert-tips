import TipActions from '@/components/TipActions';
import CommentSection from '@/components/CommentSection';
import TipCard from '@/components/TipCard';
import { ExpertTip } from '@/types';

// Mock tips data - same as category page
const ALL_TIPS: ExpertTip[] = [
  {
    id: '1',
    title: 'Top 10 Mobile Photography Tips for Beginners',
    description: 'Learn how to capture stunning photos using just your smartphone.',
    content: `Photography with your smartphone is easier than ever! Here are the top 10 tips to get you started:

1. **Clean Your Lens**: Before every shot, wipe your phone's camera lens on your shirt or a clean cloth. You'd be surprised how much dust and fingerprints accumulate.

2. **Use Natural Light**: The golden hour (sunrise/sunset) provides the most flattering natural light. Avoid harsh midday sun and use shadows creatively.

3. **Master Composition**: Use the rule of thirds by enabling grid lines in your camera settings. Place subjects off-center for more engaging photos.

4. **Avoid Digital Zoom**: Instead of zooming digitally, move closer to your subject. Digital zoom reduces image quality significantly.

5. **Stabilize Your Phone**: Use a tripod, prop your phone against something sturdy, or use both hands to minimize camera shake.

6. **Play with Angles**: Don't just shoot from eye level. Try overhead shots, ground-level perspectives, or shooting through objects.

7. **Use Burst Mode**: For moving subjects, hold the shutter button to take multiple photos rapidly. You're likely to get at least one perfect shot.

8. **Clean Up Your Background**: An interesting background can make or break a photo. Move around to find cleaner, less distracting backgrounds.

9. **Edit After You Shoot**: Apps like Snapseed, Lightroom Mobile, or built-in editing tools can dramatically improve your photos. Don't overdo it though!

10. **Practice Consistently**: The best way to improve is to shoot every day. Experiment with different conditions, subjects, and styles.

Remember, the best camera is the one you have with you. A smartphone is incredibly powerful when used correctly!`,
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
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=800&h=400&fit=crop',
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
    description: 'Master the famous Korean skincare routine that celebrities swear by.',
    content: `The Korean skincare routine is famous for producing glowing, healthy skin. Here's the complete 7-step process:

Step 1: Oil Cleanser
Start with an oil-based cleanser to remove makeup, sunscreen, and oil-soluble impurities. Massage gently for about a minute.

Step 2: Water Cleanser
Follow with a gentle water-based cleanser to remove water-soluble dirt and residue from the oil cleanser.

Step 3: Exfoliate
Use a gentle chemical exfoliant (AHA/BHA) or physical scrub 2-3 times per week. This removes dead skin cells and reveals fresh skin.

Step 4: Toner
Apply toner to balance your skin's pH after cleansing. This prepares your skin for better absorption of subsequent products.

Step 5: Essence
Use an essence to hydrate and prepare your skin. Think of it as a lightweight serum that adds moisture.

Step 6: Serums/Treatments
Apply targeted treatments like vitamin C serums, hyaluronic acid, or brightening products based on your skin concerns.

Step 7: Moisturizer & SPF
Finish with a moisturizer suitable for your skin type. In the morning, always add a broad-spectrum SPF 30+.

Results appear over time! Most people notice improvements in skin texture and brightness within 2-3 weeks of consistent use.`,
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
    imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=400&fit=crop',
    rating: 4.9,
    views: 2150,
    shares: 87,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['skincare', 'korean', 'beauty'],
  },
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
