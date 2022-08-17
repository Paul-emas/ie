import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SolarPaymentCard = props => {
  const active = false;
  return (
    <div className="sm_shadow mt-8 flex h-44 flex-col justify-center rounded-xl bg-white py-5 px-10">
      <div className="flex items-center justify-between border-b pb-2 text-sm font-bold">
        <span className="font-semibold text-secondary-label">Plan</span>
        <span
          className={`${
            active ? 'text-secondary-green' : 'text-red-600'
          } flex items-center`}
        >
          <FontAwesomeIcon icon={faCheckCircle} className="h-3 w-3" />
          <span className="ml-1">{active ? 'Active' : 'Inactive'}</span>
        </span>
      </div>
      <div className="flex items-center justify-between border-b pt-4 pb-2 text-sm font-bold">
        <span className="font-semibold text-secondary-label">Last Payment</span>
        <span className="text-gray-800">Not Active</span>
      </div>
      <div className="flex items-center justify-between pt-4 pb-2 text-sm font-bold">
        <span className="font-semibold text-secondary-label">Next Payment</span>
        <span className="text-gray-800">Not Active</span>
      </div>
    </div>
  );
};

SolarPaymentCard.propTypes = {};

export default SolarPaymentCard;
