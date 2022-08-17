const Security = () => {
  return (
    <div className="mx-auto mt-4 px-7  lg:mt-14 lg:max-w-lg lg:px-10">
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-xs font-bold lg:text-base">Pin</div>
          <div className="text-xxs text-gray-400 lg:text-xs">Your 6 digit login Pin</div>
        </div>
        <div>
          <button className="rounded-lg bg-primary-light py-1 px-4 text-xs font-bold text-gray-700 active:bg-gray-200 lg:py-2">
            Change pin
          </button>
        </div>
      </div>
      <div className="my-3 flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-xs font-bold lg:text-base">Privacy policy</div>
          <div className="text-xxs text-gray-400 lg:text-xs">Learn about policies</div>
        </div>
        <div>
          <button className="rounded-lg bg-primary-light py-1 px-4 text-xs font-bold text-gray-700 active:bg-gray-200 lg:py-2">
            View
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-bold lg:text-base">Terms of use</div>
          <div className="text-xxs text-gray-400 lg:text-xs">Terms of conditons</div>
        </div>
        <div>
          <button className="rounded-lg bg-primary-light py-1 px-4 text-xs font-bold text-gray-700 active:bg-gray-200 lg:py-2">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
