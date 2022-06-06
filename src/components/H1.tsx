import { FC, memo } from "react";

type H1Props = {
  children:string
};

const H1: FC<H1Props> = ({ children }) => {
  return (
    <h1 className=" font-mono text-4xl font-bold border-y-2 self-start mb-20">
      {children} 
    </h1>
  );
};

H1.defaultProps = {};

export default memo(H1);