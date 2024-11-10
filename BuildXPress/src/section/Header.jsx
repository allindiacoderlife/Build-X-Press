import axios from "axios";
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
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleLoginForm = () => {
    setIsLoginOpen((prev) => !prev);
  };

  const toggleRegistionForm = () => {
    setIsRegisterOpen((prev) => !prev);
    setIsLoginOpen((prev) => !prev);
  };

  const handleCart = () => {
    navigate("/Cart");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://192.168.131.252:5001/login", {
        email,
        password,
      });
      // Handle successful login
      alert("Login successful!");
    } catch (error) {
      // Handle error
      alert("Login failed. Please try again.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userData = {
      name: name,
      phone,
      email,
      password,
    };
    axios
      .post("http://192.168.131.252:5001/register", {
        name,
        phone,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "Ok") {
          alert("Registration successful!");
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              <button
                className="px-2 flex items-center justify-center"
                onClick={handleCart}
              >
                <IoCartSharp className="text-2xl text-gray-500 hover:text-gray-300 transition duration-300" />
              </button>
              <button
                className="bg-fuchsia-500/50 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-widest relative hidden md:inline-flex hover:bg-fuchsia-500/30 transition duration-300"
                onClick={toggleLoginForm}
              >
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
      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg z-30">
          <div className="bg-gray-800 p-6 rounded-md shadow-lg">
            <h2 className="text-xl mb-4 text-center">Login</h2>
            <form className="text-black" onSubmit={handleLoginSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="mb-2 p-2 border w-full"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mb-4 p-2 border w-full"
              />
              <div className="gap-3">
                <p className="text-white text-center">
                  You do not have an account?
                  <a
                    className="text-fuchsia-600 ml-3 mb-5"
                    href="#"
                    onClick={toggleRegistionForm}
                  >
                    Sign up
                  </a>
                </p>

                <button className="bg-fuchsia-500/50 mt-10 px-4 py-2 w-full font-extrabold uppercase justify-center font-heading text-sm tracking-widest relative hidden md:inline-flex hover:bg-fuchsia-500/30 transition duration-300">
                  <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500"></div>
                  <span className="leading-6 text-white">Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isRegisterOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg z-30">
          <div className="bg-gray-800 p-6 rounded-md shadow-lg">
            <h2 className="text-xl mb-4 text-center">Register</h2>
            <form className="text-black" onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="mb-2 p-2 border w-full"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="mb-2 p-2 border w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mb-2 p-2 border w-full"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mb-4 p-2 border w-full"
              />
              <div className="gap-3">
                <p className="text-white text-center">
                  Already have an account?
                  <a
                    className="text-fuchsia-600 ml-3 mb-5"
                    href="#"
                    onClick={toggleRegistionForm}
                  >
                    Login
                  </a>
                </p>

                <button className="bg-fuchsia-500/50 mt-10 px-4 py-2 w-full font-extrabold uppercase justify-center font-heading text-sm tracking-widest relative hidden md:inline-flex hover:bg-fuchsia-500/30 transition duration-300">
                  <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500"></div>
                  <span className="leading-6 text-white">Register</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
