import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-center gap-8 border-b border-gray-800">
      <Link className="text-gray-400 hover:text-white transition" to="/">Home</Link>
      <Link className="text-gray-400 hover:text-white transition" to="/about">About</Link>
      <Link className="text-gray-400 hover:text-white transition" to="/contacts">Contact</Link>
    </nav>
  );
}

export default Navigation;