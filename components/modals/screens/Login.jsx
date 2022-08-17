import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { persistSelector, setAnonymousToken, setUserPhone } from '../../../slices/persist';
import { setShowModal } from '../../../slices/user';
import { checkUserValidation } from '../../../api';

import Modal from '../index';
import SecondaryButton from '../../Button/SecondaryButton';
import FormInput from '../../forms/FormInput';
import SocialCard from '../../SocialCard';
import { validateMobileNo } from '../../../utils';

const Login = ({ close, setStep }) => {
  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const { handleSubmit } = useForm();
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isNoValid, setNoIsValid] = useState(true);
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (userPhone) {
      const { phone, country } = userPhone;
      setPhone(phone?.number);
      setCountry(country);
    }
  }, [userPhone]);

  function validate(num, country) {
    const isValid = validateMobileNo(num);
    if (isValid) {
      setNoIsValid(true);
      setPhone(num);
      setCountry(country);
    } else {
      setNoIsValid(false);
      setPhone(num);
    }
  }

  const onSubmit = async () => {
    if (phone?.length && isNoValid) {
      if (!navigator.onLine) {
        dispatch(setShowModal('offline'));
        return;
      }

      setIsLoading(true);
      const formattedPhone = phone.replace(country.dialCode, '');
      const payload = {
        phone: {
          number: phone,
          code: country.dialCode,
          value: formattedPhone,
        },
      };

      dispatch(setUserPhone({ ...payload, country }));
      const { data, error } = await checkUserValidation(payload);

      if (error?.response?.status === 404) {
        setIsLoading(false);
        setStep('register');
      }

      if (data) {
        setIsLoading(false);
        const { isPin } = data;
        if (isPin) {
          setStep('signIn');
        } else {
          const { authorization } = data;
          dispatch(setAnonymousToken(authorization));
          setStep('createPin');
        }
      }
    }
  };

  return (
    <Modal border={false} close={close} isAuth>
      <div className="-mt-4 px-6 sm:px-10">
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold">Hey there, Welcome to Instant Energy</h1>
        <p className="mt-3 text-center text-sm text-gray-700">Enter your phone number to continue</p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="mt-2 py-2 px-4"
            type="phone"
            id="phone"
            label="Phone number"
            value={phone}
            error={!isNoValid}
            onChange={(num, country) => validate(num, country)}
          />
          <SecondaryButton className="mt-8" size="base" disabled={isLoading} loading={isLoading}>
            Continue
          </SecondaryButton>
        </form>
        <div className="text-blue mt-3.5 text-sm text-gray-500 lg:text-sm">
          Dont have an account?{' '}
          <span
            onClick={() => setStep('register')}
            className="cursor-pointer font-semibold text-primary-base hover:text-primary-hover"
          >
            Register
          </span>
        </div>
      </div>
      <div className="mt-10 border-t sm:pb-3">
        <SocialCard />
      </div>
    </Modal>
  );
};

export default Login;
