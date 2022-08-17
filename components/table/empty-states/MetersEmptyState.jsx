import PropTypes from 'prop-types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Empty from '../../../public/svgs/empty-transcation.svg';

const MetersEmptyState = ({ setOpenAddMeterModal }) => {
  return (
    <div className="mt-5 flex items-center justify-center bg-white py-32 sm:rounded-xl 2xl:pt-36 2xl:pb-64">
      <div className="flex flex-col items-center">
        <Empty />
        <div className="mt-2 text-base font-bold">{`You've not added any meters yet!`}</div>
        <button
          onClick={() => setOpenAddMeterModal(true)}
          className="mt-8 flex items-center rounded-lg border-none bg-primary-light px-6 py-3 text-xs font-bold uppercase text-primary-base outline-none"
        >
          <FontAwesomeIcon icon={faPlus} className="h-3 w-3 text-opacity-70" />{' '}
          <span className="ml-2">Add new meter</span>
        </button>
      </div>
    </div>
  );
};

MetersEmptyState.defaultProps = {
  setOpenAddMeterModal: () => null,
};

MetersEmptyState.propTypes = {
  setOpenAddMeterModal: PropTypes.func,
};

export default MetersEmptyState;
