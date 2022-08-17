import Image from 'next/image';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UsersIcons from '../public/svgs/refer-users.svg';

const UserProfile = ({ user, children }) => {
  return (
    <>
      <div className="text-center">
        <span className="hidden lg:block">
          <Image
            src="/images/profile.jpg"
            width={80.5}
            height={80.5}
            alt="user profile image"
            objectFit="cover"
            className="rounded-full"
          />
        </span>
        <span className="block lg:hidden">
          <Image
            src="/images/profile.jpg"
            width={56}
            height={56}
            alt="user profile image"
            objectFit="cover"
            className="rounded-full"
          />
        </span>
        <div className="text-xs font-bold lg:text-2xl">
          {user?.firstName ? user.firstName : 'Anonymous'}
        </div>
        <button className="mt-2 rounded-lg bg-primary-light px-4 py-2 text-xs font-semibold text-primary-base active:opacity-80 lg:px-6">
          Change Profile Photo
        </button>
        <div className="mt-6 lg:mt-14 lg:px-10">
          <div className="mx-auto cursor-pointer rounded-2xl bg-secondary-green py-5 px-6 lg:max-w-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  <UsersIcons />
                </div>
                <div className="ml-6 text-left">
                  <div className="text-sm font-bold text-white">Refer & Earn</div>
                  <div className="text-xs text-gray-300">Earn as you refer a friend</div>
                </div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className="h-7 w-7 text-lg text-white" />
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default UserProfile;
