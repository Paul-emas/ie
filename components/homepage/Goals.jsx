import Image from 'next/image';

const Goals = () => {
  return (
    <div className="bg-white py-16 lg:py-36">
      <div className="mx-auto px-4 lg:px-14 xl:container">
        <h1 className="mx-auto text-center text-xl font-bold text-primary-dark sm:px-0 lg:max-w-4xl lg:px-10 lg:text-5xl xl:leading-tight">
          Our Priority SDGs
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-gray-500 lg:text-base">
          By facilitating access to affordable clean energy for residential and business clusters Instant Energy is
          promoting sustainable living within cities and communities using innovation to improve energy access through
          our digital platform.
        </p>
        <div className="mt-12 flex flex-wrap justify-center lg:mt-20 lg:space-x-10">
          <div className="mb-3 w-1/2 pr-2 lg:mb-0 lg:w-auto lg:pr-0">
            <Image
              src="/images/goal-1.png"
              blurDataURL="/images/goal-1.png"
              placeholder="blur"
              width={221}
              height={221}
              objectFit="cover"
            />
          </div>
          <div className="mb-3 w-1/2 pl-2 lg:mb-0 lg:w-auto  lg:pl-0">
            <Image
              src="/images/goal-2.png"
              blurDataURL="/images/goal-2.png"
              placeholder="blur"
              width={221}
              height={221}
              objectFit="cover"
            />
          </div>
          <div className="w-1/2 pr-2 lg:w-auto lg:pr-0">
            <Image
              src="/images/goal-3.png"
              blurDataURL="/images/goal-3.png"
              placeholder="blur"
              width={221}
              height={221}
              objectFit="cover"
            />
          </div>
          <div className="w-1/2 pl-2 lg:w-auto lg:pl-0">
            <Image
              src="/images/goal-4.png"
              blurDataURL="/images/goal-4.png"
              placeholder="blur"
              width={221}
              height={221}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
