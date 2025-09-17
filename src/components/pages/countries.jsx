import { useEffect, useState } from "react";
import { client } from "../../lib";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await client.get(
          "/all?fields=name,cca3,region,population,flags,capital"
        );
        setCountries(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []);

  const filtered = countries.filter((c) => {
    const matchesSearch = c.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRegion = region === "All" || c.region === region;
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="px-6 py-10 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Countries</h1>

      <div className="flex justify-between gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-md w-1/2  focus:outline-none focus:border-indigo-600 "
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="px-4 py-2 w-1/2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-600"
        >
          <option value="All">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {filtered.map((item) => (
          <div
            key={item.cca3}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >

            <div className="p-5">
              <h2 className="font-extrabold text-indigo-600 text-lg mb-3">
                {item.name.common}
              </h2>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Population:</span>{" "}
                {item.population.toLocaleString()}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Region:</span> {item.region}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
