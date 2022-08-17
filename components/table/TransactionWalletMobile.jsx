import PropTypes from 'prop-types';
import moment from 'moment';

const TransactionWalletMobile = ({ transactions }) => {
  return (
    <>
      {transactions.map((transaction, index) => {
        const active = transaction?.status === 'success' ? true : false;
        return (
          <div className="px-3 py-4" key={`${transaction}${index}`}>
            <div className="w-full rounded-xl border-2 border-gray-200 bg-white pb-6">
              <div className="transactions-center flex justify-between border-b py-3 px-4">
                <div className="text-sm font-semibold text-gray-500">Ref: {transaction?.reference}</div>
                <div className="text-sm font-semibold text-gray-500">
                  {moment(transaction?.createdAt).utc().format('L')}{' '}
                  <span className="ml-1">{moment(transaction?.createdAt).format('LT')}</span>
                </div>
              </div>
              <div className="transactions-center flex justify-between py-3 px-4">
                <div className="text-sm font-bold">Wallet Transaction</div>
                <div className="text-sm font-semibold">
                  <span className="font-semibold">{transaction?.account?.country?.currency}</span>
                  <span className="ml-1 font-bold text-font-dark">{transaction?.amount.toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-2 px-4">
                <div className="flex items-center">
                  {active && (
                    <span className="inline-flex cursor-pointer rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold capitalize leading-5 text-font-green">
                      Success
                    </span>
                  )}
                  {!active && (
                    <span className="relative inline-flex rounded-lg bg-red-100 px-3 py-1 text-xs font-semibold capitalize leading-5 text-red-600">
                      Attempted
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

TransactionWalletMobile.defaultProps = {
  transactions: [],
};

TransactionWalletMobile.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionWalletMobile;
