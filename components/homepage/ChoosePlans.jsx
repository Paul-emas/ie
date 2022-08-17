import React from 'react';
import SolarPlanCards from './SolarPlanCards';
import Icon from '../../public/svgs/motorcycle.svg';
import SupportIcon from '../../public/svgs/support.svg';

const ChoosePlans = () => {
  const plans = [
    {
      icon: Icon,
      title: 'Quick delivery',
      desc: 'Over 3 years experience in the courier/delivery business! Fast and easy on-line order.',
    },
    {
      icon: Icon,
      title: 'Quick delivery',
      desc: 'Over 3 years experience in the courier/delivery business! Fast and easy on-line order.',
    },
    {
      icon: Icon,
      title: 'Quick delivery 2',
      desc: 'Over 3 years experience in the courier/delivery business! Fast and easy on-line order.',
    },
    {
      icon: SupportIcon,
      title: 'Quick delivery 2',
      desc: 'Over 3 years experience in the courier/delivery business! Fast and easy on-line order.',
    },
  ];
  return (
    <div className="min-h-screen flex items-center bg-primary-base">
      <div className="container px-10 mx-auto">
        <div className="grid grid-cols-2 2xl:space-x-10 2xl:max-w-7xl mx-auto">
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl text-white  max-w-md leading-tight font-bold">
                Choose the right solar plan for home, business or enterprise use
              </h1>
              <div className="grid grid-cols-2 gap-x-5 mt-5">
                <div className="">
                  <button className="btn bg-white border-2 border-white text-primary-base transform uppercase">
                    Request Solar
                  </button>
                </div>
                <div className="mt-8">
                  <button className="px-10 text-center font-semibold text-white border-2 rounded-xl py-5 w-full transform uppercase">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex space-x-5 mt-20">
              <div className="w-1/2 space-y-5">
                {plans.splice(0, 2).map((plan, index) => (
                  <SolarPlanCards key={index} {...plan} />
                ))}
              </div>
              <div className="w-1/2 -mt-20 space-y-5">
                {plans.splice(0, 2).map((plan, index) => (
                  <SolarPlanCards key={index} {...plan} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlans;
