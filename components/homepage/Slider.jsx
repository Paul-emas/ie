import Flickity from 'react-flickity-component';
import SliderCard from './SliderCard';

const Slider = () => {
  const slides = [
    {
      name: 'Mr Hassan Haliru',
      type: 'whatsapp',
      comment: `I'm impressed as my request for token has been dealt with immediately. I'm at rest and wishing to thank Instant energy for your prompt response. You made me remember my days abroad working and their services were unquantifiable. Thanks again.!`,
    },
    {
      name: 'Onyinye Black-Pearl',
      type: 'instagram',
      comment: `You're amazing! My first time using the platform and to be honest when the token didn't come i got worried! But that you solved this issue at midnight???!!! 👏👏👏 Oshey, New Custormer alert!`,
    },
    {
      name: 'Bam Charles',
      type: 'whatsapp',
      comment: 'Thanks IE i am grateful, you guys are wonderful I am proud of you all. A job well done.',
    },
  ];
  const flickityOptions = {
    draggable: true,
    initialIndex: 0,
    autoPlay: 2500,
    freeScroll: false,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
  };

  return (
    <div className="border-b bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="mx-auto hidden max-w-7xl overflow-x-visible lg:block">
          <Flickity
            className={'carousel-home overflow-x-hidden lg:px-12'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            <div className="mr-44 flex w-full justify-between">
              <SliderCard {...slides[0]} />
              <SliderCard {...slides[1]} />
              <SliderCard {...slides[2]} />
            </div>
          </Flickity>
        </div>
        <div className="block overflow-x-visible lg:hidden">
          <Flickity
            className={'carousel-home w-full overflow-x-hidden'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {slides.map((slide, index) => (
              <div key={index} className="mr-44 flex w-full justify-between">
                <SliderCard {...slide} />
              </div>
            ))}
          </Flickity>
        </div>
      </div>
    </div>
  );
};

export default Slider;
