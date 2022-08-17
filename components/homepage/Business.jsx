import SolarPlanCards from './SolarPlanCards';
import Icon from '../../public/svgs/motorcycle.svg';

const Business = () => {
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
  ];

  return (
    <div className="py-40 bg-primary-dark">
      <div className="container mx-auto px-10">
        <h1 className="text-5xl font-bold max-w-xl text-center mx-auto  text-white">
          Built for Home & Businesses big or small
        </h1>

        <div className="flex mt-24 max-w-6xl space-x-24 mx-auto">
          {plans.map((plan, index) => (
            <div key={index}>
              <SolarPlanCards {...plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
