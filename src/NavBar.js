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
        className="fixed left-0 top-0 w-full z-index-10 ease-in duration-300"
        style={{ backgroundColor: `${color}` }}
      >
        <div className="max-w-7xl m-auto  d-flex justify-content-between align-items-center p-4">
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
          <div className="d-block d-sm-none z-3 cursor-pointer">
            {nav ? (
              <AiOutlineClose
                onClick={toggleNav}
                className="text-light z-3"
                size={30}
              />
            ) : (
              <AiOutlineMenu
                onClick={toggleNav}
                className="text-light z-3"
                size={30}
              />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "d-flex position-absolute right-0 left-0 bottom-0 top-0  justify-content-center align-items-center  d-sm-none"
                : "d-none"
            }
          >
            <div className="d-flex justify-content-center">
              yvbun
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
