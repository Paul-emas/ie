import gsap from 'gsap';

const BuyElectricityTab = ({ tabs, activeTab, setActiveTab }) => {
  const animate = () => {
    const tl = gsap.timeline();
    if (activeTab === 0) {
      tl.fromTo('.slideUp', { x: 50, autoAlpha: 0 }, { x: 0, autoAlpha: 1 });
    } else {
      tl.fromTo('.slideUp', { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1 });
    }
    tl.duration(0.5).play();
  };

  return (
    <div className="flex justify-center border-b  px-8">
      {tabs.map(({ id, name }, index) => (
        <div
          key={id}
          onClick={() => {
            setActiveTab(index);
            animate();
          }}
          className={`${
            activeTab === index
              ? 'active_tab font-bold duration-200'
              : 'border-b-2 border-transparent font-semibold text-gray-400'
          } w-52 cursor-pointer py-2 text-center text-sm capitalize lg:text-base`}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default BuyElectricityTab;
