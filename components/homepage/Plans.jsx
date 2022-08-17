import { useForm } from 'react-hook-form';

import FormInput from '../forms/FormInput';
import PlanCards from './PlanCards';

const Plans = ({ gray }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className={`${gray ? 'bg-gray-100' : 'bg-secondary-lightBlue'} py-20`}>
      <div className="container px-10 mx-auto">
        <h1 className="text-5xl font-bold max-w-xl text-center mx-auto ">
          Choose a solar plan
        </h1>
        <div className="w-44 mx-auto my-5">
          <FormInput
            className="py-2.5 px-5 mt-2"
            type="select"
            id="package"
            placeholder="Enter account number"
            options={['Bill Monthly', 'whats up']}
            {...register('package', {
              required: true,
            })}
          />
        </div>
        <div className="grid grid-cols-3 max-w-6xl 2xl:max-w-5xl mx-auto mt-16">
          <PlanCards
            plan="Basic plan"
            bg="bg-secondary-blue"
            hover="hover:bg-secondary-blue"
            textColor="text-secondary-blue"
            years="1.5"
            price="250"
          />
          <PlanCards
            plan="Standard plan"
            bg="bg-secondary-green"
            hover="hover:bg-secondary-green"
            textColor="text-secondary-green"
            years="2.5"
            price="500"
          />
          <PlanCards
            plan="Premium plan"
            bg="bg-secondary-purple"
            hover="hover:bg-secondary-purple"
            textColor="text-secondary-purple"
            years="3"
            price="900"
          />
        </div>
        <div className="text-center mt-24">
          <p className="text-primary-darker font-semibold">
            <span>Didn&apos;t find your plan</span>
            <a href="" className="ml-2 text-secondary-blue">
              Create a custom plan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plans;
