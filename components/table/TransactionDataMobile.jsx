import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import moment from 'moment';
import { retryTransaction } from '../../api';

const TransactionDataMobile = ({ setReceipt, setOpen, setTransactionReference, setStep, transactions }) => {
  const router = useRouter();
  const data = router.asPath === '/dashboard' ? transactions.slice(0, 2) : transactions;

  async function Retry(reference) {
    setStep(3);
    setOpen(true);
    setTransactionReference(reference);
    const resp = await retryTransaction({ reference });

    if (resp?.error) {
      setStep(2);
      return;
    }

    if (resp?.data) {
      setReceipt(resp.data);
      setStep(4);
    }
  }

  return (
    <>
      {data.map((transaction, index) => {
        const active = transaction?.status === 'success' ? true : false;

        return (
          <div className="block px-3 py-4 lg:hidden" key={`${transaction}${index}`}>
            <div className="w-full rounded-xl border-2 border-gray-200 bg-white pb-6">
              <div className="transactions-center flex justify-between border-b py-3 px-4">
                <div className="text-sm font-semibold text-gray-500">Ref: {transaction?.reference}</div>
                <div className="text-sm font-semibold text-gray-500">
                  {moment(transaction?.createdAt).utc().format('L')}{' '}
                  <span className="ml-1">{moment(transaction?.createdAt).format('LT')}</span>
                </div>
              </div>
              <div className="transactions-center flex justify-between py-3 px-4">
                <div className="text-sm font-bold">Unit purchased</div>
                <div className="text-sm font-semibold">
                  <span className="font-semibold">{transaction?.country?.currency}</span>
                  <span className="ml-1 font-bold text-font-dark">{transaction?.amount.toLocaleString()}</span>
                </div>
              </div>
              <div className="transactions-center -mt-2 flex justify-between px-4">
                <div className="text-xs font-semibold text-gray-500">{transaction?.meter?.number}</div>
                <div className="text-xs font-semibold text-primary-dark text-opacity-80">
                  {transaction?.meter?.provider?.disco?.shortName}
                </div>
              </div>
              <div className="mt-2 px-4">
                <div className="flex items-center justify-between">
                  <p className="max-w-[150px] truncate rounded-md bg-primary-light py-1 px-3 text-xs font-semibold text-primary-base">
                    <span className="">{transaction?.meter?.address}</span>
                  </p>
                  {active && (
                    <span
                      onClick={() => {
                        setReceipt(transaction);
                        setOpen(true);
                        setStep(4);
                      }}
                      className="inline-flex cursor-pointer rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold capitalize leading-5 text-font-green"
                    >
                      Open Receipt
                    </span>
                  )}
                  {!active && (
                    <span
                      onClick={() => Retry(transaction?.reference)}
                      className="relative inline-flex rounded-lg bg-red-100 px-3 py-1 text-xs font-semibold capitalize leading-5 text-red-600"
                    >
                      Retry
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

TransactionDataMobile.defaultProps = {
  transactions: [],
};

TransactionDataMobile.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionDataMobile;
