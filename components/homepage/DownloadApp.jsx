import Image from 'next/image';
import { useState } from 'react';

import BulbIcon from '../../public/svgs/bulb-dashed.svg';
import SunIcon from '../../public/svgs/sun.svg';
import MoneyIcon from '../../public/svgs/money-sm.svg';

const DownloadApp = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="bg-primary-light py-8 lg:py-32">
      <div className="container mx-auto px-10">
        <div className="mx-auto flex max-w-4xl flex-col-reverse sm:flex-row">
          <div className="lg:w-1/2">
            <div className="mt-8 flex transform justify-center sm:mt-0 lg:block lg:scale-125 2xl:ml-6">
              <Image
                src="/images/mobile-mockup.webp"
                width={311.64}
                height={626.17}
                className="object-cover"
                priority={true}
              />
            </div>
          </div>
          <div className="flex items-center lg:w-1/2">
            <div>
              <h1 className="hidden max-w-md text-5xl  font-bold text-primary-darker lg:block">
                Download our mobile app
              </h1>
              <div className="mx-auto mt-12 md:max-w-sm lg:max-w-full">
                <div className="flex">
                  <div className="stepper relative flex h-16 w-16 items-center justify-center rounded-full">
                    <div
                      className={`${
                        active &&
                        'spin absolute h-16 w-16 rounded-full border-2 border-dashed border-secondary-tealGreen'
                      }`}
                    ></div>
                    <div className="h-12 w-12 rounded-full bg-secondary-tealGreen">
                      <BulbIcon className="mx-auto my-3" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="font-bold text-font-darker  lg:text-xl">Buy Electricity</p>
                    <p className="mt-2 max-w-xs text-xs text-font-darker lg:text-base">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex">
                  <div className="stepper relative flex h-16 w-16 items-center justify-center rounded-full">
                    <div
                      className={`${
                        active &&
                        'spin absolute h-16 w-16 rounded-full border-2 border-dashed border-secondary-yellowLight'
                      }`}
                    ></div>
                    <div className="h-12 w-12 rounded-full bg-secondary-yellowLight">
                      <SunIcon className="mx-auto my-3" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="font-bold text-gray-400  lg:text-xl">Manage solar Plan</p>
                    <p className="mt-2 max-w-xs text-xs text-gray-400 lg:text-base">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full">
                    <div
                      className={`${
                        active &&
                        'spin absolute h-16 w-16 rounded-full border-2 border-dashed border-secondary-blue'
                      }`}
                    ></div>
                    <div className="h-12 w-12 rounded-full bg-secondary-blue">
                      <MoneyIcon className="mx-auto my-3.5" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="font-bold text-gray-400  lg:text-xl">
                      Keep track of your Spending
                    </p>
                    <p className="mt-2 max-w-xs text-xs text-gray-400 lg:text-base">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
