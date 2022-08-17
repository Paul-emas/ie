import Image from 'next/image';
import Link from 'next/link';

import ContactCard from '../ContactCard';
import DownloadButtons from '../DownloadButtons';
import SocialCard from '../SocialCard';

const Footer = () => {
  return (
    <footer className="bg-primary-lightGray pt-8 lg:pt-24">
      <div className="container mx-auto px-0 lg:px-14 xl:container">
        <div className="grid lg:grid-cols-6">
          <div className="col-span-2 border-b border-secondary-lightGreen px-4 pb-5 text-center lg:border-none lg:px-0 lg:pb-0 lg:text-left">
            <Image src="/images/logo.webp" width={185} height={40} className="object-contain" />
            <div className="hidden lg:mt-10 lg:block">
              <ContactCard light />
            </div>
          </div>
          <div className="col-span-2 block px-4 text-center lg:hidden lg:px-0">
            <div className="">
              <SocialCard follow={false} center />
            </div>
            <p className="mx-auto mt-5 max-w-sm px-16 text-xs text-gray-400 lg:text-sm">
              Suite 410, Nawa Complex Jahi, Abuja. Nigeria, <br /> 278, Dr. Lelykade The Hague The Netherlands.
            </p>
            <p className="mt-2 font-semibold">Info@instantenergy.com.ng</p>
            <p className="mt-2 font-semibold">090-8233-3376</p>
          </div>
          <div className="col-span-2 px-4 lg:px-0">
            <div className="mt-10 flex flex-wrap px-5 lg:mt-0 lg:space-x-24 lg:px-0">
              {/* <div className="w-1/2 lg:w-auto">
                <h2 className="font-semibold">Products</h2>
                <div className="mt-5 flex flex-col space-y-4 lg:mt-10 lg:space-y-8">
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Buy Electricity</a>
                  </Link>
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Become an Agent</a>
                  </Link>
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Available Cities</a>
                  </Link>
                </div>
              </div> */}
              <div className="w-1/2 lg:w-auto">
                <h2 className="font-semibold">Company</h2>
                <div className="mt-5 flex flex-col space-y-4 lg:mt-10 lg:space-y-8">
                  <Link href="/">
                    <a className="text-xs font-semibold lg:text-sm">Home</a>
                  </Link>
                  <Link href="/about">
                    <a className="text-xs font-semibold lg:text-sm">About us</a>
                  </Link>
                  <Link href="/contact">
                    <a className="text-xs font-semibold lg:text-sm">Contact us</a>
                  </Link>
                </div>
              </div>
              <div className="col-span-3 w-1/2 lg:w-auto">
                <h2 className="font-semibold">Legal</h2>
                <div className="mt-5 flex flex-col space-y-4 lg:mt-10 lg:space-y-8">
                  <Link href="/privacy-policy">
                    <a className="text-xs font-semibold lg:text-sm">Privacy Policy</a>
                  </Link>
                  <Link href="/terms-and-conditions">
                    <a className="text-xs font-semibold lg:text-sm">Terms & Conditions</a>
                  </Link>
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">FAQs</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden px-4 text-right lg:block lg:px-0">
            <SocialCard isFooter follow={false} center={false} />
            <p className="mt-5 ml-auto max-w-xs pl-24 text-xs lg:text-sm">
              Suite 410, Nawa Complex Jahi, Abuja. Nigeria.
            </p>
            <p className="mt-5 ml-auto max-w-xs pl-24 text-xs lg:text-sm">
              278, Dr. Lelykade The Hague The Netherlands.
            </p>
            <p className="mt-2 font-bold">info@instantenergy.com.ng</p>
            <p className="mt-1 font-bold">090-8233-3376</p>
          </div>
        </div>
        {/* <div className="mt-10 w-full justify-center px-5 lg:mt-32 lg:px-0">
          <h2 className="mt-2 -mb-2 text-center font-semibold">Download our mobile app</h2>
          <DownloadButtons
            dark
            center
            labelColor="text-black"
            captionColor="text-gray-500"
            className="shadow-soft border-2 border-gray-700 bg-white"
          />
        </div> */}
      </div>
      <div className="mt-10 border-t py-6 lg:py-8">
        <p className="text-center text-xs text-gray-600 lg:text-base">
          © {new Date().getFullYear()}. Instant Energy All Rights Reserved{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
