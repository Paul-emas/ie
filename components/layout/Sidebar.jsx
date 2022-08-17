import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import { faHome, faMeteor, faMoneyBillWave, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal, setUser, setOpenNav, userSelector } from '../../slices/user';
import useFetchWalletBalance from '../../hooks/useFetchWalletBalance';
import { getUserAccount } from '../../api';
import { persistSelector } from '../../slices/persist';

import WalletIcon from '../../public/svgs/wallet-sm.svg';

import UserCard from '../UserCard';

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { me, openNav } = useSelector(userSelector);
  const [openLogout, setOpenLogout] = useState(false);
  const { isLoggedIn } = useSelector(persistSelector);
  const { walletBalance } = useFetchWalletBalance();

  useEffect(() => {
    if (!me && isLoggedIn) {
      fetchUser();
    }

    return () => {
      dispatch(setOpenNav(false));
    };
  }, [me]);

  async function fetchUser() {
    const resp = await getUserAccount();
    if (resp?.status === 401) {
      dispatch(setShowModal('signIn'));
    }
    if (resp?.error) {
      dispatch(setUser(null));
    }
    if (resp?.data) {
      dispatch(setUser(resp?.data));
    }
  }

  const routes = [
    {
      name: 'Buy Electricity',
      url: '/dashboard',
      icon: faHome,
    },
    {
      name: 'Solar Electricity',
      url: '/solar',
      icon: faSun,
    },
    {
      name: 'Meters',
      url: '/meters',
      icon: faMeteor,
    },
    {
      name: 'Transactions',
      url: '/transactions',
      icon: faMoneyBillWave,
    },
    {
      name: 'Profile',
      url: '/profile',
      icon: faUser,
    },
  ];

  const animate = () => {
    setOpenLogout(!openLogout);
  };

  return (
    <aside className="relative">
      <div
        onClick={() => dispatch(setOpenNav(false))}
        className={`${
          openNav ? 'visible opacity-100' : 'invisible opacity-0'
        } modal-overlay fixed top-0 left-0 z-40 min-h-screen w-full bg-secondary-modal bg-opacity-70 duration-200`}
      ></div>
      {!me && (
        <div
          className={`${
            openNav ? 'left-0' : '-left-full lg:left-0'
          } ease fixed left-0 top-0 z-50 min-h-screen w-72 bg-white bg-contain pt-5 sm:z-10 sm:w-60 2xl:w-sidebar 2xl:pt-10`}
        ></div>
      )}
      {me && (
        <div
          className={`${
            openNav ? 'left-0' : '-left-full lg:left-0'
          } ease fixed z-50 min-h-screen w-72 bg-primary-base bg-contain pt-5 sm:z-10 sm:w-60 2xl:w-sidebar 2xl:pt-10`}
        >
          {openLogout && <div onClick={() => setOpenLogout(false)} className="fixed top-0 z-10 h-full w-full"></div>}
          <div className="h-20 pl-5 pr-5 2xl:pl-10">
            <div className="flex items-center">
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo-light.png"
                    width={193.42}
                    height={42}
                    className="object-cover"
                    priority={true}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="border-b border-t border-primary-border pl-5 pr-3 2xl:pl-10 2xl:pr-6">
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center space-x-2">
                <div className="scale flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-opacity-20 text-white">
                  <WalletIcon />
                </div>
                <div className="relative top-0.5">
                  <div className="flex items-center text-xxs text-white text-opacity-70">
                    <span>Your IE wallet</span>
                  </div>
                  <p className="-mt-1 font-bold text-white">
                    <span>&#x20A6;</span> <span className="ml-1">{walletBalance.toLocaleString()}</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  // dispatch(setShowModal('fundWallet'));
                  // dispatch(setOpenNav(false));
                }}
                className="h-8 w-fund cursor-pointer rounded-lg bg-secondary-green bg-opacity-50 text-center text-xxs font-semibold text-white 2xl:w-24 2xl:text-xs"
              >
                Fund wallet
              </button>
            </div>
          </div>
          <div className="lg:space-y-2.5 lg:py-8 lg:px-3 2xl:space-y-5 2xl:px-6">
            {routes.map(({ name, url, icon }, index) => (
              <div key={index}>
                <a>
                  <button
                    onClick={() => {
                      router.push(url);
                      dispatch(setOpenNav(false));
                    }}
                    className={`${
                      router.asPath.includes(url)
                        ? 'active-icon bg-white text-primary-base'
                        : 'text-white  hover:bg-primary-hover'
                    } relative w-full border-b border-primary-border py-4 pl-6 text-left text-xxs duration-100 lg:rounded-xl lg:border-none`}
                  >
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={icon} className="h-4 w-4 text-lg lg:h-5 lg:w-5" />
                      <span className="ml-5 text-sm font-bold">{name}</span>
                    </span>

                    {url === '/solar' && (
                      <div className="absolute top-3 right-4 rounded-lg bg-red-500 px-2  py-1.5 font-bold text-white lg:right-3">
                        New
                      </div>
                    )}
                  </button>
                </a>
              </div>
            ))}
          </div>
          <UserCard me={me} animate={animate} openLogout={openLogout} setOpenNav={setOpenNav} />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
