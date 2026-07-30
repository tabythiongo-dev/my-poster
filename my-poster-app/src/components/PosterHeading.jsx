function PosterHeading({ text, size = "text-4xl", color = "text-white", underline = false }) {
  return (
    <h1
      className={`${size} ${color} font-bold uppercase leading-tight mb-3 ${
        underline ? "border-b border-orange-500 pb-1" : ""
      }`}
    >
      {text}
    </h1>
  );
}

export default PosterHeading;