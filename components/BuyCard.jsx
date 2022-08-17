import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setShowModal } from '../slices/user';

import BaseButton from './Button/BaseButton';

const BuyCard = ({ setOpenBuyElectricityModal }) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState('');
  const curHr = new Date().getHours();

  useEffect(() => {
    if (curHr < 12) {
      setTime('Morning');
    } else if (curHr < 18) {
      setTime('Afternoon');
    } else {
      setTime('Evening');
    }
  }, [curHr]);

  return (
    <div className="h-224 w-full rounded-xl bg-white py-7 px-5 lg:w-1/2 lg:p-7">
      <div className="text-xl font-bold leading-snug lg:text-3.5xl">Good {time} 👀,</div>
      <p className="max-w-lg text-xs text-gray-500 lg:text-base">
        Quickly add a PIN to secure your account and gain access to your payment history, track your spending, meter
        records and more.
      </p>
      <div className="mt-3 lg:mt-8 lg:pt-2">
        <div className="flex w-full flex-col justify-end space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4">
          <BaseButton light onClick={() => dispatch(setShowModal('createPinMessage'))}>
            Create a PIN
          </BaseButton>
          <BaseButton onClick={() => setOpenBuyElectricityModal(true)}>Buy Electricity</BaseButton>
        </div>
      </div>
    </div>
  );
};

BuyCard.propTypes = {
  setOpenBuyElectricityModal: PropTypes.func,
};

export default BuyCard;
