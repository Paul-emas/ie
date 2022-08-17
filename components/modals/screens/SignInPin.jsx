import { useState } from 'react';
import router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector, setIsLoggedIn } from '../../../slices/persist';
import { setShowModal, setUser } from '../../../slices/user';
import { logIn } from '../../../api';
import ReactCodeInput from 'react-code-input';

import Modal from '../index';
import ErrorAlert from '../../forms/ErrorAlert';
import SecondaryButton from '../../Button/SecondaryButton';
import BottomDownload from '../BottomDownload';
import Cookies from 'js-cookie';

const SignInPin = ({ close, setStep }) => {
  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [pin, setPin] = useState('');

  const onSubmit = async (e) => {
    e !== undefined && e.preventDefault();
    if (userPhone && pin.length === 4) {
      if (!navigator.onLine) {
        dispatch(setShowModal('offline'));
      }

      setIsLoading(true);
      const payload = {
        ...userPhone,
        pin: pin,
      };
      const { data, error } = await logIn(payload);

      if (error) {
        setIsLoading(false);
        setErrorMessage('Incorrect pin! Kindly confirm your pin');
        return;
      }

      if (data) {
        setIsLoading(false);
        const { user, authorization } = data;
        Cookies.set('token', authorization);
        dispatch(setUser(user));
        dispatch(setIsLoggedIn(true));
        dispatch(setShowModal(null));
        close();
        router.push('/dashboard');
      }
    }
  };

  return (
    <Modal border={false} close={close} isAuth>
      <div className="-mt-4 px-6 lg:px-8">
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold">Sign in to your account</h1>
        <p className="mt-3 text-center text-sm text-gray-700">Your 4-digit access code</p>
        <form className="mt-10 flex flex-col items-center" onSubmit={onSubmit}>
          <ReactCodeInput
            inputStyle={{
              fontFamily: 'Red Hat Display',
              fontWeight: 'bold',
              margin: '4px',
              width: '50px',
              borderRadius: '12px',
              fontSize: '32px',
              height: '50px',
              textAlign: 'center',
              backgroundColor: '#fff',
              border: '1px solid #1D1D1D',
            }}
            pattern="^[1-9]+[0-9]*$"
            type="number"
            fields={4}
            autoFocus={true}
            onChange={(value) => setPin(value)}
          />
          <SecondaryButton size="base" className="mt-8" loading={isLoading}>
            Continue
          </SecondaryButton>
        </form>
        <div className="mt-5 text-center">
          <button className="text-sm">
            <span>Having trouble getting in?</span>
            <span onClick={() => setStep('reset')} className="ml-1 font-bold text-primary-base">
              Forgot Pin
            </span>
          </button>
        </div>
      </div>
      {errorMessage ? <ErrorAlert error={errorMessage} setError={setErrorMessage} /> : <BottomDownload />}
    </Modal>
  );
};

export default SignInPin;
