import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Table from './index';
import Tabs from '../tabs';
import MetersEmptyState from './empty-states/MetersEmptyState';
import BaseButton from '../Button/BaseButton';

const MetersTable = ({ title, headings, mobileView, meters, setOpenAddMeterModal, loading, paginate, children }) => {
  const tabsData = [{ name: 'Prepaid' }, { name: 'Postpaid' }];
  const [activeTab, setActiveTab] = useState(0);

  const tableProps = {
    title,
    loading,
    viewAll: function view() {
      return (
        <BaseButton onClick={() => setOpenAddMeterModal(true)}>
          <span className="flex items-center uppercase">
            <FontAwesomeIcon icon={faPlus} className="h-3 w-3 text-white text-opacity-70" />{' '}
            <span className="ml-2">Add new meter</span>
          </span>
        </BaseButton>
      );
    },
    tabs: function view() {
      return <Tabs data={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />;
    },
    child: function view() {
      return (
        <>
          {meters.length <= 0 && !loading ? <MetersEmptyState setOpenAddMeterModal={setOpenAddMeterModal} /> : null}
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
    </Table>
  );
};

MetersTable.defaultProps = {
  title: 'Your Meters',
  headings: [],
  mobileView: () => null,
  meters: [],
  setOpenAddMeterModal: () => null,
  loading: false,
  paginate: () => null,
};

MetersTable.propTypes = {
  title: PropTypes.string,
  headings: PropTypes.array,
  mobileView: PropTypes.func,
  meters: PropTypes.array,
  setOpenAddMeterModal: PropTypes.func,
  loading: PropTypes.bool,
  paginate: PropTypes.func,
};

export default MetersTable;
