import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 w-100  ease-in duration-300 bg-dark"
        style={{ zIndex: "10" }}
      >
        <div
          className="m-auto  d-flex justify-content-between py-2  align-items-center"
          // Adding a padding to the navbar
        >
          <Link to="/" className=" font-bold  text-decoration-none text-light">
            <h1 className="text-2xl font-bold ">Logo</h1>
          </Link>{" "}
          <ul
            style={{ listStyle: "none" }}
            className="d-none d-sm-flex px-2 text-light"
          >
            <Link to="/" className="text-decoration-none text-light">
              <li className="p-2">Home</li>
            </Link>
            <Link to="/" className="text-decoration-none text-light">
              <li className="p-2">Home</li>
            </Link>
            <Link to="/" className="text-decoration-none text-light">
              <li className="p-2">Home</li>
            </Link>
            <Link to="/" className="text-decoration-none text-light">
              <li className="p-2">Home</li>
            </Link>
          </ul>
          {/* Mobile Button */}
          <div
            className="d-block d-sm-none cursor-pointer"
            style={{ zIndex: "10" }}
          >
            {nav ? (
              <AiOutlineClose
                onClick={toggleNav}
                className="text-light"
                size={30}
              />
            ) : (
              <AiOutlineMenu
                onClick={toggleNav}
                className="text-light "
                size={30}
              />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? " position-absolute right-0  left-0 bottom-0 top-0 w-100 h-100 d-flex  justify-content-center align-items-center bg-dark text-light  d-sm-none"
                : "d-none"
            }
            style={{ width: "100%", height: "100%", zIndex: "5" }}
          >
            <ul
              style={{ listStyle: "none" }}
              className="d-flex flex-column text-light"
              onClick={toggleNav}
            >
              <Link to="/" className="text-decoration-none text-light p-3">
                <li className="p-2">Home</li>
              </Link>
              <Link to="/" className="text-decoration-none text-light p-3">
                <li className="p-2">Home</li>
              </Link>
              <Link to="/" className="text-decoration-none text-light p-3">
                <li className="p-2">Home</li>
              </Link>
              <Link to="/" className="text-decoration-none text-light p-3">
                <li className="p-2">Home</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
