import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import isEmail from 'is-email';
import { persistSelector } from '../../../slices/persist';
import { setShowModal, setRegisterData } from '../../../slices/user';

import Modal from '../index';
import SecondaryButton from '../../Button/SecondaryButton';
import ErrorAlert from '../../forms/ErrorAlert';
import FormInput from '../../forms/FormInput';
import { validateMobileNo } from '../../../utils';

const Register = ({ close, setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isNoValid, setNoIsValid] = useState(true);

  const [phone, setPhone] = useState('');
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

  const onSubmit = async (formData) => {
    if (!navigator.onLine) {
      dispatch(setShowModal('offline'));
      return;
    }
    const payload = {
      phone,
      country,
      ...formData,
    };
    dispatch(setRegisterData(payload));
    setStep('createPinMessage');
  };

  return (
    <Modal border={false} close={close} isAuth>
      <div className="-mt-4 px-6 lg:px-8">
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold">Create an account</h1>
        <p className="mt-3 text-center text-sm text-gray-700">Buy electricity units easily with Instant Energy</p>
        {errorMessage && <ErrorAlert error={errorMessage} setError={setErrorMessage} />}
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormInput
            className="mt-2 py-2.5 px-5"
            type="text"
            id="name"
            placeholder="Enter your Full Name"
            label="Full name"
            error={errors.name && true}
            {...register('name', {
              required: true,
              minLength: 3,
            })}
          />
          <FormInput
            className="mt-2 py-2.5 px-5"
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            label="Email address"
            error={errors.email && true}
            {...register('email', {
              required: true,
              validate: (value) => isEmail(value),
            })}
          />
          <FormInput
            className="mt-2 py-2 px-4"
            type="phone"
            id="phone"
            label="Phone number"
            value={phone}
            error={!isNoValid}
            onChange={(num, country) => validate(num, country)}
          />
          <FormInput
            className="mt-2 py-2.5 px-5"
            type="text"
            id="referral_no"
            placeholder="Referral Code"
            label="Referral code (Optional)"
            {...register('referral_no')}
          />
          <div className="mt-2 pr-10 text-xs text-gray-500">
            By creating an account with Instant Energy, you are agreeing to our{' '}
            <strong className="text-black">Privacy Policy</strong> and{' '}
            <strong className="text-black">Terms & Condition</strong>
          </div>
          <SecondaryButton size="base" className="mt-8">
            Create account
          </SecondaryButton>
        </form>
        <div className="text-blue mt-3.5 text-sm text-gray-500">
          Already a user?{' '}
          <span
            onClick={() => setStep('login')}
            className="cursor-pointer font-semibold text-primary-base hover:text-primary-hover"
          >
            Login
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default Register;
