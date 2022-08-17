const PaymentPlans = () => {
  return (
    <div className="py-16 sm:py-44">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="mx-auto sm:max-w-6xl">
          <div className="grid space-y-5 sm:grid-cols-2 sm:space-x-16">
            <div className="px-5 text-center sm:px-0 sm:text-left">
              <div className="text-xl font-bold text-primary-darker sm:text-5xl">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitred
              </div>
              <p className="mt-5 max-w-md text-sm sm:text-base">
                At Instant Energy, we make Energy accessible and affordable in emerging, underserved
                markets across Nigeria and Africa by providing energy as a service platform and also
                facilitating access to clean renewable energy for residential and commercial
                clusters.
              </p>
            </div>
            <div>
              <img src="/images/groups.webp" alt="Instant energy payment methods" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlans;
