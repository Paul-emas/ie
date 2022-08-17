import TicketIcon from '../../public/svgs/ticket.svg';
import CheckIcon from '../../public/svgs/check.svg';

const PlanCards = ({ plan, years, price, bg, hover, textColor }) => {
  const packages = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div
      className={`w-74 h-562 bg-white group ${hover} duration-150 rounded-3xl border`}
    >
      <div className="px-7 py-6 border-b group-hover:border-secondary-transparentWhite">
        <div className="flex items-center">
          <div
            className={`w-12 h-12 ${bg} bg- group-hover:bg-secondary-transparentWhite rounded-xl`}
          >
            <TicketIcon className="mx-auto my-4" />
          </div>
          <div className="ml-3">
            <h2 className=" font-bold text-xl text-primary-darker group-hover:text-white">
              {plan}
            </h2>
            <p className="text-xs mt-0.5 text-gray-400 group-hover:text-gray-200">
              Own after {years} years
            </p>
          </div>
        </div>
      </div>
      <div className="px-7 py-6 border-b group-hover:border-secondary-transparentWhite">
        {packages.map((el, index) => (
          <p
            key={index}
            className="flex font-medium text-primary-darker items-center mb-3.5 group-hover:text-white"
          >
            <CheckIcon />
            <span className="ml-4 text-sm">6 months of peace of mind</span>
          </p>
        ))}
      </div>
      <div className="px-5 h-44">
        <div className="text-center flex justify-center flex-col items-center h-full">
          <div className="group-hover:-translate-y-7 transform relative duration-150 delay-200 top-5">
            <span className="text-xs text-gray-400 group-hover:text-gray-200">
              You pay
            </span>
            <p className="text-3xl text-primary-darker font-bold  group-hover:text-white">
              N{price}k
            </p>
            <span className="text-xs text-primary-darker group-hover:text-white">
              Per month
            </span>
          </div>
          <button
            className={`w-full text-sm active:bg-gray-200 bg-white ${textColor} py-2.5 rounded-xl delay-200 font-semibold scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-150 transform`}
          >
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCards;
