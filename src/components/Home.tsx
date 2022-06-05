import { FC, memo } from "react";
import About from "./About";
import MyImage from "./MyImage";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <div className="mt-10 ">
        <div className="flex flex-col   items-center justify-center ">
          <h1 className="font-mono  text-6xl text-white ">Meet.</h1>
          <h1 className="font-mono  text-6xl text-white ">Rishabh.</h1>

          <MyImage photo="https://media.discordapp.net/attachments/914925452710281291/958774773574430800/IMG_20210425_195608.jpg"></MyImage>
          <About></About>
        </div>
      </div>
    </>
  );
};

Home.defaultProps = {};

export default memo(Home);