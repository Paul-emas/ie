import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import WalletIcon from '../public/svgs/wallet-light.svg';
import { setShowModal, userSelector } from '../slices/user';

const WalletCard = ({ className }) => {
  const dispatch = useDispatch();
  const { walletBalance } = useSelector(userSelector);

  return (
    <div className={`${className} relative w-full overflow-hidden rounded-3xl bg-primary-base pt-9 pb-24`}>
      <div className="absolute right-0 top-0 z-10 h-full w-full sm:w-446">
        <img src="/images/wallet-banner.png" className="h-full w-full object-cover" />
      </div>
      <div className="absolute z-20 h-full w-full">
        <div className="z-20 flex justify-center px-12 sm:justify-between lg:items-center">
          <div className="hidden sm:block">
            <WalletIcon />
          </div>
          <div className="-mt-4 text-center text-white lg:-mt-0">
            <div className="sm:text-md text-gray-300">Your IE wallet</div>
            <div className="text-2xl font-bold sm:text-4xl">
              <span>&#8358;</span>
              <span className="ml-2">{walletBalance.toLocaleString()}</span>
              <Link href="/transactions/wallet">
                <button className="mt-2 block rounded-lg bg-secondary-transparentWhite px-3 text-xxs font-bold uppercase sm:hidden">
                  Wallet History
                </button>
              </Link>
            </div>
          </div>
          <div>
            <button
              onClick={() => dispatch(setShowModal('fundWallet'))}
              className="hidden rounded-lg bg-white py-3 px-5 text-xs font-bold uppercase sm:block"
            >
              Fund wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
