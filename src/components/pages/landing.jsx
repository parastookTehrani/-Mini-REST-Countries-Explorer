import { Link } from "react-router"; 
import { Button } from "../shared/button";
import { FaArrowRight } from "react-icons/fa";

export const Landing = () => {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-start md:items-center gap-10 px-6 md:px-16 py-10 w-5/8 md:w-full">
      <div className="flex-1 text-left space-y- 6 order-1 md:order-none flex flex-col gap-5">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Explore Countries with{" "}
          <span className="text-indigo-600">Real-Time Data</span>
        </h1>

        <p className="max-w-xl text-lg text-gray-600">
          Discover details about every country around the world – from capitals
          to regions!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/countries">
            <Button
              bg="bg-indigo-600"
              color="text-white"
              hover="hover:bg-indigo-800"
            >
              Explore Now <FaArrowRight />
            </Button>
          </Link>

          <Link to="/about">
            <Button
              bg="bg-gray-100"
              color="text-gray-800"
              hover="hover:bg-gray-200"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center order-2 md:order-none">
        <img
          src="/images/hero-flag.svg"
          alt="flag"
          className="w-72 md:w-96 lg:w-[28rem] shadow-lg"
        />
      </div>
    </section>
  );
};
