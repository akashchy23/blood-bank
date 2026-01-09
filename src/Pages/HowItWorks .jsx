const HowItWorks = () => {
  const steps = [
    { step: "1", title: "Register", desc: "Create your donor profile" },
    { step: "2", title: "Search / Request", desc: "Find or request blood easily" },
    { step: "3", title: "Donate", desc: "Donate blood & save lives" },
  ];

  return (
    <section className="py-20 bg-red-50">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {steps.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-red-600 mb-3">
              {item.step}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
