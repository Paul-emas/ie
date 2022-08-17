import { faChargingStation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const SolarPanelStatusCards = ({
  label,
  online,
  onlineLabel,
  caption,
  isCharging,
  Icon,
}) => {
  return (
    <div className="sm_shadow rounded-xl bg-white py-6 px-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold text-secondary-label">
            {caption}
          </div>
          <div className="-mt-0.5 flex  items-center text-xl font-semibold">
            <span>{label}</span>
            {isCharging && (
              <span className="ml-2 flex items-end space-x-1 text-xs text-yellow-400">
                <FontAwesomeIcon icon={faChargingStation} className="h-4 w-4" />
                <span>Charging</span>
              </span>
            )}
          </div>
          {online ? (
            <span className="rounded-lg bg-secondary-lightGreen px-2 py-0.5 text-xxs font-bold text-secondary-green">
              {onlineLabel}
            </span>
          ) : (
            <span className="rounded-lg bg-red-100 px-2.5 py-0.5 text-xxs font-bold text-red-600">
              Offline
            </span>
          )}
        </div>
        <Icon />
      </div>
    </div>
  );
};

SolarPanelStatusCards.defaultProps = {
  label: '',
  online: '',
  caption: '',
  onlineLabel: '',
  isCharging: false,
};

SolarPanelStatusCards.propTypes = {
  label: PropTypes.string,
  online: PropTypes.bool,
  caption: PropTypes.string,
  isCharging: PropTypes.bool,
};

export default SolarPanelStatusCards;
