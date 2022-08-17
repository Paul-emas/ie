import React from 'react';

const Notifications = () => {
  return (
    <div className="mx-auto mt-4 px-7  lg:mt-14 lg:max-w-lg lg:px-10">
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-xs font-bold lg:text-base">Email</div>
          <div className="text-xxs text-gray-400 lg:text-xs">
            Receive electricity token receipts via email
          </div>
        </div>
        <div>
          <div className="relative cursor-pointer">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block h-7 w-10 rounded-full bg-secondary-green lg:h-8 lg:w-14"></div>
            <div className="dot absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition lg:h-6 lg:w-6"></div>
          </div>
        </div>
      </div>
      <div className="my-3 flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-xs font-bold lg:text-base">SMS</div>
          <div className="text-xxs text-gray-400 lg:text-xs">
            Receive electricity token receipts via sms
          </div>
        </div>
        <div>
          <div className="relative cursor-pointer">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block h-7 w-10 rounded-full bg-secondary-green lg:h-8 lg:w-14"></div>
            <div className="dot absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition lg:h-6 lg:w-6"></div>
          </div>
        </div>
      </div>
      <div className="mb-3 flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-xs font-bold lg:text-base">Push notifications</div>
          <div className="text-xxs text-gray-400 lg:text-xs">Receive push notifications</div>
        </div>
        <div>
          <div className="relative cursor-pointer">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block h-7 w-10 rounded-full bg-secondary-green lg:h-8 lg:w-14"></div>
            <div className="dot absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition lg:h-6 lg:w-6"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-bold lg:text-base">News letters</div>
          <div className="text-xxs text-gray-400 lg:text-xs">
            Receive featured articles and latest news
          </div>
        </div>
        <div>
          <div className="relative cursor-pointer">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block h-7 w-10 rounded-full bg-secondary-green lg:h-8 lg:w-14"></div>
            <div className="dot absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition lg:h-6 lg:w-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
