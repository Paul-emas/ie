import React from 'react';

const UserProfileDetails = ({ user }) => {
  return (
    <div>
      <div className="mx-auto mt-4 px-7 lg:mt-14 lg:max-w-lg lg:px-10">
        <div className="flex items-center justify-between pb-3 lg:border-b">
          <div>
            <div className="text-xxs text-gray-400 lg:text-xs">Full name</div>
            <div className="text-xs font-bold lg:text-base">
              {user?.firstName ? user.firstName : 'Anonymous'}
            </div>
          </div>
          <div>
            <button className="rounded-lg bg-primary-light py-1 px-4 text-xs font-bold text-gray-700 active:bg-gray-200 lg:py-2">
              Edit
            </button>
          </div>
        </div>
        <div className="my-3 flex items-center justify-between pb-3 lg:border-b">
          <div>
            <div className="text-xxs text-gray-400 lg:text-xs">Phone number</div>
            <div className="text-xs font-bold lg:text-base">
              {user?.phone ? user?.phone?.number : '0000000000'}
            </div>
          </div>
          <div>
            <button className="rounded-lg bg-primary-light py-1 px-4 text-xs font-bold text-gray-700 active:bg-gray-200 lg:py-2">
              Edit
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xxs text-gray-400 lg:text-xs">Email address</div>
            <div className="text-xs font-bold lg:text-base">
              {user?.email ? user?.email?.value : 'Anonymous@gmail.com'}
            </div>
          </div>
          <div>
            <button className="rounded-lg bg-primary-light py-1 px-4 text-xs font-bold text-gray-700 active:bg-gray-200 lg:py-2">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetails;
