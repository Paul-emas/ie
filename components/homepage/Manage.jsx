import Image from 'next/image';
import DownloadButtons from '../DownloadButtons';

const Manage = () => {
  return (
    <div className="min-h-screen flex items-center bg-white">
      <div className="container px-10 mx-auto">
        <div className="grid grid-cols-2 space-x-20 max-w-5xl mx-auto">
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl  max-w-md leading-tight font-bold">
                Manage your solar plan using our mobile app
              </h1>
              <p className="max-w-xl mt-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <DownloadButtons
                captionColor="text-gray-500"
                labelColor="text-primary-darker"
                className="border-2 border-primary-darker icon-dark"
              />
            </div>
          </div>
          <div>
            <div className="transform scale-125">
              <Image
                src="/images/mobile-mockup.webp"
                width={311.64}
                height={626.17}
                className="object-cover"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
