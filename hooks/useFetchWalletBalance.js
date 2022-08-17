import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWalletBalance } from '../api';

import { persistSelector } from '../slices/persist';
import { setShowModal, setWalletBalance, userSelector } from '../slices/user';

export default function useFetchWalletBalance() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { walletBalance } = useSelector(userSelector);
  const { isLoggedIn } = useSelector(persistSelector);

  useEffect(() => {
    if (Number(walletBalance) <= 0) {
      fetchWalletBalance();
    }
  }, [walletBalance]);

  async function fetchWalletBalance() {
    if (isLoggedIn) {
      const resp = await getUserWalletBalance();

      if (resp?.error?.status === 401) {
        toast.error('Your login token is invalid!');
        dispatch(setShowModal('signIn'));
        Cookies.set('token', null);
        router.push('/error');
        return;
      }

      if (resp?.data?.errors) {
        toast.error('Error occurred while fetching wallet balance');
        dispatch(setWalletBalance(0.0));
      }

      if (resp?.data) {
        const { balance } = resp?.data;
        dispatch(setWalletBalance(balance));
      }
    }
  }

  return { walletBalance, init: () => fetchWalletBalance() };
}
