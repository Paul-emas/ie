import { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SolarCard = ({ className }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <div className={`${className} mt-5 rounded-xl bg-secondary-paleBlue py-6 px-1 sm:mt-5 sm:py-4 lg:mt-8`}>
          <div className="container px-5">
            <div className="relative items-center justify-between sm:flex">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setOpen(false)}
                className="absolute right-1 block h-4 w-4 sm:hidden"
              />
              <div>
                <div className="flex items-center text-lg font-bold sm:text-2xl">
                  <div>Solar Electricity</div>{' '}
                  <div className="ml-2 h-6 rounded-lg bg-secondary-green px-2 py-1 text-xs font-bold text-white">
                    Coming Soon
                  </div>
                </div>
                <p className="mt-0.5 pr-20 text-xs font-semibold text-font-muted sm:text-sm">
                  Request solar for residential & Business use with flexible payment plans
                </p>
              </div>
              <button className="mt-4 h-10 rounded-lg bg-white px-5 text-xs font-semibold uppercase text-black hover:bg-gray-50 sm:mt-0 sm:h-11 sm:text-sm">
                Request Solar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SolarCard;
