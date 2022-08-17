import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { userSignOut } from '../slices/persist';

import LogoutIcon from '../public/svgs/logout.svg';

const UserCard = ({ me, openLogout, animate, setOpenNav }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const signOut = () => {
    dispatch(userSignOut());
    setOpenNav(false);
    router.push('/logout');
  };

  return (
    <div className="absolute bottom-12 left-0 hidden w-full lg:block">
      <div className="px-3 2xl:px-6">
        <div className="relative flex h-16 items-center rounded-xl bg-white py-4 px-5">
          {!me && (
            <>
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
              <div className="ml-3 mt-0.5 w-28 font-bold">
                <div className="h-3 w-4/5 rounded-sm bg-gray-200 2xl:w-full"></div>
                <div className="mt-1 h-2.5 w-1/2 rounded-sm bg-gray-200"></div>
              </div>
            </>
          )}
          {me && (
            <>
              <Image src="/images/profile.jpg" width={32} height={32} />
              <div className="relative top-1 ml-3 w-28 font-bold">
                <p className="-mb-1.5 truncate text-xs">{me?.firstName ?? 'Anonymous'}</p>
                <span className="text-xxs font-semibold text-primary-base hover:text-primary-hover">
                  {me?.phone?.number}
                </span>
              </div>
              <FontAwesomeIcon
                icon={faEllipsisH}
                onClick={animate}
                className="ml-auto h-4 w-4 cursor-pointer text-gray-400"
              />
            </>
          )}
          {openLogout && (
            <button
              onClick={signOut}
              className="scaleUp scale absolute top-12 right-5 z-10 w-32 rounded-xl border border-transparent bg-white py-3 pl-4 text-left  shadow-2xl hover:border-primary-light"
            >
              <span className="flex items-center">
                <LogoutIcon />
                <span className="ml-2 text-sm font-bold">Logout</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
