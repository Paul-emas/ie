const SolarPlanCards = ({ icon, title, desc }) => {
  const Icon = icon;

  return (
    <div className="bg-white h-72 p-8 rounded-3xl">
      <Icon className="mt-4" />
      <h1 className="text-lg font-bold mt-5">{title}</h1>
      <p className="mt-3">{desc}</p>
    </div>
  );
};

export default SolarPlanCards;
