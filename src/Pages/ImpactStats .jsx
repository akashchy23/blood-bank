import CountUp from "react-countup";

const ImpactStats = () => {
  const stats = [
    { value: 10000, suffix: "+", label: "Donors" },
    { value: 5000, suffix: "+", label: "Blood Requests Fulfilled" },
    { value: 24, suffix: "/7", label: "Support" },
  ];

  return (
    <section className="py-20 bg-red-600 text-white">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-5xl font-bold">
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                separator=","
              />
              {stat.suffix}
            </h3>

            <p className="text-lg opacity-90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
