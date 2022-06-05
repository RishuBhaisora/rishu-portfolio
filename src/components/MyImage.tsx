import { FC, memo } from "react";

type MyImageProps = {
    photo:string,
   
};

const MyImage: FC<MyImageProps> = (props) => {
  return (
    <>
      <div>
        <div className="bg-black  w-full">
          <img
            className="object-contain mx-auto relative top-4 w-96 h-96 rounded-full "
            src={props.photo}
          ></img>
        </div>
      </div>
    </>
  );
};

MyImage.defaultProps = {};

export default memo(MyImage);