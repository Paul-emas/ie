import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import InfiniteScroll from 'react-infinite-scroll-component';

import EmptyIcon from '../../public/svgs/empty-state.svg';

const SelectInput = ({
  className,
  loading,
  error,
  hasMore,
  meters,
  label,
  options,
  selectedOption,
  setSelectedOption,
  fetchData,
}) => {
  const errorStyles = error
    ? 'border-red-600 focus:border-red-600 focus:outline-none'
    : 'focus:bg-primary-light focus:border-primary-base focus:border-skin-theme focus:outline-none';

  const [openOption, setOpenOptions] = useState(false);

  useEffect(() => {
    if (options.length > 0 && !selectedOption) {
      setSelectedOption(options[0]);
    }
  }, [options]);

  return (
    <>
      <label className="label text-xs font-bold text-gray-400 lg:text-sm">{label}</label>
      <div className="relative mb-4">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          onClick={() => setOpenOptions(!openOption)}
          aria-labelledby="listbox-label"
          className={`${className} ${errorStyles} input-field`}
        >
          {selectedOption ? (
            <>
              {!meters ? (
                <span className="block truncate text-left">{selectedOption?.name}</span>
              ) : (
                <span className="block truncate text-left">{selectedOption?.meter?.number}</span>
              )}
              <span
                className={`${
                  className && ''
                } pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-3.5 text-gray-500`}
              >
                <FontAwesomeIcon className="h-4 w-4" icon={faChevronDown} />
              </span>
            </>
          ) : (
            <div className="relative">
              <div className="h-4 w-2/3 rounded-md bg-gray-200"></div>
              {loading && (
                <div className="absolute -top-3 right-0 scale-50">
                  <div className="spinner"></div>
                </div>
              )}
            </div>
          )}
        </button>
        <ul
          id="scrollbox"
          tabIndex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
          className={`${
            openOption ? 'visible opacity-100' : 'invisible opacity-0'
          } shadow-soft dropdown absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-2 text-base transition duration-100 ease-in focus:outline-none sm:text-sm`}
        >
          <InfiniteScroll
            dataLength={options?.length}
            next={fetchData}
            hasMore={hasMore}
            loader={
              <div className="py-1 text-center text-sm font-semibold text-primary-base">Fetching more meters...</div>
            }
            scrollableTarget="scrollbox"
          >
            {options?.length > 0 &&
              options?.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedOption(option);
                    setOpenOptions(false);
                  }}
                  className="group relative mx-2 cursor-pointer select-none rounded-lg py-2 pl-3 pr-9 text-gray-900 hover:bg-primary-light hover:text-primary-base"
                  role="option"
                >
                  {!meters ? (
                    <div className="flex items-center text-sm">{option.name}</div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold">{option?.meter?.name}</div>
                        <div className="text-xxs font-bold text-primary-base">{option?.meter?.number}</div>
                        <div className="w-56 text-ellipsis leading-normal">
                          <div className="text-xxs text-gray-500">{option?.meter?.address}</div>
                        </div>
                      </div>
                      {selectedOption?.meter?._id === option?.meter?._id && (
                        <FontAwesomeIcon className="-mr-5 h-6 w-6 text-secondary-green" icon={faCheckCircle} />
                      )}
                    </div>
                  )}
                </li>
              ))}
            {!options?.length ? (
              <div className="flex flex-col items-center py-5">
                <EmptyIcon />
                <p className="mt-4 text-sm font-bold">No {meters ? 'Meters' : 'Accounts'}</p>
                <p className="text-xs text-gray-400">
                  Kindly add {meters ? 'a meters' : 'an account'} to purchase units?
                </p>
              </div>
            ) : null}
          </InfiniteScroll>
        </ul>
      </div>
    </>
  );
};

export default SelectInput;
