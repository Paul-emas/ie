import { useEffect, useState } from 'react';
import useFetchTransaction from '../../hooks/useFetchTransaction';

import WalletCard from '../../components/WalletCard';
import BuyElectricityModal from '../../components/modals/screens/BuyElectricityModal';
import Pagination from '../../components/table/Pagination';
import TransactionsTable from '../../components/table/TransactionsTable';
import TransactionDataDefault from '../../components/table/TransactionDataDefault';
import TransactionDataMobile from '../../components/table/TransactionDataMobile';

export default function Transactions() {
  const headings = ['Meter name', 'Date', 'Distributor', 'Meter No.', 'Reference Code', 'Amount', 'Status', ''];
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [totalDocs, setTotalDocs] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const { data, transactions, pageLoading, tableLoading, init } = useFetchTransaction(itemsPerPage);
  const [pageCount, setPageCount] = useState(0);
  const [paginatedTransactions, setPaginatedTransactions] = useState(transactions);
  const [step, setStep] = useState(0);
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
    if (data) {
      const { docs, totalDocs, totalPages } = data;
      setPaginatedTransactions(docs);
      setPageCount(totalPages);
      setTotalDocs(totalDocs);
    }
  }, [data]);

  return (
    <div className="pt-12 pb-10 lg:pt-0">
      {pageLoading && (
        <div className="pt-5 sm:pt-10">
          <div className="w-full rounded-3xl bg-primary-light py-16 sm:bg-white"></div>
          <div className="mt-5 min-h-screen w-full rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      )}

      {!pageLoading && (
        <>
          <BuyElectricityModal open={openBuyElectricityModal} setOpen={setOpenBuyElectricityModal} {...modalProps} />
          <div className="pt-5 sm:pt-10">
            <WalletCard />
          </div>
          <TransactionsTable
            headings={headings}
            loading={tableLoading}
            transactions={paginatedTransactions}
            setOpenBuyElectricityModal={setOpenBuyElectricityModal}
            mobileView={() => <TransactionDataMobile setOpen={setOpenBuyElectricityModal} {...tableDataProps} />}
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
            <TransactionDataDefault setOpen={setOpenBuyElectricityModal} {...tableDataProps} />
          </TransactionsTable>
        </>
      )}
    </div>
  );
}
