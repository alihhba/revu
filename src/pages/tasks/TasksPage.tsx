import { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import NotFoundCart from "../../components/NotFoundCart";
import TabComponent from "../../components/TabComponent";
import { tasksItems } from "../../initials";

const tabsItems = [
  {
    title: "all Tasks",
    path: "all_tasks",
  },
  {
    title: "pending",
    path: "pending",
  },
  {
    title: "done",
    path: "done",
  },
];

const TasksPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  useEffect(() => {
    if (!pathname.split("/")[2]) navigate(`/tasks/${tabsItems[0].path}`);
  }, [navigate, pathname]);

  if (!tasksItems?.length)
    return (
      <NotFoundCart
        image="/public/images/undraw_projections_re_ulc6.svg"
        title="No tasks found?"
        desc="Try to assign more tasks to your employees or create a ne project from scratch"
        linkTitle="Create a new task"
      />
    );

  return (
    <div className="h-full w-full">
      {/* tabs */}
      {id ? (
        <div className="flex items-center justify-between w-full">
          <div className="max-md:me-p-10">
            <TabComponent tabTitles={tabsItems} activeId={id!} />
          </div>
          {/* desktop buttons */}
          <div className="max-md:hidden flex items-center gap-p-6 ">
            <Button
              type="border"
              className="font-black text-base-12"
              content={
                <div className="flex items-center gap-p-6">
                  <Icon icon="/icons/more_2.svg" />
                  <p>Sort:A-Z</p>
                </div>
              }
            />
            <Button
              type="border"
              className="font-black text-base-12"
              content={
                <div className="flex items-center gap-p-6">
                  <Icon icon="/icons/more.svg" />
                  <p>Bulk Actions</p>
                </div>
              }
            />
          </div>
          {/* mobile button */}
          <div className="md:hidden">
            <Button
              type="square_Border"
              content={
                <div>
                  <Icon icon="/icons/more_2.svg" />
                </div>
              }
            />
          </div>
        </div>
      ) : null}

      {/* main outlet */}
      <div className="mt-p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default TasksPage;
