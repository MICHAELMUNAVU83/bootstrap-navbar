import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("red");
  const [textColor, setTextColor] = useState("white");
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 w-100  ease-in duration-300"
        style={{ backgroundColor: `${color} `, zIndex: "10" }}
      >
        <div className="max-w-[12] m-auto  d-flex justify-content-between align-items-center p-4">
          <Link
            to="/"
            className=" font-bold  text-decoration-none"
            style={{ color: `${textColor}` }}
          >
            <h1 className="text-2xl font-bold ">Logo</h1>
          </Link>{" "}
          <ul
            style={{ color: `${textColor}`, listStyle: "none" }}
            className="d-none d-sm-flex"
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
                ? " position-absolute right-0  left-0 bottom-0 top-0 w-100 h-100 d-flex  justify-content-center align-items-center bg-dark text-light   d-sm-none"
                : "d-none"
            }
            style={{ width: "100%", height: "100%", zIndex: "5" }}
          >
            <ul
              style={{ color: `${textColor}`, listStyle: "none" }}
              className="d-flex flex-column"
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
