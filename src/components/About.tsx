import { FC, memo } from "react";
import H1 from "./H1";

type AboutProps = {};

const About: FC<AboutProps> = (props) => {
  return (
    <>
      <div className="flex flex-col h-screen  text-white   p-4 py-10">
        <H1>
          About Me
        </H1>
        <ul className="pl-8  list-disc text-3xl space-y-5">
          <li>Name : Rishabh</li>
          <li>DOB : 12/05/2002</li>
          <li>Education Qualification : 12th</li>
          <li>Skills : Html,Css,JavaScript ,TypeScript,React, Redux,</li>
          <li>Hobies : Travelling ,Music</li>
          <li>Other : All I learned from CodeYogi </li>
        </ul>
      </div>
    </>
  );
};

About.defaultProps = {};

export default memo(About);
