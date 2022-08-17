import React from 'react';
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = () => {
  return (
    <section className="py-60 relative bg-primary-base bg-contain overlay">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <h1 className="text-5xl text-white max-w-4xl mx-auto">
          Stay in touch and be connected prepared as beauty with us
        </h1>
        <p className="text-white mt-5">
          Instant Energy deploys patient, value accretive capital alongside
        </p>

        <div className="flex justify-center space-x-5 mt-10">
          <a
            href=""
            className="w-8 h-8 lg:w-14 lg:h-14 text-center bg-white rounded-full"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-3xl text-gray-800 mt-1.5 lg:mt-3"
            />
          </a>
          <a
            href=""
            className="w-8 h-8 lg:w-14 lg:h-14 text-center bg-secondary-twitter rounded-full"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-3xl text-white mt-1.5 lg:mt-3"
            />
          </a>
          <a
            href=""
            className="w-8 h-8 lg:w-14 lg:h-14 text-center bg-secondary-linkedin rounded-full"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-3xl text-white mt-1.5 lg:mt-3"
            />
          </a>
          <a
            href=""
            className="w-8 h-8 lg:w-14 lg:h-14 text-center bg-secondary-youtube rounded-full"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-3xl text-white ml-0.5 mt-1.5 lg:mt-3"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
