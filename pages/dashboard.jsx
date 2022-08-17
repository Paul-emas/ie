import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFetchTransaction from '../hooks/useFetchTransaction';
import { persistSelector, setQuickBuy } from '../slices/persist';
import { userSelector } from '../slices/user';

import SolarCard from '../components/ads/SolarCard';
import BaseButton from '../components/Button/BaseButton';
import Chart from '../components/Chart';
import BuyElectricityModal from '../components/modals/screens/BuyElectricityModal';
import DashboardSkeleton from '../components/skeletons/DashboardSkeleton';

import TransactionsTable from '../components/table/TransactionsTable';
import TransactionDataDefault from '../components/table/TransactionDataDefault';
import TransactionDataMobile from '../components/table/TransactionDataMobile';
import GiftBox from '../components/GiftCard';

export default function Dashboard() {
  const headings = ['Meter name', 'Date', 'Distributor', 'Meter No.', 'Reference Code', 'Amount', 'Status', ''];
  const dispatch = useDispatch();
  const { quickbuy, isLoggedIn } = useSelector(persistSelector);
  const { me } = useSelector(userSelector);

  const { transactions, pageLoading } = useFetchTransaction(10);
  const [step, setStep] = useState(0);
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [chartSelectedMonth, setChartSelectedMonth] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [transactionReference, setTransactionReference] = useState('');

  const modalProps = {
    step,
    setStep,
    transactionReference,
    setTransactionReference,
    receipt,
    setReceipt,
  };

  const tableDataProps = {
    transactions,
    setReceipt,
    setStep,
    setTransactionReference,
  };

  useEffect(() => {
    if (quickbuy && !pageLoading) {
      setOpenBuyElectricityModal(true);
      setTimeout(() => {
        dispatch(setQuickBuy(false));
      }, 200);
    }
  }, [pageLoading]);

  return (
    <div className="pt-12 pb-10 lg:pt-0">
      {pageLoading && (
        <div className="2xl:pt-10">
          <DashboardSkeleton />
        </div>
      )}
      {!pageLoading && (
        <>
          <BuyElectricityModal open={openBuyElectricityModal} setOpen={setOpenBuyElectricityModal} {...modalProps} />
          <div className="2xl:pt-10">
            <div className="hidden items-center justify-between sm:flex">
              <div>
                <h1 className="scale-up text-heading  font-bold">
                  {me?.firstName ? `Hello ${me.firstName?.split(' ')[0]} 👋` : 'Buy Electricity'}
                </h1>
                <p className="text-md scale-up font-medium text-font-muted">
                  Recharge meter, Get visibility, Track your spending & Usage
                </p>
              </div>
              <BaseButton onClick={() => setOpenBuyElectricityModal(true)}>BUY ELECTRICITY</BaseButton>
            </div>
            <div className="grid lg:grid-cols-6 lg:space-x-5">
              <div className="scale-up lg:col-span-4">
                <Chart
                  title="Monthly Spend"
                  selectedMonth={chartSelectedMonth}
                  setSelectedMonth={setChartSelectedMonth}
                />
              </div>
              <div className="scale-up lg:col-span-2">
                <GiftBox />
              </div>
            </div>
            <SolarCard className="scale-up hidden lg:block" />
          </div>
          <div className="fixed bottom-0 left-0 z-30 mt-5 flex w-full justify-center py-5 sm:hidden">
            <BaseButton onClick={() => setOpenBuyElectricityModal(true)}>Buy Electricity</BaseButton>
          </div>
          <div className="scale-up">
            <TransactionsTable
              headings={headings}
              transactions={transactions}
              setOpenBuyElectricityModal={setOpenBuyElectricityModal}
              mobileView={() => <TransactionDataMobile setOpen={setOpenBuyElectricityModal} {...tableDataProps} />}
            >
              <TransactionDataDefault setOpen={setOpenBuyElectricityModal} {...tableDataProps} />
            </TransactionsTable>
          </div>
          {isLoggedIn && <SolarCard className="block lg:hidden" />}
        </>
      )}
    </div>
  );
}
