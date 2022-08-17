import { useEffect } from 'react';
import gsap, { Linear } from 'gsap';

const RequestLoader = ({ type }) => {
  useEffect(() => {
    gsap.to('.logo', {
      ease: Linear.easeNone,
      rotation: 360,
      duration: 1,
      repeat: -1,
    });
  }, []);

  return (
    <div className="mx-4 flex w-full flex-col items-center rounded-2xl bg-white py-20 text-center sm:mx-0 sm:w-auto sm:px-20">
      <div className="relative p-4">
        <div className="logo absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-t-4 border-b-4 border-primary-light border-t-primary-base border-b-primary-base"></div>
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <img src="/images/logo-circle.png" className="h-16 w-16 object-cover" />
        </div>
      </div>
      <div className="mt-5 text-xl font-bold text-primary-dark">Your request is processing</div>
      <p className="max-w-xs text-sm text-gray-400">
        Just hold a seconds, we are processing <br /> your {type}
      </p>
    </div>
  );
};

export default RequestLoader;
