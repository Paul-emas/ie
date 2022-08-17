import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { setShowModal } from '../slices/user';

import SecondaryButton from '../components/Button/SecondaryButton';
import AboutInfo from '../components/homepage/AboutInfo';
import Header from '../components/homepage/Header';
import Recycle from '../components/homepage/Recycle';
import Footer from '../components/homepage/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Goals from '../components/homepage/Goals';

export default function About() {
  const dispatch = useDispatch();

  return (
    <div>
      <Header bg="pt-80 lg:pt-0 bg-center lg:bg-left bg-cover pb-10 relative z-10 relative banner-4">
        <div className="banner-4 absolute inset-0 -z-10 h-full w-full"></div>
        <div className="absolute inset-0 -z-20 hidden h-full w-full bg-primary-base lg:block">
          <Image src="/images/banners/banner-4.webp" layout="fill" objectFit="cover" alt="About page banner image" />
        </div>
        <div className="absolute inset-0 -z-20 block h-full w-full bg-primary-base lg:hidden">
          <Image src="/images/banners/banner-4-sm.webp" layout="fill" objectFit="cover" alt="About page banner image" />
        </div>
        <div className="justify-between lg:flex 2xl:mt-5">
          <div className="pt-28 lg:w-1/2 lg:pt-72">
            <div className="max-w-lg text-center text-2xl font-bold leading-tight text-white lg:text-left lg:text-6xl xl:leading-tight">
              We make <span className="text-green-500">energy</span> accessible <br className="block lg:hidden" /> &
              affordable
            </div>
            <div className="mt-8 lg:w-56">
              <SecondaryButton onClick={() => dispatch(setShowModal('register'))}>Get Started</SecondaryButton>
              <SecondaryButton
                onClick={() => dispatch(setShowModal('login'))}
                className="mt-5 block lg:hidden"
                transparent
              >
                Login
              </SecondaryButton>

              <div className="relative mt-6 flex items-center justify-center lg:hidden">
                <div className="flex h-6 w-6 items-center rounded-full bg-secondary-green text-center text-white">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mx-auto h-2 w-2 text-xl" />
                </div>
                <div className="ml-2">
                  <p className="text-xxs text-gray-400">Need help?</p>
                  <p className="-mt-1 text-xs font-bold text-white">090-8233-3376</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Recycle />
      {/* <AboutBanner /> */}
      {/* <Team /> */}
      <AboutInfo />
      <Goals />
      {/* <FAQs /> */}
      <Footer />
    </div>
  );
}
