import certifications from "../../data/Certifications";
import FadeIn from "../common/FadeIn";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  const handleOpenLink = (event, url) => {
    if (!url) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <FadeIn>
      <section
        id="certifications"
        className="bg-slate-950 text-white py-24 px-8"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-4">
            Certifications
          </h2>

          <p className="text-center text-gray-400 mb-14">
            Professional certifications, job simulations and participation certificates
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {certifications.map((certificate, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
              >
                <FaCertificate className="text-5xl text-blue-500 mb-6" />

                <h3 className="text-xl font-bold mb-3">
                  {certificate.title}
                </h3>

                <p className="text-blue-400 mb-2">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 mb-6">
                  {certificate.year}
                </p>

                <a
                  href={certificate.link || "#"}
                  onClick={(event) => handleOpenLink(event, certificate.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                >
                  View Credentials
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}