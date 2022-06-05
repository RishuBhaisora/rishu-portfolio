import { FC, memo } from "react";

type MenuItemsProps = {
    children:string
};

const MenuItems: FC<MenuItemsProps> = ({children}) => {
  return (
    <>
      <li className=" text-sm font-mono  mt-8 sm:mt-0 underline  bg-black text-white">
        {children}
      </li>
    </>
  );
};

MenuItems.defaultProps = {};

export default memo(MenuItems);