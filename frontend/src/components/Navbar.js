import clsx from "clsx";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      label: "Home",
      link: "home",
    },
    {
      label: "Skill",
      link: "Skill",
    },
    {
      label: "About",
      link: "#",
    },
    {
      label: "Project",
      link: "Project",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];

  const handleHomeClick = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="fixed top-0 z-50 flex w-screen  justify-between px-8 items-center py-6 backdrop-blur-md">
      <div className="flex lg:w-screen items-center gap-8 justify-between">
        <section className="flex lg:w-1/3 items-center gap-4">
          <Link
            to="/"
            className="text-2xl md:text-3xl lg:px-20 font-DayOne text-white"
          >
            Atveek<span className="text-[#1EFF78]">.</span>
          </Link>
        </section>
        <section className="flex items-center lg:w-1/2 px-20 gap-8 justify-between">
          {navlinks.map((d, i) => (
            <Link
              key={i}
              onClick={() => {
                if (d.label === "Home") {
                  handleHomeClick();
                }
              }}
              className="hidden lg:block text-white font-semibold text-lg hover:text-[#6B7CDA] cursor-pointer"
              to={d.link}
              duration={500}
              smooth={true}
            >
              {d.label}
            </Link>
          ))}
        </section>
      </div>

      {/* Sidebar mobile menu */}
      <div
        className={clsx(
          "fixed h-screen w-full lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
          isSideMenuOpen && "translate-x-0"
        )}
      >
        <section className="text-white bg-[#6B7CDA] flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
          <IoClose
            onClick={() => setMenu(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />

          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="font-bold"
              onClick={() => {
                setMenu(false);
                if (d.label === "Home") {
                  handleHomeClick();
                }
              }}
              to={d.link}
              duration={500}
              smooth={true}
            >
              {d.label}
            </Link>
          ))}
        </section>
      </div>

      {/* Last section */}
      <section className="flex items-center gap-4">
        {/* Cart icon */}
        <IoMenu
          onClick={() => setMenu(true)}
          className="text-4xl cursor-pointer text-white lg:hidden"
        />
        {/* Avatar img */}
      </section>
    </nav>
  );
}
