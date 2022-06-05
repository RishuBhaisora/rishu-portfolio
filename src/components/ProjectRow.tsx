import { FC, memo } from "react";

type ProjectRowProps = {
  projectName:string;
  githubLink:string;
  deployedLink:string;
};

const ProjectRow: FC<ProjectRowProps> = ({projectName, githubLink,deployedLink}) => {
  return (
    <div className=" flex justify-center items-center space-x-4">
      <li className="text-2xl  ">{projectName} : </li>
      <div className="flex flex-col">
        <a
          href={githubLink}
          target="_blank"
          className="text-indigo-500 underline"
        >
          click here for github repo link
        </a>
        <a
          href={deployedLink}
          target="_blank"
          className="text-green-500 underline"
        >
          click here for web link
        </a>
      </div>
    </div>
  );
};

ProjectRow.defaultProps = {};

export default memo(ProjectRow);