// import MobileMockup from '../../public/svgs/mobile-mockup.svg';
// import MobileMockup2 from '../../public/svgs/mobile-mockup-sm.svg';
import DownloadButtons from '../DownloadButtons';

const CTA = () => {
  return (
    <div className="overflow-hidden bg-primary-base pt-16 lg:pt-32">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="grid space-x-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mx-auto max-w-xl text-2xl  font-bold text-white lg:mx-0 lg:text-4xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 lg:mx-0 lg:text-base">
              Move your products to your customers at your will and convivence go about your business continently the
              modern way
            </p>
            <div className="mx-auto max-w-sm lg:mx-0 lg:max-w-full">
              <DownloadButtons captionColor="text-gray-400" className="bg-primary-dark" />
            </div>
          </div>
          {/* <MobileMockup className="-mt-12 hidden lg:block" /> */}
          {/* <MobileMockup2 className="relative -left-10 mt-6 block w-full lg:hidden" /> */}
        </div>
      </div>
    </div>
  );
};

export default CTA;
