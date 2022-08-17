const DashboardSkeleton = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="hidden sm:block">
          <div className="relative flex h-9 w-44  items-center justify-center bg-primary-light sm:rounded-lg sm:bg-white"></div>
          <div className="relative mt-3 flex h-7 w-96 items-center justify-center bg-primary-light sm:rounded-lg sm:bg-white"></div>
        </div>
        <div className="relative hidden h-12 w-44 items-center justify-center bg-primary-light sm:flex sm:rounded-lg sm:bg-white"></div>
      </div>
      <div className="grid sm:mt-5 lg:grid-cols-6 lg:space-x-5">
        <div className="lg:col-span-4">
          <div className="relative mt-5 flex h-64 items-center justify-center rounded-xl bg-primary-light sm:h-96 sm:bg-white"></div>
          <div className="mt-5 flex space-x-4 sm:hidden">
            <div className="relative flex h-10 w-1/4 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
            <div className="relative flex h-10 w-1/4 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
            <div className="relative flex h-10 w-1/4 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
            <div className="relative flex h-10 w-1/4 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="relative mt-5 flex h-96 items-center justify-center rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      </div>
      <div className="relative mt-5 hidden items-center justify-center rounded-xl bg-primary-light py-11 sm:flex sm:bg-white"></div>
      <div className="relative mt-5 flex items-center justify-center rounded-xl bg-primary-light py-48 sm:bg-white"></div>
    </>
  );
};

export default DashboardSkeleton;
