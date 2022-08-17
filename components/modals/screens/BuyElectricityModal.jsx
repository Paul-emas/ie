import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { persistSelector } from '../../../slices/persist';
import { generateTranscationToken, getTransactionTokenStatus } from '../../../api';
import useFetchTransaction from '../../../hooks/useFetchTransaction';
import { setShowModal } from '../../../slices/user';

import BuyElectricityTab from '../../tabs/BuyElectricityTab';
import Modal from '../index';
import PrePaidForm from '../../forms/PrepaidForm';
import PostPaid from '../../forms/PostPaidForm';
import ConfirmDetails from '../ConfirmDetails';
import ErrorSuccess from '../ErrorSuccess';
import Receipt from '../Receipt';
import RequestLoader from '../../loaders/RequestLoader';
import AddMeter from './AddMeter';

const BuyElectricityModal = ({
  open,
  step,
  setStep,
  setOpen,
  receipt,
  setReceipt,
  transactionReference,
  setTransactionReference,
}) => {
  const { isLoggedIn } = useSelector(persistSelector);
  const { init } = useFetchTransaction(10);
  const dispatch = useDispatch();
  const tabs = [
    { id: 0, name: 'prepaid' },
    { id: 1, name: 'postpaid' },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [confirmDetails, setConfirmDetails] = useState(null);
  const [paymentToken, setPaymentToken] = useState(null);
  const [selectedMeter, setSelectedMeter] = useState(null);

  const close = () => {
    const resp = confirm('Are you sure you want to cancel transaction?');
    if (resp) {
      setStep(0);
      setOpen(false);
    }
  };

  const receiptClose = () => {
    setOpen(false);
    setStep(0);
    if (!isLoggedIn) {
      dispatch(setShowModal('createPinNewUser'));
    } else {
      toast.loading('Refreshing Data...');
      init();
    }
  };

  const onPayStackSuccess = async (data) => {
    setStep(3);
    setOpen(true);
    setTransactionReference(data.reference);
    const resp = await generateTranscationToken({ reference: data.reference }, paymentToken);

    if (resp?.error) {
      const res = await getTransactionTokenStatus(data.reference, paymentToken);

      if (res?.error) {
        setStep(2);
        return;
      }

      if (res?.data) {
        setReceipt(resp.data);
        setStep(4);
      }
    }

    if (resp?.data) {
      setReceipt(resp.data);
      setStep(4);
    }
  };

  const PrepaidPostPaidProps = {
    setConfirmDetails,
    setStep,
    setPaymentToken,
    selectedMeter,
    setSelectedMeter,
  };

  return (
    <div>
      {step === 0 && open && (
        <Modal
          title={step === 0 ? 'Buy Electricity' : 'Add a new meter'}
          border={false}
          setOpen={setOpen}
          close={() => {
            setStep(0);
            setOpen(false);
          }}
        >
          <BuyElectricityTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="pb-1.5">
            <div className="slideUp">
              {activeTab === 0 && <PrePaidForm {...PrepaidPostPaidProps} />}
              {activeTab === 1 && <PostPaid {...PrepaidPostPaidProps} />}
            </div>
          </div>
        </Modal>
      )}

      {open && step === 1 && (
        <Modal close={close} title="Confirm Information" setOpen={setOpen}>
          <ConfirmDetails
            setOpen={setOpen}
            setStep={setStep}
            details={confirmDetails}
            onPayStackSuccess={onPayStackSuccess}
            close={close}
          />
        </Modal>
      )}

      {open && step === 2 && (
        <Modal border={false} setOpen={setOpen} close={close}>
          <ErrorSuccess
            error="Something went wrong while trying to process your transaction kindly retry."
            transactionReference={transactionReference}
            setStep={setStep}
          />
        </Modal>
      )}

      {open && step === 3 && (
        <div className="fixed top-0 left-0 z-50 min-h-screen w-full overflow-hidden">
          <div className="absolute z-10 flex h-full w-full items-center justify-center">
            <RequestLoader type="payment" />
          </div>
          <div className="modal-overlay min-h-screen w-full bg-secondary-modal bg-opacity-70"></div>
        </div>
      )}

      {open && step === 4 && (
        <Modal close={receiptClose} border={false} setOpen={setOpen}>
          <Receipt receipt={receipt} close={receiptClose} />
        </Modal>
      )}

      {open && step === 5 && (
        <AddMeter open={open} setOpen={setOpen} goBack={() => setStep(0)} setSelectedMeter={setSelectedMeter} />
      )}
    </div>
  );
};

export default BuyElectricityModal;
