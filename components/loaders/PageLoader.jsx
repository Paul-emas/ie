import { useEffect } from 'react';
import gsap, { Linear } from 'gsap';

const PageLoader = () => {
  useEffect(() => {
    gsap.to('.logo', {
      ease: Linear.easeNone,
      rotation: 360,
      duration: 1,
      repeat: -1,
    });
  }, []);

  return (
    <div className="fixed flex min-h-screen w-full items-center justify-center bg-white">
      <div className="relative">
        <div className="relative p-4">
          <div className="logo absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-t-4 border-b-4 border-primary-light border-t-primary-base border-b-primary-base"></div>
          <div className="relative hidden h-16 w-16 overflow-hidden rounded-full lg:block">
            <img src="/images/logo-circle.png" className="h-16 w-16 object-cover" />
          </div>
          <div className="relative block h-14 w-14 overflow-hidden rounded-full lg:hidden">
            <img src="/images/logo-circle.png" layout="fill" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
