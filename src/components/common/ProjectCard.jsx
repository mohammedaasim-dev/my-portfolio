export default function ProjectCard({
  image,
  title,
  description,
  tech,
  github,
  live,
}) {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover hover:scale-105 transition duration-500"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-gray-400 leading-7 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg border border-blue-500 hover:bg-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}