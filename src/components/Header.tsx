import { FC, memo, useState } from "react";
import MenuItems from "./MenuItems";
import { Link, Outlet } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
;
import { MdCancelPresentation } from "react-icons/md";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const [theme, setTheme] = useState("hidden");


  const hidden = () => {
    if (theme === "hidden") {
      setTheme("");
    } else {
      setTheme("hidden");
    }
  };
  return (
    <>
     
        <div className=" h-full p-4 mx-auto max-w-screen-sm bg-black ">
          {theme && (
            <HiMenuAlt1
              onClick={hidden}
              className=" text-white font-black w-10 h-10 text-2xl sm:hidden"
            />
          )}
          {!theme && (
            <MdCancelPresentation
              onClick={hidden}
              className=" text-white w-8 h-8 absolute  right-2 top-0 font-black text-2xl sm:hidden"
            ></MdCancelPresentation>
          )}

          <div className="flex sm:flex-col  ">
            <ul className={" m-4 sm:flex justify-between text-2xl " + theme}>
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

            <div className=" flex  overflow-scroll mx-auto w-full border-2 border-white mt-5" >
              <Outlet></Outlet>
            </div>
          </div>
        </div>
     
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);
