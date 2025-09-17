import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { client } from "../../lib";
import { Button } from "../shared/button";
import { FaArrowLeft } from "react-icons/fa";

export const Country = () => {
  const { country } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await client.get(`/name/${country}?fullText=true`);
        setData(res.data[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getCountry();
  }, [country]);

  if (loading) {
    return (
      <section className="px-6 py-10 flex justify-center items-center min-h-[60vh]">
        <p className="text-lg font-semibold">Loading...</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="px-6 py-10 text-center">
        <p className="text-red-500">Country not found</p>
        <Link to="/countries">
          <Button bg="bg-white" color="text-gray-800" hover="hover:shadow-md">
            <FaArrowLeft /> Back
          </Button>
        </Link>
      </section>
    );
  }

  const { name, flags, population, region, subregion, capital } = data;

  return (
    <section className="px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {name?.common || "N/A"}
          </h1>

          <div className="space-y-2 text-base">
            <p>
              <span className="font-semibold">Official Name:</span>{" "}
              {name?.official || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Capital:</span>{" "}
              {capital?.[0] || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {region || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Subregion:</span>{" "}
              {subregion || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {population?.toLocaleString() || "N/A"}
            </p>
          </div>
        </div>

        <div>
          <img
            src={flags?.svg || flags?.png}
            alt={name?.common || "N/A"}
            className="w-full max-w-lg mx-auto md:mx-0 shadow-md"
          />
        </div>
      </div>

      <div className="mt-16">
        <Link to="/countries">
          <Button
            bg="bg-indigo-600"
            color="text-white"
            hover="hover:bg-indigo-800"
          >
            <FaArrowLeft /> Back to Countries
          </Button>
        </Link>
      </div>
    </section>
  );
};
