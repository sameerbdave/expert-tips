'use client';

import { useState } from 'react';

interface TipActionsProps {
  tipId: string;
  initialLikes?: number;
  initialShares?: number;
}

export default function TipActions({ tipId, initialLikes = 0, initialShares = 0 }: TipActionsProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [shares, setShares] = useState(initialShares);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = async (platform: string) => {
    setShares(shares + 1);

    // Simulate sharing (replace with actual share logic)
    const shareText = `Check out this amazing expert tip!`;
    const shareUrl = `${typeof window !== 'undefined' ? window.location.href : ''}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Expert Tips',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const urls: { [key: string]: string } = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      };

      if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400');
      }
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium ${
              isLiked
                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span className="text-lg">{isLiked ? '❤️' : '🤍'}</span>
            <span>{likes} Like{likes !== 1 ? 's' : ''}</span>
          </button>
          <div className="text-gray-600 font-medium">
            📤 {shares} Share{shares !== 1 ? 's' : ''}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-600 text-sm">Share on:</span>
          <button
            onClick={() => handleShare('twitter')}
            className="p-2 text-gray-600 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition"
            title="Share on Twitter"
          >
            𝕏
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
            title="Share on Facebook"
          >
            f
          </button>
          <button
            onClick={() => handleShare('whatsapp')}
            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition"
            title="Share on WhatsApp"
          >
            💬
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '');
              alert('Link copied to clipboard!');
            }}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition"
            title="Copy link"
          >
            🔗
          </button>
        </div>
      </div>
    </div>
  );
}
