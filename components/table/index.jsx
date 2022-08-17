import RequestLoader from '../loaders/RequestLoader';

const Table = ({ title, viewAll, titleLabel, tabs, children, loading, child }) => {
  return (
    <div className="shadow-soft-lg mt-5 flex flex-col overflow-hidden rounded-xl bg-white">
      <div className="mt-4 py-3 px-7">
        <div className="flex w-full items-center justify-center sm:justify-between">
          <h3 className="flex items-start text-xl font-bold text-font-dark">
            <span>{title}</span>
            {titleLabel && (
              <span className="mt-1 ml-2 flex h-6 items-center rounded-lg bg-primary-base px-2.5 py-1 font-sans text-xxs font-semibold text-white">
                {titleLabel}
              </span>
            )}
          </h3>
          <div className="hidden sm:block">{viewAll && viewAll()}</div>
        </div>
      </div>
      {tabs && tabs()}
      <div className={`${!loading ? 'overflow-x-auto' : ''} lg:pb-5 sm:-mx-6 lg:-mx-6`}>
        <div className="inline-block min-w-full align-middle sm:px-6">
          {!loading && <>{children}</>}
          {loading && (
            <div className="py-8 sm:py-36">
              <RequestLoader type="request" />
            </div>
          )}
        </div>
      </div>
      {child && child()}
    </div>
  );
};

export default Table;
