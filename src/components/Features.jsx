const Features = ({ index, title, body }) => {
  return (
    <div
      className={`feature max-w-[400px] w-full relative ${
        index % 2 === 0
          ? "border-l-4 border-gold md:border-l-4 md:border-r-0 pl-3"
          : "border-r-4 border-gold md:border-l-4 md:border-r-0 pr-3 md:pr-0 md:pl-3"
      }`}
    >
      <h2 className="feature-title font-semibold text-3xl mb-3">{title}</h2>
      <p className="feature-body">{body}</p>
    </div>
  );
};

export default Features;
