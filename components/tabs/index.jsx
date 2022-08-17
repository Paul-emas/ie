const index = ({ data, center = false, activeTab, setActiveTab, small }) => {
  return (
    <div
      className={`flex ${center ? 'justify-center' : 'justify-center sm:justify-start'} ${
        small ? 'text-xs' : 'text-sm'
      } w-full border-b px-6 lg:border-none lg:py-5`}
    >
      {data?.map(({ name }, ind) => (
        <div
          key={ind}
          onClick={() => setActiveTab(ind)}
          className={`${
            activeTab === ind
              ? 'border-b-2 border-primary-base font-bold text-black lg:border-none lg:bg-primary-base lg:text-white'
              : 'font-semibold text-gray-400'
          } w-full cursor-pointer py-3 text-center sm:w-auto lg:rounded-lg lg:py-2 lg:px-6 lg:text-base`}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default index;
