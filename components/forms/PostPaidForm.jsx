import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { userSelector } from '../../slices/user';
import { persistSelector } from '../../slices/persist';
import PlusIcon from '../../public/svgs/plus-meter.svg';

import SecondaryButton from '../Button/SecondaryButton';
import FormInput from './FormInput';
import SelectInput from './SelectInput';
import ProviderSelectInput from './ProviderSelectInput';

const PostPaid = ({ setSelectedMeter }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { me } = useSelector(userSelector);
  const { isLoggedIn, userPhone } = useSelector(persistSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (userPhone) {
      const { phone, country } = userPhone;
      setPhone(phone?.number);
      setCountry(country);
    }
  }, [userPhone]);

  async function onSubmit(formData) {}

  return (
    <>
      <form className="px-6 pt-4 lg:px-8" onSubmit={handleSubmit(onSubmit)}>
        {isLoggedIn && (
          <>
            <div className="label my-2 text-xs text-gray-400">Select an account</div>
            <SelectInput options={[]} selectedOption={null} setSelectedOption={setSelectedMeter} className="py-2.5" />
            <div onClick={() => {}} className="mb-2 flex w-full cursor-pointer items-center border-b pb-2">
              <PlusIcon />
              <span className="ml-1.5 text-sm font-semibold text-primary-base">Add a new account</span>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <>
            <FormInput
              className="mt-2 py-2.5 px-5"
              type="number"
              id="meter"
              errors={errors}
              placeholder="Enter account number"
              label="Account number"
              error={errors.meter_no ?? false}
              {...register('meter', {
                required: true,
              })}
            />
            <ProviderSelectInput
              className="mt-2 px-5"
              label="State of residence"
              placeholder="Enter account number"
              selectedProvider={selectedProvider}
              setSelectedProvider={setSelectedProvider}
            />
            <FormInput
              className="mt-2 py-2.5 px-5"
              type="text"
              id="name"
              placeholder="Enter your Full Name"
              label="Full name"
              error={errors.name && true}
              {...register('name', {
                minLength: 3,
              })}
            />
            <FormInput
              className="mt-2 py-2.5 px-5"
              id="prepaid-email"
              errors={errors}
              placeholder="Enter email address"
              label="Email Address"
              error={errors.email ?? false}
              {...register('email', {
                required: true,
              })}
            />
          </>
        )}
        <FormInput
          className="mt-2 px-5"
          type="currency"
          id="amount"
          errors={errors}
          label="How much will you like to purchase?"
          error={errors.amount ?? false}
          {...register('amount', {
            required: true,
          })}
        />
        {/* <div className="flex items-end">
          <p className="relative top-0.5 text-sm font-semibold text-gray-400">
            Estimated units: <span className="text-primary-base">32.5kw/h</span>
          </p>
          <span className="ml-3 h-5 w-5 rounded-full bg-blue-600 py-0.5 text-center text-xs font-bold text-white">
            ?
          </span>
        </div> */}
        <SecondaryButton size="base" loading={isLoading} className="mt-8">
          Proceed to Payment
        </SecondaryButton>
      </form>
    </>
  );
};

PostPaid.propTypes = {};

export default PostPaid;
