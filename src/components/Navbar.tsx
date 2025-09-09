import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/benefits">Benefits</Link>
      <Link to="/features">Features</Link>
      <Link to="/faqs">FAQs</Link>
    </>
  );
};

const Nav = () => {
  return (
    <nav className="w-1/4">
      <div className="flex justify-between items-center">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Nav;
