import { useEffect, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import SecondaryButton from '../Button/SecondaryButton';
import FormInput from '../forms/FormInput';
import { persistSelector, setUserPhone } from '../../slices/persist';
import { useDispatch, useSelector } from 'react-redux';
import { validateMobileNo } from '../../utils';

const ConfirmDetails = ({ setOpen, details, onPayStackSuccess, close }) => {
  const config = {
    reference: details?.reference,
    email: details?.account?.email?.value,
    amount: details?.gross * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUB_KEY,
  };

  const dispatch = useDispatch();
  const initializePayment = usePaystackPayment(config);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isNoValid, setNoIsValid] = useState(true);
  const { userPhone } = useSelector(persistSelector);

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

  return (
    <div>
      <div className="border-b border-gray-100 px-6 pt-3 pb-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold text-gray-500">Your Meter</span>
          <div className=" text-2.5xl font-bold text-secondary-green">{details?.meter?.number}</div>
          <button className="mt-1.5 rounded-lg bg-primary-light px-3 py-1 text-xs font-bold">
            {details?.meter?.name}
          </button>
          <div className="mt-6">
            <div className="mb-2 flex h-10 w-full items-center justify-between rounded-xl bg-primary-light px-4 text-xs">
              <span className="font-semibold text-gray-500">Reference code</span>
              <span className="font-bold">{details?.reference}</span>
            </div>
            <div className="mb-2 flex h-10 w-full items-center justify-between rounded-xl bg-primary-light px-4 text-xs">
              <span className="font-semibold text-gray-500">Service charge</span>
              <span className="font-bold">
                {details?.country?.currency} {details?.charge.fee}
              </span>
            </div>
            <div className="mb-2 flex h-10 w-full items-center justify-between rounded-xl bg-primary-light px-4 text-xs">
              <span className="font-semibold text-gray-500">Amount</span>
              <span className="font-bold">
                {details?.country?.currency} {details?.amount}
              </span>
            </div>
            <div className="flex h-10 w-full items-center justify-between rounded-xl border border-primary-dark bg-primary-light px-4 text-xs">
              <span className="font-semibold text-primary-dark">Total</span>
              <span className="font-bold">
                {details?.country?.currency} {details?.gross}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 pt-3">
        <FormInput
          className="mt-2 py-2.5 px-5"
          type="phone"
          id="phone"
          label="Phone number"
          value={phone}
          error={!isNoValid}
          onChange={(num, country) => validate(num, country)}
        />
        <div className="-mt-1 text-xs font-semibold text-primary-dark">Token generated will be sent to this number</div>
        <div className="mt-10">
          <SecondaryButton
            loading={isLoading}
            onClick={() => {
              setIsLoading(true);
              dispatch(
                setUserPhone({
                  phone: {
                    number: phone,
                    code: country.dialCode,
                    value: phone.replace(country.dialCode, ''),
                  },
                  country,
                }),
              );
              initializePayment(onPayStackSuccess, close);
              setOpen(false);
            }}
            size="base"
          >
            Confirm details
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

ConfirmDetails.propTypes = {};

export default ConfirmDetails;
