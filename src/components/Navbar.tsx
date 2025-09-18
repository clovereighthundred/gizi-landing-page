import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;

    const targetId = href.replace(/.*#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <a
        onClick={handleScroll}
        href="#about"
        className="font-Be-Vietnam-Pro text-[16px] font-semibold text-black hover:text-[#2556bc] px-3 py-3 sm:py-2 transition-colors duration-200 block border-b border-gray-100 sm:border-none last:border-none"
      >
        About
      </a>
      <a
        onClick={handleScroll}
        href="#features"
        className=" font-Be-Vietnam-Pro text-[16px] font-semibold text-black hover:text-[#2556bc] px-3 py-3 sm:py-2 transition-colors duration-200 block border-b border-gray-100 sm:border-none last:border-none"
      >
        Features
      </a>
      <a
        onClick={handleScroll}
        href="#benefits"
        className="font-Be-Vietnam-Pro text-[16px] font-semibold text-black hover:text-[#2556bc] px-3 py-3 sm:py-2 transition-colors duration-200 block border-b border-gray-100 sm:border-none last:border-none"
      >
        Benefits
      </a>
      <a
        onClick={handleScroll}
        href="#faqs"
        className="font-Be-Vietnam-Pro text-[16px] font-semibold text-black hover:text-[#2556bc] px-3 py-3 sm:py-2 transition-colors duration-200 block border-b border-gray-100 sm:border-none last:border-none"
      >
        FAQs
      </a>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center">
        {/* Desktop Navigation */}
        <div className="hidden w-full md:flex space-x-1">
          <NavLinks />

          {/* Waitlist Button */}
          <a href="#waitlist">
            <Button
              variant="outline"
              className="ml-6 p-4 font-Be-Vietnam-Pro text-[17px] text-[#2556bc] border-[#2556bc] hover:bg-[#2556bc] hover:text-white transition-colors duration-200"
            >
              Join Waitlist
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Button*/}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={toggleNavbar}
            className="p-2 text-black hover:text-[#2556bc] transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="h-12 w-12" />
            ) : (
              <Menu className="h-12 w-12" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col py-6">
            <NavLinks />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
