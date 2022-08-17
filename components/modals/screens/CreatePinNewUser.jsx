import { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import ConfettiIcon from '../../../public/svgs/confetti.svg';

import Modal from '../index';
import BaseButton from '../../Button/BaseButton';

const CreatePinNewUser = ({ setStep, close }) => {
  const { width, height } = useWindowSize();
  const [openConfetti, setOpenConfetii] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpenConfetii(false);
    }, 4000);
  }, []);

  return (
    <Modal border={false} close={close} isAuth>
      {openConfetti && <Confetti width={width} height={height} />}
      <div className="-mt-4 px-6 lg:px-8">
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold text-primary-dark">Congratulations!!</h1>
        <ConfettiIcon className="mx-auto my-3" />
        <p className="mx-auto mt-4 max-w-xs text-center text-sm text-gray-400">
          You just completed your transaction to enjoy more of our features create an account by creating a <br />{' '}
          4-digit login Pin.
        </p>
        <div className="mt-5 mb-4 flex justify-center">
          <BaseButton onClick={() => setStep('createPin')}>Create a Pin</BaseButton>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePinNewUser;
