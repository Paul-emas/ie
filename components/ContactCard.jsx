import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactCard = ({ top, up }) => {
  return (
    <>
      <div className={`${top ? 'top-24 2xl:top-40' : ''} relative hidden items-center lg:flex`}>
        <div className="flex h-10 w-10 items-center rounded-full bg-secondary-green text-center text-white">
          <FontAwesomeIcon icon={faPhoneAlt} className="mx-auto h-4 w-4 text-xl" />
        </div>
        <div className="ml-4">
          <p className="relative top-1 text-xs text-gray-400">Need help?</p>
          <p className="text-lg font-bold text-font-darker">090-8233-3376</p>
        </div>
      </div>
      {up && (
        <>
          <div className="my-8 hidden items-center lg:flex">
            <div className="flex h-10 w-10 items-center rounded-full bg-secondary-green text-center text-white">
              <FontAwesomeIcon icon={faEnvelope} className="mx-auto h-4 w-4 text-xl" />
            </div>
            <div className="ml-4">
              <p className="relative top-1 text-xs text-gray-400">Send us an email</p>
              <p className="text-lg font-bold text-font-darker">Info@instantenergy.com.ng</p>
            </div>
          </div>
          <div className="my-8 hidden items-center lg:flex">
            <div className="flex h-10 w-10 items-center rounded-full bg-secondary-green text-center text-white">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mx-auto h-4 w-4 text-xl" />
            </div>
            <div className="ml-4">
              <p className="relative top-1 text-xs text-gray-400">Visit us</p>
              <p className="text-lg font-bold text-font-darker">
                Suite 410, Nawa Complex Jahi, Abuja. Nigeria.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

ContactCard.defaultProps = {
  top: false,
  light: false,
};

ContactCard.propTypes = {
  top: PropTypes.bool,
  light: PropTypes.bool,
};

export default ContactCard;
