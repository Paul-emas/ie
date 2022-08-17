import BallonIcon from '../../../public/svgs/ballon.svg';

import Modal from '../index';
import BaseButton from '../../Button/BaseButton';

const Welcome = ({ close }) => {
  return (
    <Modal border={false} close={close}>
      <div className="-mt-4 px-6 lg:px-8">
        <BallonIcon className="mx-auto mb-5" />
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold text-primary-dark">Welcome to Instant Energy</h1>
        <p className="mt-4 mb-8 text-center text-sm text-gray-400">
          Explore amazing features that help you purchase electricity tokens even quicker, fund your wallet and track
          your electricity spending.
        </p>
        <div className="flex justify-center lg:mb-5">
          <BaseButton onClick={() => close()}>Okay, Got it</BaseButton>
        </div>
      </div>
    </Modal>
  );
};

export default Welcome;
