import Image from 'next/image';

import SocialCard from './SocialCard';

const BuyAdsCard = () => {
  return (
    <div className="overlay-2 relative flex h-224 w-full items-center justify-center rounded-xl bg-white bg-left py-7 px-5 lg:w-1/2 lg:p-4">
      <div className="max-w-xs text-center text-2xl font-bold text-primary-dark">
        <span>Join our community of energy enthusiasts today</span>
        <div className="scale-125">
          <SocialCard follow={false} />
        </div>
      </div>
    </div>
  );
};

export default BuyAdsCard;
