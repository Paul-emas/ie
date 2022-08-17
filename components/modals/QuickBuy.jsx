import Link from 'next/link';
import QuickBuyPhoneInput from '../forms/QuickBuyPhoneInput';

const QuickBuy = () => {
  return (
    <>
      <div
        id="box"
        className="ease shadow-soft relative top-16 z-20 -mt-72 ml-auto h-[360px] w-full rounded-2xl bg-white sm:-mt-0 lg:w-w-modal lg:rounded-3xl 2xl:h-modal-sm"
      >
        <div className="hide">
          <div className="lg:pt-8">
            <div className="max-w-md">
              <h2 className="px-8 pt-8 text-center text-xl font-bold leading-tight text-black lg:mb-2 lg:py-0 lg:text-left lg:text-32xl 2xl:mb-5 2xl:leading-tight ">
                Easy, Smart <span className="text-secondary-green">Energy</span> <br /> Pre-pay
              </h2>
            </div>
            <QuickBuyPhoneInput />
          </div>
          <div className="relative top-1 flex h-16 w-full items-center justify-center rounded-b-2xl bg-primary-light text-sm font-medium text-primary-dark lg:text-base">
            <span>Having trouble?</span>
            <Link href="/contact">
              <a className="ml-2 font-semibold text-primary-base">Get help</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

QuickBuy.propTypes = {};

export default QuickBuy;
