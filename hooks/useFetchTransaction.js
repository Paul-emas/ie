import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { setShowModal, setUserTransactions } from '../slices/user';
import { persistSelector } from '../slices/persist';
import { getUserTransactions } from '../api';

export default function useFetchTransaction(itemsPerPage) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn } = useSelector(persistSelector);
  const [transactions, setTransactions] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions(currentPage = 0) {
    if (isLoggedIn) {
      setTableLoading(true);
      const resp = await getUserTransactions(currentPage, itemsPerPage);

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
        const { docs } = resp.data;
        setTransactions(docs);
        dispatch(setUserTransactions(resp.data));
        setData(resp.data);
        setPageLoading(false);
        setTableLoading(false);
      }
    }
  }

  return {
    data,
    error,
    transactions,
    tableLoading,
    pageLoading,
    init: (page) => fetchTransactions(page),
  };
}
