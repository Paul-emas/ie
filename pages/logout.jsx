import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../slices/user';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/Button/BaseButton';
import Navbar from '../components/layout/Navbar';
import { useSelector } from 'react-redux';
import { persistSelector, userSignOut } from '../slices/persist';

export default function LogOut() {
  const { isLoggedIn } = useSelector(persistSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(userSignOut());
    }
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      router.push('/');
    }
  });

  return (
    <div>
      <Navbar />
      <div className="fixed flex min-h-screen w-full items-center justify-center bg-primary-light px-6 md:px-0">
        <div className="shadow-soft h-72 w-full rounded-lg bg-white md:w-[500px]">
          <div className="mt-10 text-center">
            <Image src="/images/logo.webp" width={200} height={46} objectFit="contain" priority={true} />
            <h1 className="mt-5 text-2xl font-bold md:text-3xl">You have been logged out!</h1>
            <div className="mt-2 text-sm font-semibold text-gray-500">Redirecting you in: {seconds}s</div>
            <Button onClick={() => dispatch(setShowModal('signIn'))} className="mt-5">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
