import Image from 'next/image';

const HomeBanners = () => {
  return (
    <div className="home-banner relative flex h-60 w-full items-end bg-white sm:overflow-hidden lg:h-[800px] xl:mb-0">
      <Image
        src="/images/banners/banner-2.webp"
        blurDataURL="/images/banners/banner-2.webp"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        className="banner-image"
        priority
      />
      {/* <div className="container relative top-28 z-20 mx-auto px-4 sm:top-2 2xl:px-14">
        <div className="smpt-10 overlay w-full rounded-xl bg-primary-base px-10 py-8 sm:w-446 sm:rounded-t-xl sm:pb-16">
          <div className="max-w-md text-lg font-bold leading-snug text-white sm:text-3xl">
            Service that is a step ahead
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Get the most value with features that allows you to track & manage your electricity bill
            payments
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HomeBanners;
