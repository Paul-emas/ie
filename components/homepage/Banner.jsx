import React from 'react';
import Image from 'next/image';
import DownloadButtons from '../DownloadButtons';

const Banner = () => (
  <section className="pt-24">
    <div className="container mx-auto xl:px-14">
      <div className="flex w-full justify-between items-center">
        <div className="">
          <img
            src="/images/mobile.png"
            className="object-contain transform scale-150 2xl:scale-125"
            alt="mobile banner"
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-5xl leading-tight text-font-darker">
            Never be left in the dark, download our mobile app
          </h1>
          <p className="text-font-dark text-xl mt-3">
            Instant Energy deploys patient, value accretive capital alongside
            international and local value investors to create..
          </p>
          <DownloadButtons />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
