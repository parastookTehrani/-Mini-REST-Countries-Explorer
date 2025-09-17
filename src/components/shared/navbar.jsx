import { Link } from "react-router";

export const Navbar = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-5 md:flex-row md:gap-10">
      <Link to={'/'}>
      <h1 className="text-2xl font-extrabold text-gray-900 md:pr-10 md:border-r md:border-r-gray-200">
        REST
        <span className="text-indigo-600">Explorer</span>
      </h1></Link>
      <ul className="flex gap-5">
        <li className="text-xl text-gray-700 dark:text-gray-200 hover:text-black cursor-pointer">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="text-xl text-gray-700 dark:text-gray-200 hover:text-black cursor-pointer">
          <Link to={'/countries'}>Countries</Link>
        </li>
        <li className="text-xl text-gray-700 dark:text-gray-200 hover:text-black cursor-pointer">
          <Link to={'/About'}>About</Link>
        </li>
      </ul>
    </div>
  );
};
