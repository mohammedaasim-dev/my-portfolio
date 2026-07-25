import FadeIn from "../common/FadeIn";

export default function Contact() {
  return (
    <FadeIn>
      <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="text-gray-400 mt-4 mb-12">
          Interested in collaborating or discussing opportunities?
          Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition">

            <h3 className="text-2xl font-semibold mb-4">
              📧 Email
            </h3>

            <a
              href="mailto:smohammedaasim5@gmail.com"
              className="text-blue-400 break-all"
            >
              smohammedaasim5@gmail.com
            </a>

          </div>

          {/* LinkedIn */}

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition">

            <h3 className="text-2xl font-semibold mb-4">
              💼 LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/mohammed-aasim-shaik-a11243303/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400"
            >
              Visit Profile
            </a>

          </div>

          {/* GitHub */}

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition">

            <h3 className="text-2xl font-semibold mb-4">
              💻 GitHub
            </h3>

            <a
              href="https://github.com/mohammedaasim-dev"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400"
            >
              github.com/mohammedaasim-dev
            </a>


          </div>

        </div>

      </div>
    </section>
    </FadeIn>
  );
}