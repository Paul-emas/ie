import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ name, ans, ans2 }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div key={name} className="mt-5 flex justify-between lg:items-center">
        <h2 className="text-sm font-bold  lg:text-base">{name}</h2>
        <div className="h-2.5 w-2.5" onClick={() => setIsActive(!isActive)}>
          {isActive ? (
            <FontAwesomeIcon icon={faMinus} className="h-3 w-3 cursor-pointer text-primary-darker" />
          ) : (
            <FontAwesomeIcon icon={faPlus} className="h-3 w-3 cursor-pointer text-primary-darker" />
          )}
        </div>
      </div>
      <div
        className={`${
          isActive && 'border-primary-base pb-5 lg:pb-7'
        } border-b pt-3 transition-all duration-300 lg:pt-5`}
      >
        <div
          className={`${
            isActive ? 'h-auto' : 'h-0'
          } overflow-x-hidden text-xs text-gray-500 duration-200 lg:w-11/12 lg:text-base`}
        >
          <p>{ans}</p>
          {ans2 && <p className="mt-5">{ans2}</p>}
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {};

export default Accordion;
