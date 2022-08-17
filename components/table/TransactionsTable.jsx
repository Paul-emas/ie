import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import TransactionEmptyState from './empty-states/TransactionEmptyState';
import BaseButton from '../Button/BaseButton';

import Table from './index';
import Tabs from '../tabs';

const TransactionsTable = ({
  title,
  headings,
  transactions,
  mobileView,
  setOpenBuyElectricityModal,
  loading,
  paginate,
  children,
}) => {
  const router = useRouter();
  const tabsData = [{ name: 'Prepaid' }, { name: 'Postpaid' }];
  const [activeTab, setActiveTab] = useState(0);

  const tableProps = {
    title,
    loading,
    viewAll: function view() {
      return (
        <>
          {router.asPath !== '/quickbuy' && (
            <>
              {router.asPath === '/dashboard' ? (
                <Link href="/transactions">
                  <button className="w-24 rounded-lg bg-primary-light py-2.5 text-sm font-semibold hover:opacity-80">
                    <span className="relative flex items-center justify-center">
                      <span className="mr-2">See all</span>
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
                    </span>
                  </button>
                </Link>
              ) : (
                <>
                  {!router.asPath.includes('/wallet') && (
                    <Link href="/transactions/wallet">
                      <a>
                        <BaseButton>Wallet History</BaseButton>
                      </a>
                    </Link>
                  )}
                </>
              )}
            </>
          )}
        </>
      );
    },
    tabs: function view() {
      return (
        <>
          {router.asPath !== '/transactions/wallet' && (
            <Tabs data={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </>
      );
    },
    child: function view() {
      return (
        <>
          {transactions.length <= 0 && !loading ? (
            <TransactionEmptyState setOpenBuyElectricityModal={setOpenBuyElectricityModal} />
          ) : null}

          {paginate && paginate()}
        </>
      );
    },
  };

  return (
    <Table {...tableProps}>
      <div className="hidden overflow-hidden lg:block">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              {headings?.map((heading, index) => (
                <th
                  key={`${heading}${index}`}
                  scope="col"
                  className="border-t border-b px-6 py-6 text-left text-xs font-semibold tracking-wider text-gray-500 lg:uppercase"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      <div className="block lg:hidden">{mobileView && mobileView()}</div>
      {router.asPath === '/dashboard' && transactions.length > 0 && (
        <div className="flex justify-center pb-5 lg:hidden">
          <Link href="/transactions">
            <button className="w-24 rounded-lg bg-primary-light py-2.5 text-sm font-semibold hover:opacity-80">
              <span className="relative flex items-center justify-center">
                <span className="mr-2">See all</span>
                <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
              </span>
            </button>
          </Link>
        </div>
      )}
    </Table>
  );
};

TransactionsTable.displayName = 'TransactionsTable';

TransactionsTable.defaultProps = {
  title: 'Your transactions',
  headings: [],
  mobileView: () => null,
  meters: [],
  setOpenBuyElectricityModal: () => null,
  loading: false,
  paginate: () => null,
};

TransactionsTable.propTypes = {
  title: PropTypes.string,
  headings: PropTypes.array,
  mobileView: PropTypes.func,
  meters: PropTypes.array,
  setOpenBuyElectricityModal: PropTypes.func,
  loading: PropTypes.bool,
  paginate: PropTypes.func,
};

export default TransactionsTable;
