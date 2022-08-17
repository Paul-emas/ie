import PropTypes from 'prop-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BulbIcon from '../../public/svgs/bulb-db.svg';

const MetersDataMobile = ({ meters, setSelectedMeter, setOpenAddMeterModal }) => {
  return (
    <>
      {meters?.map((item, index) => (
        <div
          className="border-b last:border-none"
          onClick={() => {
            setSelectedMeter(item);
            setOpenAddMeterModal(true);
          }}
          key={`${item}-${index}`}
        >
          <div className="flex items-center justify-between py-3 px-4">
            <div className="flex items-center">
              <div className="flex h-8 w-8 items-center rounded-lg bg-secondary-green">
                <BulbIcon className="mx-auto my-3" />
              </div>
              <div className="ml-2">
                <div className="text-sm font-bold">{item?.label}</div>
                <div className="text-xs text-primary-base">{item?.meter?.number}</div>
              </div>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      ))}
    </>
  );
};
MetersDataMobile.defaultProps = {
  meters: [],
  setSelectedMeter: () => null,
  setOpenAddMeterModal: () => null,
};

MetersDataMobile.propTypes = {
  meters: PropTypes.array,
  setSelectedMeter: PropTypes.func,
  setOpenAddMeterModal: PropTypes.func,
};

export default MetersDataMobile;
