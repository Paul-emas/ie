import Link from 'next/link';
import Flickity from 'react-flickity-component';

const Counter = (props) => {
  const slides = [1, 2, 3, 4];
  const flickityOptions = {
    initialIndex: 0,
    autoPlay: 2500,
    wrapAround: false,
    freeScroll: false,
    prevNextButtons: false,
    pageDots: true,
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-10">
        <h1 className="mx-auto max-w-2xl text-center text-2xl font-bold text-primary-darker lg:text-5xl">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
        </h1>
        <div className="mt-24 hidden items-center justify-center space-x-10 lg:flex">
          <div className="mr-6 flex h-282 w-279 flex-col items-center justify-center rounded-3xl border border-primary-base bg-primary-light text-center">
            <p className="text-5xl  font-bold text-primary-darker">3000k</p>
            <span className="mt-4 px-12 text-sm text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
          <div className="mr-6 flex h-282 w-279 flex-col items-center justify-center rounded-3xl border border-secondary-green bg-secondary-lighterGreen text-center">
            <p className="text-5xl  font-bold text-primary-darker">460+</p>
            <span className="mt-4 px-12 text-sm text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
          <div className="flex h-282 w-279 flex-col items-center justify-center rounded-3xl border border-secondary-purple bg-secondary-lighterPurple text-center">
            <p className="text-5xl  font-bold text-primary-darker">150k</p>
            <span className="mt-4 px-12 text-sm text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
        </div>
      </div>
      <div className="mt-14 block lg:hidden">
        <Flickity
          className={'carousel-home overflow-x-hidden p-1 px-20'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          <div className="mr-6 flex h-274 w-257 flex-col items-center justify-center rounded-3xl border border-primary-base bg-primary-light text-center">
            <p className="text-5xl  font-bold text-primary-darker">3000k</p>
            <span className="mt-4 px-12 text-sm text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
          <div className="mr-6 flex h-274 w-257 flex-col items-center justify-center rounded-3xl border border-secondary-green bg-secondary-lighterGreen text-center">
            <p className="text-5xl  font-bold text-primary-darker">460+</p>
            <span className="mt-4 px-12 text-sm text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
          <div className="flex h-274 w-257 flex-col items-center justify-center rounded-3xl border border-secondary-purple bg-secondary-lighterPurple text-center">
            <p className="text-5xl  font-bold text-primary-darker">150k</p>
            <span className="mt-4 px-12 text-sm text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
        </Flickity>
      </div>
      <div className="mt-8 text-center lg:mt-24">
        <p className="text-sm font-semibold text-primary-darker lg:text-base">
          <span>Need energy right now?</span>
          <Link href="/sign-up">
            <a className="ml-2 text-primary-base">Sign up now</a>
          </Link>
        </p>
      </div>
    </section>
  );
};

Counter.propTypes = {};

export default Counter;
