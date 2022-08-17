import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWalletTransactions } from '../api';
import { persistSelector } from '../slices/persist';
import toast from 'react-hot-toast';
import { setShowModal, setUserWalletTransactions } from '../slices/user';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function useFetchWalletTransactions(itemsPerPage) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn } = useSelector(persistSelector);
  const [transactions, setTransactions] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions(currentPage = 0) {
    if (isLoggedIn) {
      setTableLoading(true);
      const resp = await getUserWalletTransactions(currentPage, itemsPerPage);

      if (resp?.error?.status === 401) {
        toast.error('Your login token is invalid!');
        dispatch(setShowModal('signIn'));
        Cookies.set('token', null);
        router.push('/error');
        return;
      }

      if (resp?.error) {
        toast.error('Something went wrong');
        setError(resp?.error);
        setPageLoading(false);
        setTableLoading(false);
      }

      if (resp?.data) {
        dispatch(setUserWalletTransactions(resp.data));
        const { docs } = resp.data;
        setData(resp.data);
        setTransactions(docs);
        setPageLoading(false);
        setTableLoading(false);
      }
    }
  }

  return {
    data,
    transactions,
    error,
    tableLoading,
    pageLoading,
    init: (page) => fetchTransactions(page),
  };
}
