import TreesIcon from '../../public/svgs/trees.svg';
import BulbIcon from '../../public/svgs/about-bulb.svg';

const Recycle = (props) => {
  return (
    <div className="bg-white py-14 lg:py-36">
      <div className="container mx-auto px-4 sm:px-5 xl:px-14">
        <div className="mx-auto max-w-6xl outline-black">
          <div className="items-center lg:flex lg:space-x-20">
            <div>
              <TreesIcon width="506" height="418" className="hidden lg:block" />
              <TreesIcon height="327.154" className="block w-full lg:hidden" />
            </div>
            <div>
              <div className="text-center text-xl font-bold leading-tight text-primary-dark lg:text-left lg:text-5xl xl:leading-tight">
                What we do
              </div>
              <p className="mt-4 text-center text-sm lg:text-left lg:text-base">
                At Instant Energy, we make Energy accessible and affordable in emerging, underserved markets across
                Nigeria and Africa by providing energy as a service platform and facilitating access to clean renewable
                energy for residential and commercial clusters.
              </p>
              <p className="mt-4 text-center text-sm lg:text-left lg:text-base">
                We seek to catalyze energy access partnerships by leveraging grants, concessionary finance from
                governments and mobilizing private sector investors interested in investing in energy assets.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-6xl outline-black lg:mt-36">
          <div className="flex flex-col-reverse items-center lg:flex-row lg:space-x-40">
            <div>
              <div className="mt-6 text-center text-xl font-bold leading-tight text-primary-dark lg:mt-0 lg:text-left lg:text-5xl xl:leading-tight">
                How we do it
              </div>
              <p className="mt-4 text-center text-sm lg:text-left lg:text-base">
                We work with on-grid and off-grid power providers to provide a robust electricity billing platform that
                takes care of bill collection, real-time energy monitoring and easy connection of every single
                individual household and business to clean energy through our mobile and web app.
              </p>
              <p className="mt-4 text-center text-sm lg:text-left lg:text-base">
                This service aims to provide a reliable power supply, reduce the dependence on fossil fuels and promote
                a more sustainable and clean environment.
              </p>
              <p className="mt-4 text-center text-sm lg:text-left lg:text-base">
                This will translate to a massive cost reduction on the amount currently being spent in Nigeria on diesel
                generators as an alternative to the grid.
              </p>
            </div>
            <div>
              <BulbIcon width="376.87" height="455.68" className="hidden lg:block" />
              <BulbIcon width="376.87" className="block w-full lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recycle;
