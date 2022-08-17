const SolarSkeleton = () => {
  return (
    <>
      <div className="hidden items-center justify-between sm:flex">
        <div>
          <div className="relative flex h-9 w-44  items-center justify-center rounded-lg bg-primary-light sm:bg-white"></div>
          <div className="relative mt-3 flex h-7 w-96 items-center justify-center rounded-lg bg-primary-light sm:bg-white"></div>
        </div>
        <div className="relative flex h-12 w-44 items-center justify-center rounded-lg bg-primary-light sm:bg-white"></div>
      </div>
      <div className="grid lg:grid-cols-6 lg:space-x-5">
        <div className="lg:col-span-2">
          <div className="relative flex h-44 items-center justify-center rounded-xl bg-primary-light sm:mt-8 sm:bg-white"></div>
          <div className="relative mt-8 flex h-44 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
        <div className="lg:col-span-4">
          <div className="relative mt-8 flex h-96 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      </div>
      <div className="pt-5">
        <div className="grid space-y-6 sm:grid-cols-4 sm:space-y-0 sm:space-x-6">
          <div className="relative flex h-28 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
          <div className="relative flex h-28 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
          <div className="relative flex h-28 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
          <div className="relative flex h-28 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      </div>
      <div className="relative mt-5 flex items-center justify-center rounded-xl bg-primary-light py-52 sm:bg-white"></div>
    </>
  );
};

export default SolarSkeleton;
