import GiftIcon from '../public/svgs/gift.svg';

const GiftBox = () => {
  return (
    <div className="sm_shadow w-full rounded-xl bg-white pt-5 pb-10 text-center sm:h-96 sm:py-5 lg:mt-10">
      <GiftIcon className="mx-auto my-5" />
      <div className="mt-3 text-2xl font-bold text-primary-darker">Electricity Gift Voucher</div>
      <p className="mx-auto  mt-1 max-w-lg px-10 text-xs text-gray-400 2xl:text-sm">
        You can now send gift vouchers to friends and family
      </p>
      <div className="my-4 mx-auto w-[140px] rounded-lg bg-secondary-tealGreen py-2.5 px-4 text-sm uppercase text-white lg:w-[180px] lg:text-base lg:font-semibold">
        Coming Soon
      </div>
    </div>
  );
};

GiftBox.propTypes = {};

export default GiftBox;
