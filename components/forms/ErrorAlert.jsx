import { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const ErrorAlert = ({ error }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.alert',
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        ease: 'power3',
      },
    );
  }, []);

  return (
    <div className="mt-10 border-t px-6 sm:pb-3 lg:px-8">
      <div className="alert mt-4 -mb-6 rounded-lg bg-red-50 py-2.5 px-3 text-xs font-semibold capitalize text-red-600">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="h-3 w-3 text-red-600"
          />
          <span className="ml-1.5">{error}</span>
        </div>
      </div>
    </div>
  );
};

ErrorAlert.propTypes = {
  error: PropTypes.string,
};

export default ErrorAlert;
