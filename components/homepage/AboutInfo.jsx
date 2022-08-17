import LocationIcon from '../../public/svgs/location.svg';
import BagIcon from '../../public/svgs/bag.svg';
import GlobeIcon from '../../public/svgs/globe.svg';

const AboutInfo = () => {
  const info = [
    {
      heading: 'Our mission',
      d: 'To make energy accessible and affordable across Africa. To provide an impact-driven technology to our customers',
      Icon: LocationIcon,
    },
    {
      heading: 'Our vision',
      d: 'To be the most innovative energy as a service platform across Africa.',
      Icon: GlobeIcon,
    },
    {
      heading: 'Our values',
      d: 'Think green, Integrity, Learn fast, innovate faster, Innovate through experimentation',
      Icon: BagIcon,
    },
  ];

  return (
    <div className="py-16 lg:py-12">
      <div className="mx-auto px-4 xl:px-14">
        <h1 className="mx-auto text-center text-2xl font-bold text-primary-dark sm:px-0 lg:max-w-4xl lg:px-10 lg:text-5xl xl:leading-tight">
          What <span className="text-secondary-green">drives</span> us as a company
        </h1>
        <div className="mx-auto mt-8 max-w-6xl lg:mt-20">
          <div className="grid gap-y-6 lg:grid-cols-3 lg:gap-10">
            {info.map(({ heading, d, Icon }) => (
              <div key={d} className="rounded-2xl border bg-white px-8 py-12 text-center lg:text-left">
                <Icon className="mx-auto lg:mx-0" />
                <div className="mt-3 text-lg font-bold">{heading}</div>
                <p className="mt-2 text-sm text-gray-500 lg:text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
