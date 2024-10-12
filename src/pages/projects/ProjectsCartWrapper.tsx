import { useParams } from "react-router-dom";
import NotFoundCart from "../../components/NotFoundCart";
import ProjectCartV1 from "../../components/ProjectCartV1";
import { projectsAllItems } from "../../initials";

const ProjectsCartWrapper = () => {
  const { id } = useParams();

  if (!projectsAllItems)
    return (
      <div className="flex items-center justify-center ">
        <NotFoundCart
          image="/public/images/undraw_designer_girl_re_h54c.svg"
          title="No projects found?"
          desc="Try to assign more tasks to your employees or
  create a new project from scratch"
          linkTitle="Create a new project"
        />
      </div>
    );

  return (
    // v2
    // <div className="flex flex-col md:rounded-[8px] max-md:gap-p-8 overflow-x-hidden">

    <div className="flex flex-col gap-p-6">
      {/* <div className="gap-p-20 grid md:grid-cols-2 lg:grid-cols-3 mx-auto grid-cols-1 2xl:grid-cols-4"> */}
      {projectsAllItems
        .filter((item) => (id !== "all_projects" ? item.category === id : item))
        .map((item) => (
          // v1
          <ProjectCartV1 type="line" item={item} />

          // v2
          // <div className="flex flex-col border-b last:border-none">
          //   <ProjectCartV2 type="line" item={item} />
          // </div>
        ))}
    </div>
  );
};

export default ProjectsCartWrapper;
