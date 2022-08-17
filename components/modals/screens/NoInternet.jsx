import router from 'next/router';
import WifiIcon from '../../../public/svgs/wifi-error.svg';

import Modal from '../index';
import SecondaryButton from '../../Button/SecondaryButton';

const NoInternet = ({ close }) => {
  return (
    <Modal border={false} close={close}>
      <div className="-mt-4 px-6 lg:px-8">
        <WifiIcon className="mx-auto my-3" />
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold">No internet connection</h1>
        <p className="mt-4 text-center text-sm text-gray-400">
          We improved our systems to be safe and secure for all our customers by creating a 6-digit login Pin.
        </p>
        <div className="mt-5 mb-4 flex justify-center">
          <SecondaryButton size="base" onClick={() => router.reload(window.location.pathname)}>
            Reload
          </SecondaryButton>
        </div>
      </div>
    </Modal>
  );
};

export default NoInternet;
