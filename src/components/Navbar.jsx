import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-700 w-full flex flex-row justify-between  fixed top-0 z-50  h-[120px]">
      <Link
        to="/"
        className="flex text-6xl items-center py-5 px-2 text-gray-200 hover:text-gray-900"
      >
        Lifelong
      </Link>
      <Link
        className="self-center  text-3xl  space-x-1 mr-4 text-gray-200"
        to="/about"
      >
        About
      </Link>
    </nav>
  );
}
