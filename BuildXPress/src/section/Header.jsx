import React, { useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const navLink = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/Shop",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/Cart");
  }
  return (
    <>
      <header className=" sticky top-0 bg-gray-900/50 backdrop-blur-lg z-40">
        <div className="container">
          <div className="flex justify-between items-center h-24">
            <div>
              <h1 className="text-3xl font-bold">BUILDXPRESS</h1>
            </div>
            <nav className="hidden md:flex gap-12">
              {navLink.map(({ title, href }) => (
                <a
                  href={href}
                  key={title}
                  className="text-lg font-bold text-gray-500 hover:text-gray-300 transition duration-300"
                >
                  {title}
                </a>
              ))}
            </nav>
            <div className="flex gap-4 items-center">
              <button className="px-2 flex items-center justify-center" onClick={handleCart}>
                <IoCartSharp className="text-2xl text-gray-500 hover:text-gray-300 transition duration-300" />
              </button>
              <button className="bg-fuchsia-500/50 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-widest relative hidden md:inline-flex hover:bg-fuchsia-500/30 transition duration-300">
                <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500"></div>
                <span className="leading-6">Login</span>
              </button>
              <div
                className="size-10 relative transition duration-300 cursor-pointer md:hidden lg:hidden xl:hidden"
                onClick={() => setIsMenuOpen((curr) => !curr)}
              >
                {isMenuOpen ? (
                  <div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div
                        className={
                          "w-5 h-0.5 bg-gray-300 translate-y-0 rotate-45"
                        }
                      ></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div
                        className={
                          "w-5 h-0.5 bg-gray-300 translate-y-0 -rotate-45"
                        }
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div
                        className={"w-5 h-0.5 bg-gray-300 -translate-y-1"}
                      ></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div
                        className={"w-5 h-0.5 bg-gray-300 translate-y-1"}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed size-full top-0 left-0 z-30 bg-gray-900">
          <div className="absolute inset-2 rounded-md bg-gray-800 mt-24">
            <div className="h-full flex justify-center items-center">
              <nav className="flex flex-col items-center gap-12">
                {navLink.map(({ title, href }) => (
                  <a
                    href={href}
                    key={title}
                    className="text-4xl font-heading font-black text-gray-500 hover:text-gray-300 transition duration-300"
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
