export const About = () => {
  return (
    <section className="flex justify-center mt-10 min-h-[calc(100vh-4rem)] px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl ">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
          About This Website
        </h1>
        <p className="text-base md:text-lg text-gray-700  mb-4 leading-relaxed">
          This website uses the <span className="font-semibold text-indigo-600 ">
            REST Countries API </span>
          to display comprehensive information about countries from around the
          world.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
          Explore our data to learn about country names, capitals, regions,
          populations, flags, and much more. Whether you’re curious about a
          particular country or looking for insights about global regions, our
          interactive explorer makes it easy.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router v7 for seamless
          routing and Tailwind CSS for a beautiful, responsive user interface.
        </p>
      </div>
    </section>
  );
};
