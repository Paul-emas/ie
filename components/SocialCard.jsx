import PropTypes from 'prop-types';

import FacebookIcon from '../public/svgs/social/facebook.svg';
import WhatsappIcon from '../public/svgs/social/whatsapp.svg';
import InstagramIcon from '../public/svgs/social/instagram.svg';
import TwitterIcon from '../public/svgs/social/twitter.svg';
import LinkedInIcon from '../public/svgs/social/linkedin.svg';

const SocialCard = ({ isFooter, follow, center }) => (
  <div className="mt-5 px-5">
    {follow && <p className="text-center text-sm">Join our community on social media</p>}
    <div className={`${center ? 'justify-center' : 'justify-end'} mt-4 flex items-center space-x-4`}>
      <a href="https://www.facebook.com/instantenergyng" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      {isFooter ? (
        <a href="https://www.linkedin.com/company/instant-energy-nigeria" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      ) : (
        <a href="https://wa.me/2349082333376" target="_blank" rel="noopener noreferrer">
          <WhatsappIcon />
        </a>
      )}
      <a href="https://www.instagram.com/instantenergyng/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/instantenergyng/" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
    </div>
  </div>
);

SocialCard.defaultProps = {
  follow: true,
  center: true,
};

SocialCard.propTypes = {
  follow: PropTypes.bool,
  center: PropTypes.bool,
};

export default SocialCard;
