import { FC, memo } from "react";

type MenuItemsProps = {
  children: string;
};

const MenuItems: FC<MenuItemsProps> = ({ children }) => {
  return (
    <>
      <li className="hover:bg-slate-50 hover:text-black rounded-lg p-3 text-sm font-mono  mt-8 sm:mt-0 underline  bg-black text-white">
        {children}
      </li>
    </>
  );
};

MenuItems.defaultProps = {};

export default memo(MenuItems);
