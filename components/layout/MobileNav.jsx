import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { persistSelector } from '../../slices/persist';

import SecondaryButton from '../Button/SecondaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../slices/user';

const MobileNav = ({ isScrolling, openMobileNav, setOpenMobileNav }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(persistSelector);

  return (
    <nav
      className={`${isScrolling ? 'bg-white' : 'bg-primary-light'} ${
        openMobileNav ? 'h-[479.15px]' : 'h-0'
      } ease fixed top-14 left-0 z-30 w-full overflow-hidden`}
    >
      <div className="relative h-full outline">
        <Link href="/">
          <a
            className={`${!isScrolling ? 'border-t' : ''} flex h-12 w-full items-center justify-between border-b px-8`}
          >
            <span className="text-sm font-semibold text-primary-base">Home</span>
            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 text-gray-500" />
          </a>
        </Link>
        <Link href="/about">
          <a className="flex h-12 w-full items-center justify-between border-t border-b px-8">
            <span className="text-sm font-semibold text-primary-base">About us</span>
            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 text-gray-500" />
          </a>
        </Link>
        <Link href="/contact">
          <a className="flex h-12 w-full items-center justify-between border-t border-b px-8">
            <span className="text-sm font-semibold text-primary-base">Contact us</span>
            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 text-gray-500" />
          </a>
        </Link>

        <div
          className={`${
            openMobileNav ? 'opacity-100 delay-500' : 'opacity-0'
          } absolute bottom-10 w-full px-4 duration-200`}
        >
          {isLoggedIn ? (
            <Link href="/dashboard">
              <a>
                <SecondaryButton size="base">My Dashboard</SecondaryButton>
              </a>
            </Link>
          ) : (
            <SecondaryButton
              size="base"
              onClick={() => {
                setOpenMobileNav(false);
                dispatch(setShowModal('login'));
              }}
            >
              Get started
            </SecondaryButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
