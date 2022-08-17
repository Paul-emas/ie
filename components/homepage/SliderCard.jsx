import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import QuoteIcon from '../../public/svgs/quotes.svg';

const SliderCard = ({ name, comment, type }) => {
  return (
    <>
      <div className="card-shadow relative h-[452px] w-full rounded-2xl border border-gray-100 py-8 px-7 lg:w-[376px]">
        <QuoteIcon />
        <p className="mt-10 text-base leading-relaxed">{comment}</p>
        <div className="absolute bottom-16 flex items-center justify-center lg:mt-28 lg:justify-start">
          <a
            href=""
            className={`${
              type === 'whatsapp' ? 'bg-green-500' : 'bg-[#C13584]'
            } h-8 w-8 rounded-full text-center lg:h-10 lg:w-10`}
          >
            <FontAwesomeIcon
              icon={type === 'whatsapp' ? faWhatsapp : faInstagram}
              className="mx-auto mt-1.5 h-5 w-5 text-3xl text-white lg:mt-2.5 lg:h-5 lg:w-5"
            />
          </a>
          <div className="ml-3">
            <h2 className="-mt-0.5 font-bold lg:-mt-0 lg:text-base">{name}</h2>
            <div className="flex space-x-1">
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-secondary-yellowLight" />
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-secondary-yellowLight" />
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-secondary-yellowLight" />
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-secondary-yellowLight" />
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-secondary-yellowLight" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
