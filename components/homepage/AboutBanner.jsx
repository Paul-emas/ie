import Image from 'next/image';

const AboutBanner = () => {
  return (
    <div className="home-banner relative mb-40 flex w-full items-end bg-white sm:overflow-hidden lg:mb-0 lg:h-[800px] xl:mb-0">
      <div className="absolute h-full w-full overflow-hidden">
        <Image
          src="/images/banners/banner-5.webp"
          layout="fill"
          objectFit="cover"
          className="banner-image"
          priority
        />
      </div>
      <div className="container relative top-28 z-20 mx-auto px-4 sm:top-2 2xl:px-16">
        <div className="smpt-10 ml-auto w-full rounded-xl bg-primary-base px-6 py-5 sm:w-446 sm:rounded-t-xl sm:pb-16 lg:px-10 lg:py-10">
          <div className="max-w-md text-lg font-bold leading-snug text-white sm:text-3xl">
            Enjoy those family moments with uninterrupted supply
          </div>
          <p className="mt-2 text-xs text-gray-300 lg:text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
