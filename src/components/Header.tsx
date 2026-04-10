import { Link } from "react-router-dom";
import Navbar from "./Navbar.tsx";

function Header() {
  return (
    <header className="bg-white sticky top-0 flex-wrap z-20 mx-auto flex w-full items-center justify-between border-b p-4 md:p-8">
      <Link
        to="/"
        className="flex items-center space-x-2 hover:opacity-90 transition-opacity duration-200"
      >
        <img src="/logo_path975.png" alt="Gizi Logo" className="h-10 w-10" />

        <h2 className="font-Poppins text-2xl font-semibold text-black">GIZI</h2>
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
