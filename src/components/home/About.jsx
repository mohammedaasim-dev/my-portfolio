import FadeIn from "../common/FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section
      id="about"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Who am I?
            </h3>

            <p className="text-gray-400 leading-8">
              I'm Mohammed Aasim, a B.Tech Computer Science (AI & ML)
              student passionate about Artificial Intelligence,
              Machine Learning, Full Stack Development, and building
              impactful software solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-500">
                10+
              </h3>
              <p>Projects</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-500">
                AI/ML
              </h3>
              <p>Specialization</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-500">
                React
              </h3>
              <p>Frontend</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-500">
                FastAPI
              </h3>
              <p>Backend</p>
            </div>

          </div>

        </div>

      </div>
    </section>
    </FadeIn>
  );
}
