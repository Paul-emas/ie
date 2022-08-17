import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector } from '../../slices/persist';
import { setShowModal, setOpenNav } from '../../slices/user';

import MenuIcon from '../../public/svgs/menu.svg';
import CloseIcon from '../../public/svgs/close.svg';

import BaseButton from '../Button/BaseButton';
import MobileNav from './MobileNav';

const Navbar = ({ isPageProtected }) => {
  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const [isScrolling, setIsScrolling] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const { isLoggedIn } = useSelector(persistSelector);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    () => {
      setIsScrolling(false);
    };
  }, [isScrolling]);

  return (
    <aside>
      <nav className={`${isScrolling ? 'h-14 border-b bg-white lg:h-16' : 'h-16 lg:h-24'}  fixed inset-0 z-30`}>
        <div
          className={`${
            isScrolling
              ? 'h-14 border-b bg-white lg:h-16'
              : `${!isPageProtected ? 'bg-primary-light' : 'bg-white'} h-14 lg:h-16`
          }  inset-0 z-40 transition-all`}
        >
          <div className="mx-auto h-full px-4 lg:px-14 xl:container">
            <div className="flex h-full items-center justify-between">
              <div className="-ml-3 mt-1 hidden lg:block">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo.webp"
                      width={200}
                      height={46}
                      objectFit="contain"
                      priority={true}
                      className={`${isScrolling ? 'bg-white' : 'bg-primary-light'}`}
                    />
                  </a>
                </Link>
              </div>
              <div className="-ml-1 mt-2 block lg:hidden">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo.webp"
                      blurDataURL="/images/logo.webp"
                      width={145.13}
                      height={28.23}
                      placeholder="blur"
                      priority={true}
                    />
                  </a>
                </Link>
              </div>
              <div className="grid items-center space-x-2 text-base lg:flex lg:grid-cols-2 lg:space-x-8">
                <Link href="/">
                  <a className="hidden font-semibold text-primary-darker hover:text-primary-base lg:block">Home</a>
                </Link>

                <Link href="/about">
                  <a className="hidden font-semibold text-primary-darker hover:text-primary-base lg:block">About us</a>
                </Link>

                <Link href="/contact">
                  <a className="hidden font-semibold text-primary-darker hover:text-primary-base lg:block">
                    Contact us
                  </a>
                </Link>

                {isLoggedIn ? (
                  <>
                    <div className="flex items-center lg:hidden">
                      <Link href="/profile">
                        <div>
                          <div className="flex items-center">
                            <Image
                              src="/images/profile.jpg"
                              width={26}
                              height={26}
                              alt="user profile image"
                              objectFit="cover"
                              className="rounded-full"
                            />
                          </div>
                        </div>
                      </Link>
                      {isPageProtected ? (
                        <MenuIcon className="ml-2" onClick={() => dispatch(setOpenNav(true))} />
                      ) : (
                        <>
                          {!openMobileNav ? (
                            <MenuIcon className="ml-2" onClick={() => setOpenMobileNav(true)} />
                          ) : (
                            <CloseIcon className="ml-2" onClick={() => setOpenMobileNav(false)} />
                          )}
                        </>
                      )}
                    </div>
                    <div className="hidden lg:block">
                      <Link href="/dashboard">
                        <a>
                          <BaseButton>My Dashboard</BaseButton>
                        </a>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="block lg:hidden">
                      {!openMobileNav ? (
                        <MenuIcon className="ml-2" onClick={() => setOpenMobileNav(true)} />
                      ) : (
                        <CloseIcon className="ml-2" onClick={() => setOpenMobileNav(false)} />
                      )}
                    </div>
                    <div className="hidden lg:block">
                      <BaseButton onClick={() => dispatch(setShowModal('login'))}>Get started</BaseButton>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <MobileNav setOpenMobileNav={setOpenMobileNav} isScrolling={isScrolling} openMobileNav={openMobileNav} />
    </aside>
  );
};

export default Navbar;
