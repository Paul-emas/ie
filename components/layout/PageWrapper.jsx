import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { WhatsAppWidget } from 'react-whatsapp-widget';
// import 'react-whatsapp-widget/dist/index.css';

import { checkIsRouteProtected } from '../../utils/routes';

import Sidebar from '../layout/Sidebar';
import PageLoader from '../loaders/PageLoader';
import ModalController from '../modals/ModalController';
import Navbar from './Navbar';

const PageWrapper = ({ children }) => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  const isProtected = checkIsRouteProtected(router.asPath);

  useEffect(() => {
    const handleStart = (url) => url !== router.pathname && !isProtected && setPageLoading(true);
    const handleComplete = (url) => url !== router.pathname && setPageLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [isProtected]);

  return (
    <>
      {pageLoading && <PageLoader />}
      {!pageLoading && (
        <>
          <ModalController />
          {/* <WhatsAppWidget phoneNumber="2349082333376" /> */}
          {!isProtected && <div>{children}</div>}
          {isProtected && (
            <div className="min-h-screen w-full overflow-hidden bg-gray-300">
              <div className="min-h-screen">
                <Sidebar />
                <div className="bg-white p-0 sm:bg-primary-light">
                  <main className="main-content min-h-screen">
                    <div className="block lg:hidden">
                      <Navbar isPageProtected={isProtected} />
                    </div>
                    <div className="px-4 2xl:px-7">{children}</div>
                  </main>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PageWrapper;
