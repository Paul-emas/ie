import React from 'react';
import PropTypes from 'prop-types';

const SolarAmountCard = props => {
  return (
    <div className="sm_shadow h-44 rounded-xl bg-white sm:mt-10">
      <div className="border-b px-6 pt-5 pb-6">
        <div className="flex items-center">
          <span className="text-sm font-semibold text-primary-darker">
            Amount paid
          </span>
          <span className="ml-1.5 flex items-center rounded-md bg-secondary-purple px-2 py-0.5 text-xxs font-semibold text-white">
            Premium plan
          </span>
        </div>
        <p className="mt-2.5 text-2xl font-bold">&#x20A6; 0.00</p>
      </div>
      <div className="px-6">
        <div className="mt-4 h-7 w-full overflow-hidden rounded-lg bg-secondary-lighterGreen">
          <div className="flex h-full w-11/12 items-center justify-center rounded-r-lg bg-secondary-green text-xs font-semibold text-white">
            0% owned
          </div>
        </div>
      </div>
    </div>
  );
};

SolarAmountCard.propTypes = {};

export default SolarAmountCard;
