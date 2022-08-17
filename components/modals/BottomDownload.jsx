import DownloadButtons from '../DownloadButtons';

const BottomDownload = () => {
  return (
    <div className="mt-10 border-t px-12 sm:pb-3">
      <div className="mt-5 w-full justify-center">
        <h2 className="mt-2 -mb-4 text-center text-sm font-semibold">Coming Soon</h2>
        <DownloadButtons
          dark
          center
          labelColor="text-black"
          captionColor="text-gray-500"
          className="shadow-soft border border-gray-700 bg-white"
        />
      </div>
    </div>
  );
};

export default BottomDownload;
