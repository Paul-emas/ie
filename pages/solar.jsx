import { useEffect, useState } from 'react';

import BaseButton from '../components/Button/BaseButton';
import Chart from '../components/Chart';
import SolarAmountCard from '../components/solar/SolarAmountCard';
import SolarPanelStatus from '../components/solar/SolarPanelStatus';
import SolarPaymentCard from '../components/solar/SolarPaymentCard';
import Table from '../components/table';
import Tabs from '../components/tabs';
import SolarSkeleton from '../components/skeletons/SolarSkeleton';

import SunIcon from '../public/svgs/sun.svg';
import Empty from '../public/svgs/empty-transcation.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCogs } from '@fortawesome/free-solid-svg-icons';

export default function Solar() {
  const tableProps = {
    title: 'Your monthly billings',
    iconType: 'sun',
    titleLabel: 'Montly plan',
    headings: [
      'Transaction Information',
      'Date',
      'Distributor',
      'Payment Type',
      'Reference number',
      'Amount',
      'Status',
    ],
    viewAll: function view() {
      return (
        <div>
          <button className="w-24 rounded-lg bg-primary-light py-2.5 text-sm font-semibold hover:opacity-80">
            <span className="relative flex items-center justify-center">
              <span className="mr-2">See all</span>
              <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
            </span>
          </button>
        </div>
      );
    },
    tabs: function view() {
      return (
        <>
          <Tabs data={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
      );
    },
    child: function view() {
      if (data.length <= 0 && !pageLoading) {
        return (
          <div className="mt-5 flex items-center justify-center bg-white pt-24 pb-32 sm:rounded-xl">
            <div className="flex flex-col items-center">
              <Empty />
              <div className="text-base font-bold">Your transactions will appear here</div>
              <p className="mt-1 max-w-xs text-center text-sm text-gray-400">
                An email has been sent to you kindly submit to continue with this application
              </p>
              <button className="mt-8 rounded-lg border-none bg-primary-light px-6 py-3 text-xs font-bold uppercase text-primary-base outline-none">
                Request solar
              </button>
            </div>
          </div>
        );
      }
    },
  };

  const tabsData = [{ name: 'Paid' }, { name: 'Upcoming' }, { name: 'Recurring' }, { name: 'Overdue' }];
  const [activeTab, setActiveTab] = useState(0);
  const [chartSelectedMonth, setChartSelectedMonth] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);
  const data = [];

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPageLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="pt-12 lg:pt-0">
      {pageLoading && (
        <div className="pt-5 2xl:pt-10">
          <SolarSkeleton />
        </div>
      )}

      {!pageLoading && (
        <div className="relative -mx-4 2xl:-mx-7">
          <div className="modal-soon absolute inset-0 z-30 flex min-h-screen w-full  justify-center bg-white bg-opacity-60 pt-60 lg:pt-96">
            <div className="text-4xl font-bold text-primary-dark 2xl:mt-10">
              <span className="flex justify-center">
                <FontAwesomeIcon icon={faCogs} className="mx-auto mb-4 h-28 w-28 text-center text-7xl" />
              </span>
              <span>Coming Soon...</span>
            </div>
          </div>
          <div className="px-4 pt-5 2xl:px-7 2xl:pt-10">
            <div className="hidden items-center justify-between sm:flex">
              <div>
                <h1 className="text-heading font-bold">Your Solar Plan</h1>
                <p className="text-md font-medium text-font-muted">Always turn off unused appliances</p>
              </div>
              <BaseButton>NEW REQUEST</BaseButton>
            </div>
            <div className="grid lg:grid-cols-6 lg:space-x-5">
              <div className="lg:col-span-2">
                <SolarAmountCard />
                <SolarPaymentCard />
              </div>
              <div className="lg:col-span-4">
                <Chart
                  title="Consumption Chart"
                  selectedMonth={chartSelectedMonth}
                  setSelectedMonth={setChartSelectedMonth}
                />
              </div>
            </div>
            <SolarPanelStatus />

            <Table {...tableProps}>
              {data?.length > 0 &&
                data.map((el, index) => {
                  const active = index + 1 === el;
                  return (
                    <tr className="last:-white py-4 pl-6 hover:bg-gray-50" key={index}>
                      <td className="whitespace-nowrap py-4  pl-6">
                        <div className="flex items-center">
                          <div className={`${active ? 'bg-font-green' : 'bg-red-600'} h-12 w-12 rounded-2xl`}>
                            <SunIcon className="mx-auto my-3" />
                          </div>
                          <div className="ml-8">
                            <div>
                              <div className="text-sm font-bold text-font-dark">Electricity Units</div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4">
                        <div className="text-sm font-light text-font-grey">Nov 27, 2021</div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4">
                        <div className="text-sm font-light text-font-grey">AEDC</div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4">
                        <div className="text-sm font-bold">Card</div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4">
                        <div className="text-sm font-light text-font-grey">GTRE23456789</div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4 text-sm text-gray-500">
                        <div className="text-sm  font-light text-font-grey">
                          <span className="font-semibold">NGN</span>
                          <span className="ml-1 font-bold text-font-dark">10, 000</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4 text-xs font-medium">
                        {active && (
                          <span className="inline-flex rounded-lg bg-green-100 px-3 py-1 text-xs font-bold leading-5 text-font-green">
                            Reciept
                          </span>
                        )}
                        {!active && (
                          <span className="relative inline-flex rounded-lg bg-red-100 px-3 py-1 text-xs font-bold leading-5 text-red-700">
                            Retry
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
