import moment from 'moment';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import BulbIcon from '../../public/svgs/bulb-db.svg';

const MetersDataDefault = ({ meters, setSelectedMeter, setOpenAddMeterModal }) => (
  <>
    {meters.map((item, index) => (
      <tr className="last:-white py-4 pl-6 hover:bg-primary-light" key={`${item}${index}`}>
        <td className="whitespace-nowrap py-4  pl-6">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center rounded-xl bg-primary-base">
              <BulbIcon className="mx-auto my-3" />
            </div>
            <div className="ml-8">
              <div>
                <div className="text-sm font-bold text-font-dark">{item?.label ? item?.label : 'Not Available'}</div>
              </div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-6  py-4">
          <div className="text-sm text-font-grey">
            {moment(item?.createdAt).utc().format('L')}{' '}
            <span className="ml-2">{moment(item?.createdAt).format('LT')}</span>
          </div>
        </td>
        <td className="whitespace-nowrap px-6  py-4">
          <div className="text-sm text-font-grey">
            {item?.meter?.provider ? item?.meter?.provider?.disco?.shortName : 'Not Available'}
          </div>
        </td>
        <td className="whitespace-nowrap px-6  py-4">
          <div className="text-sm font-bold">{item?.meter?.number}</div>
        </td>
        <td className="whitespace-nowrap px-6  py-4">
          <div className="max-w-[260px] truncate text-sm text-font-grey">{item?.meter?.address}</div>
        </td>
        <td className="whitespace-nowrap px-6  py-4 text-sm text-gray-500">
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setSelectedMeter(item);
                setOpenAddMeterModal(true);
              }}
              className="rounded-lg bg-primary-light py-1 px-4 text-xs font-bold text-gray-700 active:bg-gray-200"
            >
              Edit
            </button>
            <button className="rounded-lg bg-red-50 py-2.5 px-3 text-xs font-semibold text-red-600">
              <FontAwesomeIcon icon={faTrash} className="h-2.5 w-2.5" />
            </button>
          </div>
        </td>
      </tr>
    ))}
  </>
);

MetersDataDefault.defaultProps = {
  meters: [],
  setSelectedMeter: () => null,
  setOpenAddMeterModal: () => null,
};

MetersDataDefault.propTypes = {
  meters: PropTypes.array,
  setSelectedMeter: PropTypes.func,
  setOpenAddMeterModal: PropTypes.func,
};

export default MetersDataDefault;
