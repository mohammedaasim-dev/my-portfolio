import experiences from "../../data/experience";
import FadeIn from "../common/FadeIn";

export default function Experience() {
  return (
    <FadeIn>
      <section
      id="experience"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Experience & Education
        </h2>

        <p className="text-center text-gray-400 mb-16">
          My learning journey
        </p>

        <div className="space-y-8">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
            >
              <div className="flex justify-between flex-wrap gap-4">

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-blue-400 mt-2">
                    {item.company}
                  </p>

                </div>

                <p className="text-gray-400">
                  {item.period}
                </p>

              </div>

              <p className="text-gray-400 mt-6 leading-8">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
    </FadeIn>
  );
}