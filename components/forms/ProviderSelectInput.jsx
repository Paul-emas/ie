import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProviders, userSelector } from '../../slices/user';
import { getProviders } from '../../api';

import EmptyIcon from '../../public/svgs/empty-state.svg';

const ProviderSelectInput = ({ className, error, label, selectedProvider, setSelectedProvider }) => {
  const dispatch = useDispatch();
  const { userProviders } = useSelector(userSelector);
  const errorStyles = error
    ? 'border-red-600 focus:border-red-600 focus:outline-none'
    : 'focus:bg-primary-light focus:border-primary-base focus:border-skin-theme focus:outline-none';
  const [openOption, setOpenOptions] = useState(false);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    if (!userProviders) {
      fetchProviders();
    } else {
      updateProvidersState(userProviders);
    }
  }, [userProviders]);

  async function fetchProviders() {
    const resp = await getProviders();
    if (resp.data) {
      dispatch(setUserProviders(resp.data));
      updateProvidersState(resp.data);
    }
  }

  function updateProvidersState(providers) {
    const { docs } = providers;
    setProviders(docs);
    setSelectedProvider(docs[0]);
  }

  return (
    <>
      <label className="label text-xs text-gray-400 lg:text-sm">{label}</label>
      <div className="relative mb-4">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          onClick={() => setOpenOptions(!openOption)}
          aria-labelledby="listbox-label"
          className={`${className} ${errorStyles} input-field`}
        >
          <div className="-my-1">
            {selectedProvider ? (
              <>
                <span className="flex items-center">
                  <img
                    src={selectedProvider?.disco?.logo}
                    className="h-7 w-8 flex-shrink-0 rounded-full object-contain"
                  />
                  <span className="ml-3 block truncate text-sm">
                    {selectedProvider?.state?.name} ({selectedProvider?.disco?.shortName})
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 mt-2 flex items-center pr-3.5 text-gray-500">
                  <FontAwesomeIcon className="h-4 w-4" icon={faChevronDown} />
                </span>
              </>
            ) : (
              <>
                <span className="flex items-center pl-1.5">
                  <span className="h-7 w-8 flex-shrink-0 rounded-lg bg-gray-200 object-contain" />
                  <span className="ml-3 block h-6 w-56 truncate rounded-lg bg-gray-200"></span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 mt-2 flex items-center pr-3.5 text-gray-500">
                    <FontAwesomeIcon className="h-4 w-4" icon={faChevronDown} />
                  </span>
                </span>
              </>
            )}
          </div>
        </button>
        <ul
          tabIndex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
          className={`${
            openOption ? 'visible opacity-100' : 'invisible opacity-0'
          } shadow-soft dropdown absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-b-lg border border-primary-light bg-white py-2 text-base transition duration-100 ease-in focus:outline-none sm:text-sm`}
        >
          {!providers?.length ? (
            <div className="flex flex-col items-center py-5">
              <EmptyIcon />
              <p className="mt-4 text-sm font-bold">No Providers Found</p>
              <p className="text-xs text-gray-400">This is a network error try again?</p>
              <button
                onClick={() => {
                  fetchProviders();
                  setOpenOptions(false);
                }}
                className="mt-2 rounded-lg bg-primary-base px-3 py-1 font-semibold text-white"
              >
                Retry
              </button>
            </div>
          ) : null}
          {providers?.length
            ? providers?.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedProvider(option);
                    setOpenOptions(false);
                  }}
                  className="group relative  mx-2 cursor-pointer select-none rounded-lg py-3 pl-5 pr-9 text-gray-900 hover:bg-primary-light"
                  role="option"
                >
                  <div className="flex items-center">
                    <span className="block truncate text-sm font-semibold">{option?.state?.name}</span>
                  </div>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    {selectedProvider?.state?._id === option?.state?._id ? (
                      <FontAwesomeIcon className="h-5 w-5 text-secondary-green" icon={faCheckCircle} />
                    ) : (
                      <span className="text-xs font-bold">{option?.disco?.shortName}</span>
                    )}
                  </span>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

ProviderSelectInput.defaultProps = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default ProviderSelectInput;
