import Navbar from '../components/layout/Navbar';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector } from '../slices/persist';
import { setShowModal } from '../slices/user';

import ErrorIcon from '../public/svgs/error-page.svg';
import Button from '../components/Button/BaseButton';

export default function Error() {
  const dispatch = useDispatch();

  const { userPhone } = useSelector(persistSelector);

  return (
    <div>
      <Navbar />
      <div className="fixed flex min-h-screen w-full items-center justify-center bg-primary-light">
        <div className="text-center">
          <ErrorIcon width="448.33" height="363.598" className="mx-auto hidden lg:block" />
          <ErrorIcon className="mx-auto block w-full lg:hidden" />
          <div className="mt-4 px-5 text-2xl font-bold lg:text-4xl">Somethig went wrong</div>
          <p className="mx-auto mt-3 max-w-lg px-3 text-sm text-gray-500 lg:text-base">
            Youre not authenticated to access this page kindly proceed to login, if issue persist kindly{' '}
            <Link href="/contact">
              <a className="font-bold text-primary-base">Contact us</a>
            </Link>
          </p>
          {userPhone ? (
            <Button onClick={() => dispatch(setShowModal('signIn'))} className="mt-5">
              Login
            </Button>
          ) : (
            <Button onClick={() => dispatch(setShowModal('register'))} className="mt-5">
              Get started
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
