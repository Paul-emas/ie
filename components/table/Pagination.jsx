import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, totalItems, itemsPerPage, fetch }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);

  useEffect(() => {
    setEndOffset(itemOffset + itemsPerPage);
  }, [itemOffset]);

  const handlePageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalItems;
    setItemOffset(newOffset);
    fetch(event.selected);
  };

  return (
    <>
      <div className="px-2x pagination flex flex-col-reverse items-center border-t py-6 sm:flex-row sm:justify-between sm:px-8">
        <div className="mt-4 sm:mt-0">
          <p className="text-sm text-gray-500">
            Showing <span>{itemOffset + 1}</span> - <span>{endOffset <= totalItems ? endOffset : totalItems}</span> of{' '}
            <span>{totalItems}</span>
          </p>
        </div>
        <div className="hidden lg:block">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageChange}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Prev"
            marginPagesDisplayed={2}
            className="flex items-center space-x-2"
          />
        </div>
        <div className="block lg:hidden">
          <ReactPaginate
            nextLabel="Next >"
            onPageChange={handlePageChange}
            pageRangeDisplayed={0}
            pageCount={pageCount}
            previousLabel="< Prev"
            marginPagesDisplayed={0}
            className="flex items-center space-x-2"
          />
        </div>
      </div>
    </>
  );
};

Pagination.propTypes = {};

export default Pagination;
