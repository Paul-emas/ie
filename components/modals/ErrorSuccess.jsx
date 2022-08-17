import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

import SuccessIcon from '../../public/svgs/success.svg';
import ErrorIcon from '../../public/svgs/error.svg';
import { retryTransaction } from '../../api';
import SecondaryButton from '../Button/SecondaryButton';
import toast from 'react-hot-toast';

const ErrorSuccess = ({ msg, error, next, setStep, transactionReference }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({});
    tl.fromTo('.icon', { scale: 0.2 }, { scale: 1, ease: 'elastic' });
  }, [error]);

  async function RetryTransaction() {
    if (!next) {
      if (transactionReference) {
        setIsLoading(true);
        const resp = await retryTransaction({ reference: transactionReference });

        if (resp?.error) {
          setIsLoading(false);
          setStep(2);
          toast.error('Transaction failed. There was an error processing your transaction');
          return;
        }

        if (resp?.data) {
          setIsLoading(false);
          setReciept(resp.data);
          setStep(4);
        }
      }
    } else {
      next();
    }
  }

  return (
    <div className="bg-white text-center">
      <div className="icon flex justify-center">{!error ? <SuccessIcon /> : <ErrorIcon />}</div>
      <div className="pb-6">
        <div className="mt-6 text-2xl font-bold">
          <span>{!error ? 'Transaction Successful' : 'Oops!'}</span>
        </div>
        <p className="mx-auto mt-1 max-w-xs text-sm text-gray-400">
          {!error ? <span>{msg}</span> : <span>{error}</span>}
        </p>
        {error && (
          <div className="mx-auto w-[210px]">
            <SecondaryButton loading={isLoading} size="base" onClick={RetryTransaction} className="mt-6">
              Retry Transaction
            </SecondaryButton>
          </div>
        )}
      </div>
      {error && (
        <div className="mt-6">
          <p className="text-sm">
            <span>Still having problems?</span>
            <Link href="/contact">
              <button className="ml-1 font-semibold text-primary-base">Contact us</button>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default ErrorSuccess;
