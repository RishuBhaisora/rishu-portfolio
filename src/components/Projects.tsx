import { FC, memo } from "react";
import H1 from "./H1";
import ProjectRow from "./ProjectRow";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = (props) => {
  return (
    <div className=" flex flex-col  h-screen p-4 text-white">
      <H1>My Projects</H1>
      <ul className="flex space-x-5">
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
