import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setUserPhone, setQuickBuy, persistSelector, setAnonymousToken } from '../../slices/persist';
import { setShowModal } from '../../slices/user';
import { userSignOut } from '../../slices/persist';
import { checkUserValidation } from '../../api';
import { validateMobileNo } from '../../utils';

import FormInput from './FormInput';
import SecondaryButton from '../Button/SecondaryButton';

const QuickBuyPhoneInput = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { isLoggedIn, userPhone } = useSelector(persistSelector);
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isNoValid, setNoIsValid] = useState(true);

  useEffect(() => {
    if (userPhone) {
      const { phone, country } = userPhone;
      setPhone(phone?.number);
      setCountry(country);
    }
  }, [userPhone]);

  useEffect(() => {}, []);

  async function onSubmit(fl) {
    if (isNoValid && phone?.length) {
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

      const { data, error } = await checkUserValidation(payload);

      if (error?.response?.status === 404) {
        dispatch(userSignOut());
        setIsLoading(false);
        dispatch(setUserPhone({ ...payload, country }));
        router.push('/quickbuy');
        return;
      }

      if (data) {
        const { isPin } = data;
        setIsLoading(false);
        dispatch(setQuickBuy(true));
        dispatch(setUserPhone({ ...payload, country }));

        if (isPin) {
          if (isLoggedIn) {
            if (phone !== userPhone?.phone?.number) {
              dispatch(userSignOut());
            } else {
              router.push('/dashboard');
            }
          } else {
            dispatch(setShowModal('signIn'));
          }
        } else {
          const { authorization } = data;
          dispatch(setAnonymousToken(authorization));
          dispatch(setShowModal('createPin'));
        }
      }
    }
  }

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

  return (
    <form className="px-5 pt-4 lg:px-8 2xl:px-8 2xl:pt-0" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        className="mt-2 py-2.5 px-5"
        type="phone"
        id="phone"
        label="Phone number"
        value={phone}
        error={!isNoValid}
        onChange={(num, country) => validate(num, country)}
      />
      <SecondaryButton loading={isLoading} className="mt-8 mb-7" type="large">
        Buy Electricity
      </SecondaryButton>
    </form>
  );
};

export default QuickBuyPhoneInput;
