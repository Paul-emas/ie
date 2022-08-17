import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import useFetchMeters from '../hooks/useFetchMeters';

import AddMeter from '../components/modals/screens/AddMeter';
import MetersTable from '../components/table/MetersTable';
import BaseButton from '../components/Button/BaseButton';
import MetersDataDefault from '../components/table/MetersDataDefault';
import MetersDataMobile from '../components/table/MetersDataMobile';
import Pagination from '../components/table/Pagination';

export default function Meters() {
  const headings = ['Meter name', 'Date added', 'Distributor', 'Meter Number', 'Meter address', 'Actions'];
  const [itemsPerPage, setItemPerPage] = useState(10);
  const { data, meters, tableLoading, pageLoading, init } = useFetchMeters(itemsPerPage);
  const [openAddMeterModal, setOpenAddMeterModal] = useState(false);
  const [paginatedMeters, setPaginatedMeters] = useState(meters);
  const [totalDocs, setTotalDocs] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [selectedMeter, setSelectedMeter] = useState(null);

  useEffect(() => {
    setPaginatedMeters(meters);
  }, [meters]);

  useEffect(() => {
    if (data) {
      const { docs, totalDocs, totalPages } = data;
      setPaginatedMeters(docs);
      setPageCount(totalPages);
      setTotalDocs(totalDocs);
    }
  }, [data]);

  return (
    <div className="pt-12 pb-10 lg:pt-0">
      {pageLoading && (
        <div className="pt-5 sm:pt-10">
          <div className="min-h-screen w-full rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      )}
      {!pageLoading && (
        <>
          <AddMeter
            open={openAddMeterModal}
            setOpen={setOpenAddMeterModal}
            selectedMeter={selectedMeter}
            setSelectedMeter={setSelectedMeter}
          />
          <div className="pt-0 lg:pt-5 2xl:pt-7">
            <MetersTable
              meters={meters}
              loading={tableLoading}
              headings={headings}
              setOpenAddMeterModal={setOpenAddMeterModal}
              mobileView={() => (
                <MetersDataMobile
                  meters={meters}
                  setSelectedMeter={setSelectedMeter}
                  setOpenAddMeterModal={setOpenAddMeterModal}
                />
              )}
              paginate={() => (
                <Pagination
                  items={paginatedMeters}
                  totalItems={totalDocs}
                  itemsPerPage={itemsPerPage}
                  pageCount={pageCount}
                  fetch={(val) => init(val)}
                />
              )}
            >
              <MetersDataDefault
                meters={meters}
                setSelectedMeter={setSelectedMeter}
                setOpenAddMeterModal={setOpenAddMeterModal}
              />
            </MetersTable>
          </div>
          {meters.length > 0 && (
            <div className="fixed bottom-0 left-0 z-30 mt-5 flex w-full justify-center py-5 sm:hidden">
              <BaseButton onClick={() => setOpenAddMeterModal(true)}>
                <span className="flex items-center uppercase">
                  <FontAwesomeIcon icon={faPlus} className="h-3 w-3 text-white text-opacity-70" />{' '}
                  <span className="ml-2">Add new meter</span>
                </span>
              </BaseButton>
            </div>
          )}
        </>
      )}
    </div>
  );
}
