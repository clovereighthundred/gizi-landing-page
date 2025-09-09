import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white-800">
      <Link to="#hero">
        <img
          src="public/logo_path975.png"
          alt="Gizi Logo"
          className="h-8 w-8"
        />

        <h2>GIZI</h2>
      </Link>
    </header>
  );
}

export default Header;
