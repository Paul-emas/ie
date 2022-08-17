import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMeters } from '../api';
import { persistSelector } from '../slices/persist';
import { setShowModal, setUserMeter } from '../slices/user';

export default function useFetchMeters(itemsPerPage) {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = Cookies.get('token');
  const { isLoggedIn } = useSelector(persistSelector);
  const [meters, setMeters] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(true);

  useEffect(() => {
    getMeters();
  }, []);

  async function getMeters(currentPage = 0, limit) {
    if (token && isLoggedIn) {
      setTableLoading(true);
      const resp = await getUserMeters(currentPage, limit ?? itemsPerPage);

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
        setMeters(docs);
        dispatch(setUserMeter(resp?.data));
        setData(resp.data);
        setPageLoading(false);
        setTableLoading(false);
      }
    }
  }

  return { data, error, meters, pageLoading, tableLoading, init: (page, limit) => getMeters(page, limit) };
}
