import PropTypes from 'prop-types';

import AppleIcon from '../public/svgs/apple.svg';
import AppleIcon2 from '../public/svgs/apple-dark.svg';
import PlayStoreIcon from '../public/svgs/google-play.svg';
import PlayStoreIcon2 from '../public/svgs/google-play-dark.svg';

const DownloadButtons = ({ className, captionColor, labelColor, center, dark }) => (
  <div
    className={`${
      center ? 'mx-auto' : 'lg:ml-0'
    } mt-8 grid grid-cols-2 gap-x-5 px-0 sm:max-w-sm lg:mt-10 lg:px-0`}
  >
    <a
      href="/"
      className={`${className} inline-flex items-center rounded-xl py-1.5 pl-2.5 sm:pl-3 lg:pl-4`}
    >
      {dark ? (
        <PlayStoreIcon2 className="h-7 w-7 sm:h-8 sm:w-8" />
      ) : (
        <PlayStoreIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      )}
      <div className="ml-1 mt-0.5 text-left sm:ml-2 lg:mt-1">
        <p className={`${captionColor} text-xxs`}>Get it on</p>
        <p className={`${labelColor} text-xs font-bold lg:text-base`}>Play Store</p>
      </div>
    </a>
    <a
      href="/"
      className={`${className} inline-flex items-center rounded-xl py-1.5 pl-2.5 sm:pl-3 lg:pl-4`}
    >
      {dark ? (
        <AppleIcon2 className="h-7 w-7 sm:h-8 sm:w-8" />
      ) : (
        <AppleIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      )}
      <div className="ml-1 mt-0.5 text-left  sm:ml-2">
        <p className={`${captionColor} text-xxs`}>Download on the</p>
        <p className={`${labelColor} text-xs font-bold lg:text-base`}>App Store</p>
      </div>
    </a>
  </div>
);

DownloadButtons.defaultProps = {
  className: 'bg-primary-darker',
  captionColor: 'text-white',
  labelColor: 'text-white',
  center: false,
};

DownloadButtons.propTypes = {
  className: PropTypes.string.isRequired,
  captionColor: PropTypes.string,
  labelColor: PropTypes.string,
  center: PropTypes.bool,
};

export default DownloadButtons;
