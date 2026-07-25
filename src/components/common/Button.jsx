export default function Button({
  children,
  href,
  primary = false,
}) {
  const base =
    "px-8 py-4 rounded-xl font-semibold transition-all duration-300";

  const style = primary
    ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105"
    : "border border-blue-500 hover:bg-blue-500 hover:text-white";

  if (href) {
    return (
      <a href={href} className={`${base} ${style}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${style}`}>
      {children}
    </button>
  );
}