import { Navigate, Route, Routes } from "react-router-dom";
import ContactsCartsWrapper from "../components/contacts/ContactsCartsWrapper";
import FileDetails from "../components/fileManager/FileDetails";
import FilesWrapper from "../components/fileManager/FilesWrapper";
import InboxChatWrapper from "../components/inboxChat/InboxChatWrapper";
import SettingsContentMobile from "../components/settings/SettingsContentMobile";
import LayoutWrapper from "../layouts/LayoutWrapper";
import NavigationsItemsLayout from "../layouts/NavigationsItemsLayout";
import CalenderPage from "../pages/calender/CalenderPage";
import ContactProfilePage from "../pages/contactProfile/ContactProfilePage";
import ContactsPage from "../pages/contacts/ContactsPage";
import Dashboard from "../pages/Dashboard";
import FileManagerPage from "../pages/fileManager/FileManagerPage";
import GanttChartPage from "../pages/GanttChart/GanttChartPage";
import InboxPage from "../pages/Inbox/InboxPage";
import KanbanPage from "../pages/kanban/KanbanPage";
import ManagementPage from "../pages/management/ManagementPage";
import DescriptionPageMobile from "../pages/projects/DescriptionPageMobile";
import Projects from "../pages/projects/Projects";
import ProjectsCartWrapper from "../pages/projects/ProjectsCartWrapper";
import SettingPage from "../pages/setting/SettingPage";
import TasksCartsWrapper from "../pages/tasks/TasksCartsWrapper";
import TasksPage from "../pages/tasks/TasksPage";
import TeamPage from "../pages/Team/TeamPage";
import UpdatePage from "../pages/updates/UpdatePage";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ReportPage from "../pages/reports/ReportPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutWrapper />}>
        <Route index element={<Navigate to="/dashboard" />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="projects" element={<Projects />}>
          {/* <Route path="projects" element={<ProjectsV2 />}> */}
          <Route path=":id" element={<ProjectsCartWrapper />} />
          <Route path="description" element={<DescriptionPageMobile />} />
        </Route>

        <Route path="reports" element={<ReportPage />} />

        {/* navigation layout */}
        <Route element={<NavigationsItemsLayout />}>
          <Route path="updates" element={<UpdatePage />} />
          <Route path="management" element={<ManagementPage />} />
          <Route path="kanban_desk" element={<KanbanPage />} />
          <Route path="tasks" element={<TasksPage />}>
            <Route path=":id" element={<TasksCartsWrapper />} />
          </Route>
          <Route path="gantt_chart" element={<GanttChartPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="settings" element={<SettingPage />}>
            <Route path=":id" element={<SettingsContentMobile />} />
          </Route>
        </Route>

        <Route path="calender" element={<CalenderPage />}>
          <Route path=":tabId" />
        </Route>
        <Route path="contacts" element={<ContactsPage />}>
          <Route path=":id" element={<ContactsCartsWrapper />} />
          <Route
            path="profile/:contact_id/:tabId"
            element={<ContactProfilePage />}
          />
        </Route>
        <Route path="inbox" element={<InboxPage />}>
          <Route path=":id" element={<InboxChatWrapper />} />
        </Route>
        <Route path="file_manager">
          <Route index element={<FileManagerPage />} />
          <Route path=":folderId" element={<FilesWrapper />}>
            <Route path=":tabId" />
            <Route path="file/:fileId" element={<FileDetails />} />
          </Route>
        </Route>
      </Route>

      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />

      <Route path="/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default Router;
