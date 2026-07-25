import skills from "../../data/skills";
import FadeIn from "../common/FadeIn";

export default function Skills() {
  return (
    <FadeIn>
      <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Skills
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (

            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center
              hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </div>

          ))}

        </div>

      </div>
    </section>
    </FadeIn>
  );
}