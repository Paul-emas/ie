import Image from 'next/image';
import { useSelector } from 'react-redux';
import moment from 'moment';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import { persistSelector } from '../../slices/persist';
import SecondaryButton from '../Button/SecondaryButton';

const Receipt = ({ close, receipt }) => {
  const { isLoggedIn } = useSelector(persistSelector);

  function printDocument() {
    const input = document.getElementById('receipt');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('receipt.pdf');
    });
  }

  return (
    <div id="receipt" className="-mt-6 px-6 lg:px-8">
      <div className="flex justify-center">
        <Image src="/images/logo.webp" width={200} height={46} className="object-contain" priority={true} />
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-primary-gray">Your Electricity Token</p>
        <div className="text-2xl font-bold">{receipt?.token}</div>
        <div className="my-2 mx-auto max-w-[150px] rounded-xl bg-yellow-200 py-2 text-sm font-bold text-black">
          Units: {receipt?.units} (kwh)
        </div>
        <img
          src={receipt?.meter?.provider?.disco?.logo}
          alt={receipt?.meter?.disco?.shortName}
          width={41.5}
          height={48.5}
          className="mx-auto my-4"
        />
        <div className="border-t border-b py-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Date Issued</div>
            <div className="text-sm font-semibold">
              {moment(receipt?.createdAt).utc().format('LL')} <span>{moment(receipt?.createdAt).format('LT')}</span>
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Reference code</div>
            <div className="text-sm font-semibold">{receipt?.reference}</div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Meter number</div>
            <div className="text-sm font-semibold">{receipt?.meter?.number}</div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Meter name</div>
            <div className="text-sm font-semibold">{receipt?.meter?.name}</div>
          </div>
          <div className="mb-3 flex items-start justify-between">
            <div className="text-left text-sm font-semibold text-primary-gray">Meter address</div>
            <div className="max-w-[220px] text-right text-xs font-semibold">
              <p>{receipt?.meter?.address}</p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Amount</div>
            <div className="text-sm font-semibold">
              {receipt?.country?.currency} {receipt?.amount?.toLocaleString()}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">VAT</div>
            <div className="text-sm font-semibold">
              {receipt?.country?.currency} {receipt?.charge?.vat}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Debt</div>
            <div className="text-sm font-semibold">
              {receipt?.country?.currency} {receipt?.outstanding}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Service Charge</div>
            <div className="text-sm font-semibold">
              {receipt?.country?.currency} {receipt?.charge?.fee}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between border-t border-b border-primary-lighter py-4">
            <div className="text-sm font-bold">Total</div>
            <div className="text-sm font-bold">
              {receipt?.country?.currency} {receipt?.amount?.toLocaleString()}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-xs font-semibold text-primary-gray">Thanks for using Instant Energy</span>
          <div className="mt-4 flex justify-center space-x-4">
            <SecondaryButton size="base" onClick={() => printDocument()}>
              Download
            </SecondaryButton>
          </div>
        </div>
        {!isLoggedIn && (
          <div className="mt-6">
            <p className="text-sm">
              New to Instant Energy?{' '}
              <button onClick={() => close()} className="font-semibold text-primary-base">
                Create an Account
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

Receipt.propTypes = {};

export default Receipt;
