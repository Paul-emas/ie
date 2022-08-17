import { useState } from 'react';
import { useForm } from 'react-hook-form';
import isEmail from 'is-email';
import toast from 'react-hot-toast';
import FormInput from './FormInput';
import { sendEnquiry } from '../../api';

import SecondaryButton from '../Button/SecondaryButton';
import SocialCard from '../SocialCard';

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(formData) {
    if (formData) {
      setIsLoading(true);
      const resp = await sendEnquiry(formData);

      if (resp?.error) {
        setIsLoading(false);
        toast.error(resp?.error?.message);
      }

      if (resp?.status === 200) {
        setIsLoading(false);
        reset();
        toast.success('Message has been delivered successfully');
      }
    }
  }

  return (
    <div className="shadow-soft w-modal rounded-2xl bg-white">
      <div className="px-6 pt-5 lg:px-8">
        <div className="relative top-1 text-center text-xl font-bold">Feedback form</div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <FormInput
            label="Your name"
            placeholder="Enter your name"
            className="mt-2 py-2.5 px-5"
            error={errors?.name ?? false}
            {...register('name', { required: true })}
          />
          <FormInput
            label="Your email"
            type="email"
            placeholder="Enter your email address"
            className="mt-2 py-2.5 px-5"
            error={errors?.email ?? false}
            {...register('email', { required: true, validate: (value) => isEmail(value) })}
          />
          <FormInput
            label="Message"
            type="textarea"
            placeholder="Enter your name"
            error={errors?.message ?? false}
            {...register('message', { required: true })}
          />
          <div className="mt-6">
            <SecondaryButton size="base" loading={isLoading}>
              Send message
            </SecondaryButton>
          </div>
        </form>
      </div>
      <div className="mt-10 border-t pb-10">
        <SocialCard />
      </div>
    </div>
  );
};

export default ContactForm;
