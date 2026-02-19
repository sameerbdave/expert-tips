import Link from 'next/link';
import { ExpertTip } from '@/types';

interface TipCardProps {
  tip: ExpertTip;
}

export default function TipCard({ tip }: TipCardProps) {
  return (
    <Link href={`/tips/${tip.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer">
        {tip.imageUrl && (
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img 
              src={tip.imageUrl} 
              alt={tip.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded">
              {tip.category}
            </span>
            {tip.subcategory && (
              <span className="text-xs text-gray-500">{tip.subcategory}</span>
            )}
          </div>
          
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
            {tip.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {tip.description}
          </p>
          
          <div className="flex items-center justify-between text-gray-500 text-sm">
            <div className="flex items-center gap-4">
              <span>👁️ {tip.views}</span>
              <span>❤️ {tip.rating}</span>
            </div>
            <span>By {tip.author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
