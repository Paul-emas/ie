import LockIcon from '../../../public/svgs/lock.svg';

import Modal from '../index';
import BaseButton from '../../Button/BaseButton';

const CreatePinMessage = ({ setStep, close }) => {
  return (
    <Modal border={false} close={close} isAuth>
      <div className="-mt-4 px-6 lg:px-8">
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold text-primary-dark">
          Keep your account safe by securing it with a PIN
        </h1>
        <LockIcon className="mx-auto my-3" />
        <p className="mt-4 text-center text-sm text-gray-400">
          We improved our systems to be safe and secure for all our customers by creating a 4-digit login Pin.
        </p>
        <div className="mt-5 mb-4 flex justify-center">
          <BaseButton onClick={() => setStep('createPin')}>Create a Pin</BaseButton>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePinMessage;
