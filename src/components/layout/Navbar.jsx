export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <a
          href="#"
          className="text-3xl font-bold text-blue-500"
        >
          Mohammed Aasim
        </a>

        <ul className="hidden md:flex gap-8 text-gray-300">

          <li><a href="#about" className="hover:text-blue-500">About</a></li>

          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>

          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>

          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>

          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>

        </ul>

      </div>
    </nav>
  );
}