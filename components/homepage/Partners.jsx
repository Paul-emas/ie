import Image from 'next/image';

const Partners = () => {
  return (
    <div className="bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4 lg:px-14">
        <h1 className="text-center text-base font-semibold uppercase text-font-dark lg:text-xl ">Energy Providers</h1>
        <div className="mt-7 hidden items-center justify-between lg:flex">
          <Image src="/images/partners/logo-1.jpg" width={146.7} height={39.09} className="object-cover" />
          <Image src="/images/partners/logo-2.jpg" width={146} height={62} className="object-cover" />
          <Image src="/images/partners/logo-3.jpg" width={110.38} height={42.83} />
          <Image src="/images/partners/logo-4.jpg" width={134} height={40} className="object-cover" />
          <Image src="/images/partners/logo-5.png" width={136.53} height={62.16} />
          <Image src="/images/partners/logo-6.jpg" width={138} height={92} className="object-cover" />
        </div>
        <div className="mt-7 flex items-center justify-between space-x-5 lg:hidden">
          <div>
            <Image src="/images/partners/logo-1.jpg" width={146.7} height={39.09} className="object-cover" />
          </div>
          <div>
            <Image src="/images/partners/logo-2.jpg" width={146} height={62} className="object-cover" />
          </div>
          <div>
            <Image src="/images/partners/logo-3.jpg" width={110.38} height={42.83} />
          </div>
          <div>
            <Image src="/images/partners/logo-4.jpg" width={134} height={40} className="object-cover" />
          </div>
          <div>
            <Image src="/images/partners/logo-5.png" width={136.53} height={62.16} />
          </div>
          <div>
            <Image src="/images/partners/logo-6.jpg" width={138} height={92} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
