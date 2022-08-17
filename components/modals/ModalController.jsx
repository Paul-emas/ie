import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setShowModal, userSelector } from '../../slices/user';
import ConfirmPin from './screens/ConfirmPin';
import CreatePin from './screens/CreatePin';
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPin from './screens/ResetPin';
import SignInPin from './screens/SignInPin';
import CreatePinMessage from './screens/CreatePinMessage';
import CreatePinNewUser from './screens/CreatePinNewUser';
import NoInternet from './screens/NoInternet';
import FundWallet from './screens/FundWallet';
import Welcome from './screens/Welcome';

const ModalController = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector(userSelector);
  const [step, setStep] = useState(null);

  useEffect(() => {
    if (showModal) {
      setStep(showModal);
    } else {
      close();
    }
  }, [showModal]);

  function close() {
    dispatch(setShowModal(null));
    setStep(null);
  }

  const modalProps = { close, setStep };

  return (
    <>
      {showModal && (
        <div>
          {step === 'login' && <Login {...modalProps} />}
          {step === 'register' && <Register {...modalProps} />}
          {step === 'signIn' && <SignInPin {...modalProps} />}
          {step === 'reset' && <ResetPin {...modalProps} />}
          {step === 'createPinMessage' && <CreatePinMessage {...modalProps} />}
          {step === 'createPinNewUser' && <CreatePinNewUser {...modalProps} />}
          {step === 'createPin' && <CreatePin {...modalProps} />}
          {step === 'confirmPin' && <ConfirmPin {...modalProps} />}
          {step === 'fundWallet' && <FundWallet {...modalProps} />}
          {step === 'offline' && <NoInternet close={close} />}
          {step === 'welcome' && <Welcome close={close} />}
        </div>
      )}
    </>
  );
};

export default ModalController;
