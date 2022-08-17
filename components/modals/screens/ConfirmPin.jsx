import { useEffect, useState } from 'react';
import router from 'next/router';
import ReactCodeInput from 'react-code-input';

import { useDispatch, useSelector } from 'react-redux';
import { persistSelector, setIsLoggedIn, setUserPhone } from '../../../slices/persist';
import { userSelector, setUser, setShowModal } from '../../../slices/user';
import { createUserAuthPin, signUp } from '../../../api';

import Modal from '../index';
import SecondaryButton from '../../Button/SecondaryButton';
import ErrorAlert from '../../forms/ErrorAlert';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

const ConfirmPin = ({ close, setStep }) => {
  const dispatch = useDispatch();
  const { anonymousToken } = useSelector(persistSelector);
  const { registerData, authPin } = useSelector(userSelector);

  const [confirmPin, setConfirmPin] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (confirmPin?.length === 4) {
      onSubmit();
    }
  }, [confirmPin]);

  async function onSubmit(e) {
    e !== undefined && e.preventDefault();
    if (authPin === confirmPin) {
      if (!navigator.onLine) {
        dispatch(setShowModal('offline'));
        return;
      }
      setErrorMessage(null);
      if (registerData) {
        setIsLoading(true);
        const { name, phone, country, email, referral_no } = registerData;
        const formattedPhone = phone.replace(country.dialCode, '');
        const selectedNumber = {
          phone: {
            number: phone,
            code: country.dialCode,
            value: formattedPhone,
          },
        };

        const payload = {
          firstName: name,
          lastName: '',
          email,
          pin: authPin,
          country: country.name,
          ...selectedNumber,
          ...(referral_no !== '' && { referral_no }),
        };

        const { data, error } = await signUp(payload);

        dispatch(setUserPhone(selectedNumber));

        if (error) {
          setIsLoading(false);
          setErrorMessage(error.data.errors[0].message);
          return;
        }

        if (data) {
          setIsLoading(false);
          const { account, authorization } = data;
          Cookies.set('token', authorization);
          dispatch(setUser(account));
          dispatch(setIsLoggedIn(true));
          dispatch(setShowModal(null));
          router.push('/dashboard');
        }
      }

      if (anonymousToken && !registerData) {
        setIsLoading(true);
        const { status, error } = await createUserAuthPin({ pin: authPin }, anonymousToken);

        if (error) {
          setIsLoading(false);
          toast.success(error.data.errors[0].message);
          return;
        }

        if (status === 200) {
          setIsLoading(false);
          toast.success('Successfully created pin!');
          setStep('signIn');
        }
      }
    } else {
      setErrorMessage('Incorrect pin! Kindly confirm your pin');
    }
  }

  return (
    <Modal border={false} goBack={() => setStep('createPin')} close={close} isAuth>
      <div className="mt-2 px-6 lg:px-8">
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold">
          {`Let's make sure you don't forget, confirm your PIN`}
        </h1>
        <p className="mx-auto mt-3 max-w-xs text-center text-sm text-gray-700">
          Your pin will be used to login to your account
        </p>
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
            type="number"
            fields={4}
            autoFocus={true}
            onChange={(value) => setConfirmPin(value)}
          />
          <SecondaryButton size="base" className="mt-8" loading={isLoading}>
            Create PIN
          </SecondaryButton>
        </form>
        <div className="mt-5 text-center">
          <button className="text-sm">
            <span>Already have an account?</span>
            <span
              onClick={() => setStep('login')}
              className="ml-1 cursor-pointer font-bold text-primary-base hover:text-primary-hover"
            >
              Login
            </span>
          </button>
        </div>
      </div>
      {errorMessage && <ErrorAlert error={errorMessage} setError={setErrorMessage} />}
    </Modal>
  );
};

export default ConfirmPin;
