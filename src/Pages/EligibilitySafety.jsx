const EligibilitySafety = () => {
  const points = [
    {
      title: "Who Can Donate?",
      desc: "Healthy adults aged 18–60, weighing at least 50kg, can donate blood."
    },
    {
      title: "Is It Safe?",
      desc: "Yes. Sterile, single-use equipment is used for every donation."
    },
    {
      title: "How Often Can I Donate?",
      desc: "You can donate whole blood every 3 months."
    },
    {
      title: "Time Required",
      desc: "The entire process usually takes 30–40 minutes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-6">
          Donation Eligibility & Safety
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Many people want to donate blood but have questions.
          Here are the most important things you should know.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {points.map((item, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySafety;
