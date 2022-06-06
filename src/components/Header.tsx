import { FC, memo, useState } from "react";
import MenuItems from "./MenuItems";
import { Link, Outlet } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";


type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const [theme, setTheme] = useState("hidden");
  const [blur, setBlur] = useState("");

  const handleBlur = () => {
    setBlur("");
    setTheme("hidden");
  };
  const hidden = () => {
    if (theme === "hidden") {
      setTheme("");
      setBlur("blur");
    } else {
      setTheme("hidden");
      setBlur("");
    }
  };
  return (
    <>
      <div className="  h-full p-4 rounded-lg mx-auto max-w-screen-sm bg-black ">
        <HiMenuAlt1
          onClick={hidden}
          className="hover:bg-white hover:text-black rounded-lg text-white font-black w-10 h-10 text-2xl sm:hidden"
        />

        <div className="flex sm:flex-col  ">
          <ul
            onClick={handleBlur}
            className={
              "  m-4 sm:flex justify-between text-2xl " + theme
            }
          >
            <Link to="/home">
              <MenuItems>HOME</MenuItems>
            </Link>
            <Link to="/about">
              <MenuItems>ABOUT</MenuItems>
            </Link>
            <Link to="/projects">
              <MenuItems>PROJECTS</MenuItems>
            </Link>
            <Link to="/contact">
              <MenuItems>CONTACT</MenuItems>
            </Link>
          </ul>

          <div
            className={
              " flex rounded-lg   mx-auto w-full border-2 border-white mt-5 " +
              blur
            }
          >
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);
