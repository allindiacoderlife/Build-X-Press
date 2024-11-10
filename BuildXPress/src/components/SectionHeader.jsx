export const SectionHeader = ({ title, eyebrow, description }) => {
    return (
      <>
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-wide bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif text-center text-3xl md:text-5xl mt-6">
          {title}
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl">
          {description}
        </p>
      </>
    );
  };
  