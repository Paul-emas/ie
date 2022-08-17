import ReferIcon from '../public/svgs/refer-2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import FacebookIcon from '../public/svgs/social/facebook.svg';
import WhatsappIcon from '../public/svgs/social/whatsapp.svg';
import InstagramIcon from '../public/svgs/social/instagram.svg';
import TwitterIcon from '../public/svgs/social/twitter.svg';

const ReferBox = () => {
  return (
    <div className="sm_shadow mt-10 w-full rounded-xl bg-white pt-5 pb-10 text-center sm:h-96 sm:py-5">
      <ReferIcon className="mx-auto mt-5" />
      <div className="mt-3 text-base font-bold text-primary-darker">Refer & Earn</div>
      <p className="mx-auto  mt-1 max-w-sm px-10 text-xs text-gray-400 2xl:text-sm">
        Tell others about instant energy and get real cash in your wallet when they buy electricity
      </p>
      <div className="mx-auto mt-3 w-52 rounded-xl border sm:w-60 sm:rounded-lg">
        <div className="flex items-center justify-center py-2 sm:py-3">
          <div className="border-r pr-2 font-bold sm:text-xl">1234 2345 6789</div>
          <FontAwesomeIcon
            icon={faCopy}
            className="ml-3 h-4 w-4 cursor-pointer text-primary-base sm:h-5 sm:w-5"
          />
        </div>
      </div>
      <div className="mt-4 hidden items-center justify-center space-x-4 sm:flex">
        <FacebookIcon />
        <WhatsappIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

ReferBox.propTypes = {};

export default ReferBox;
