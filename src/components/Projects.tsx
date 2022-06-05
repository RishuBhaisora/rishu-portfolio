import { FC, memo } from "react";
import H1 from "./H1";
import ProjectRow from "./ProjectRow";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = (props) => {
  return (
    <div className=" flex flex-col space-y-4  h-screen p-4 text-white">
      <H1>My Projects</H1>
      <h1 className="text-xl font-bold underline">Project Name :</h1>
      <ul className="flex space-y-2 list-disc pl-6 space-x-5">
        <ProjectRow
          projectName="Todo App( React-ts + Redux)"
          githubLink="https://github.com/RishuBhaisora/rishu-todo-ts-redux"
          deployedLink="https://rishabh-todo.netlify.app/"
        />
      </ul>
    </div>
  );
};

Projects.defaultProps = {};

export default memo(Projects);
