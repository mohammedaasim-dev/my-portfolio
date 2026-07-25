import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";
import resume from "../../assets/resume.pdf";
import Button from "../common/Button";
import FadeIn from "../common/FadeIn";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <FadeIn>
      <section className="min-h-screen bg-slate-950 flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
>

          <p className="text-blue-400 font-semibold mb-4">
             Hello, I'm
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Mohammed
            <br />
            <span className="text-blue-500">
              Aasim
            </span>
          </h1>

          <div className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 mb-6 mt-6">
            👋 Available for Internships & Placements
          </div>

          <h2 className="text-2xl text-gray-300 mt-6">
            AI Engineer • Software Engineer • Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-9 max-w-xl">
  I'm a Computer Science (AI & ML) student passionate about
  Artificial Intelligence, Full Stack Development, and Data
  Analytics. I enjoy building scalable software and intelligent
  applications that solve real-world problems.
</p>

          <div className="flex gap-5 mt-10">

           <Button
  href={resume}
  primary
>
  Download Resume
</Button>

<Button href="#projects">
  View Projects
</Button>

<div className="flex gap-6 mt-10 text-2xl">

  <a
    href="https://github.com/mohammedaasim-dev"
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-500 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/mohammed-aasim-shaik-a11243303/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-500 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:smohammedaasim5@gmail.com"
    className="hover:text-blue-500 transition"
  >
    <FaEnvelope />
  </a>

</div>
          </div>

        </motion.div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src={profile}
            alt="Mohammed Aasim"
className="w-[420px] rounded-3xl
border-4
border-blue-500
shadow-[0_0_40px_rgba(59,130,246,0.5)]
hover:scale-105
transition-all
duration-500
"          />

        </div>

      </div>
    </section>
    </FadeIn>
  );
}