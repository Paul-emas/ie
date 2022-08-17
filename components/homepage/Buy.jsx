import { useDispatch } from 'react-redux';
import { setShowModal } from '../../slices/user';
import SecondaryButton from '../Button/SecondaryButton';

const Buy = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-secondary-lightGreen pb-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="mx-auto md:max-w-6xl">
          <div className="grid sm:grid-cols-2 md:space-x-24">
            <div>
              <img
                src="/images/bulb.webp"
                alt="Instant energy bulb illustration"
                className="-my-14 p-20 sm:-my-0 sm:p-10"
              />
            </div>
            <div className="flex items-center text-center sm:text-left">
              <div>
                <div className="px-5 sm:px-0">
                  <div className="text-xl font-bold text-primary-darker sm:text-5xl">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitred
                  </div>
                  <p className="mt-5 text-sm text-gray-500 sm:text-base">
                    At Instant Energy, we make Energy accessible and affordable in emerging, underserved markets across
                    Nigeria and Africa by providing energy as a service platform and also facilitating access to clean
                    renewable energy for residential and commercial clusters.
                  </p>
                </div>
                <div className="mt-10 sm:mt-6 sm:w-56">
                  <SecondaryButton onClick={() => dispatch(setShowModal('register'))}>
                    Get Started
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
