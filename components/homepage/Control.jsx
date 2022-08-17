// import BannerIcon from '../../public/svgs/banner-2.svg';

const Control = () => {
  return (
    <div className="overflow-x-hidden bg-white py-20 2xl:py-36">
      <div className="container mx-auto px-10">
        <div className="mx-auto grid grid-cols-2 space-x-20">
          <div className="flex items-center">
            <div>
              <h1 className="max-w-lg  text-5xl font-bold leading-tight">We ensure you have the best experience</h1>
              <p className="mt-6 max-w-xl">
                Our goal is to ensure you get only the best service, our customer support reps are available 24/7 to
                attend to you.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-x-5 px-2.5 sm:max-w-sm lg:mt-10 lg:max-w-md lg:px-0">
                <a
                  href="/"
                  className="rounded-xl border-2 border-primary-base bg-primary-base py-5  text-center text-sm font-bold uppercase text-white"
                >
                  Request Demo
                </a>
                <div className="py-5"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="transform 2xl:scale-125">{/* <BannerIcon /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
