import { FC, memo } from "react";

type ProjectRowProps = {
  projectName: string;
  githubLink: string;
  deployedLink: string;
  
};

const ProjectRow: FC<ProjectRowProps> = ({
  projectName,
  githubLink,
  deployedLink,

}) => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      
        
        <li className="sm:text-2xl  "> {projectName} </li>
      
      <div className="flex flex-col self-start">
        <a
          href={githubLink}
          target="_blank"
          className="text-indigo-500 hover:text-yellow-300 underline"
        >
          click here for github repo link.
        </a>
        <a
          href={deployedLink}
          target="_blank"
          className="text-green-500 hover:text-yellow-300 underline"
        >
          click here for web link.
        </a>
      </div>
    </div>
  );
};

ProjectRow.defaultProps = {};

export default memo(ProjectRow);
