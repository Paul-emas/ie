import { useEffect, useState } from 'react';
import Link from 'next/link';
import useFetchWalletTransactions from '../../hooks/useFetchWalletTransactions';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import BuyElectricityModal from '../../components/modals/screens/BuyElectricityModal';
import Pagination from '../../components/table/Pagination';
import TransactionsTable from '../../components/table/TransactionsTable';
import TransactionDataWallet from '../../components/table/TransactionDataWallet';
import TransactionWalletMobile from '../../components/table/TransactionWalletMobile';
import BaseButton from '../../components/Button/BaseButton';
import { setShowModal } from '../../slices/user';

export default function Transactions() {
  const headings = ['Transaction Type', 'Date', 'Reference Code', 'Amount', 'Status'];
  const dispatch = useDispatch();
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [totalDocs, setTotalDocs] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [paginatedTransactions, setPaginatedTransactions] = useState([]);
  const { data, transactions, pageLoading, error, tableLoading, init } = useFetchWalletTransactions(itemsPerPage);

  useEffect(() => {
    if (data) updateTransactionState(data);
  }, [data]);

  useEffect(() => {
    setPaginatedTransactions(transactions);
  }, [transactions, error]);

  const updateTransactionState = (data) => {
    if (data) {
      const { docs, totalDocs, totalPages } = data;
      setPaginatedTransactions(docs);
      setPageCount(totalPages);
      setTotalDocs(totalDocs);
    }
  };

  return (
    <div className="pb-10">
      {pageLoading && (
        <div className="pt-5 lg:pt-10">
          <div className="relative h-7 w-24 rounded-lg bg-primary-light py-2 px-4 sm:bg-white lg:h-10 lg:w-28"></div>
          <div className="mt-5 min-h-screen w-full rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      )}

      {!pageLoading && (
        <>
          <BuyElectricityModal open={openBuyElectricityModal} setOpen={setOpenBuyElectricityModal} />
          <div className="pt-5 sm:pt-10">
            <Link href="/transactions">
              <button className="relative flex items-center justify-center rounded-lg bg-primary-light py-2 px-4 text-xs font-semibold hover:opacity-80 lg:bg-white lg:text-sm">
                <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-3 w-3" />
                <span className="lg:mt-0.5">Go back</span>
              </button>
            </Link>
          </div>
          <TransactionsTable
            title="Wallet transactions"
            headings={headings}
            loading={tableLoading}
            transactions={paginatedTransactions}
            setOpenBuyElectricityModal={setOpenBuyElectricityModal}
            mobileView={() => <TransactionWalletMobile transactions={paginatedTransactions} />}
            paginate={() => (
              <Pagination
                items={paginatedTransactions}
                totalItems={totalDocs}
                itemsPerPage={itemsPerPage}
                pageCount={pageCount}
                fetch={(val) => init(val)}
              />
            )}
          >
            <TransactionDataWallet transactions={paginatedTransactions} />
          </TransactionsTable>
          <div className="fixed bottom-0 left-0 z-30 mt-5 flex w-full justify-center py-5 sm:hidden">
            <BaseButton onClick={() => dispatch(setShowModal('fundWallet'))}>Fund Wallet</BaseButton>
          </div>
        </>
      )}
    </div>
  );
}
