import { useEffect } from "react";
import Button from "../../components/Button";
import FolderCart from "../../components/fileManager/FolderCart";
import Icon from "../../components/Icon";
import { useNavbar } from "../../context/NavbarContext";
import { fileManagerItems } from "../../initials";
import MainLayout from "../../layouts/MainLayout";

const FileManagerPage = () => {
  const { ChangeMobileTitleHandler, resetNavbar } = useNavbar();

  useEffect(() => {
    ChangeMobileTitleHandler({ type: 2 });

    return () => {
      resetNavbar();
    };
  }, []);

  return (
    <MainLayout className="flex flex-col w-full gap-p-20">
      {/* buttons */}
      <div className="flex items-center justify-between max-md:hidden">
        <Button
          type="border"
          content={
            <div className="flex items-center gap-p-6">
              <Icon icon="/icons/add_folder.svg" />
              <p className="text-base-12 font-bold">Add New Folder</p>
            </div>
          }
        />
        <Button
          type="border"
          content={
            <div className="flex items-center gap-p-6">
              <Icon icon="/icons/upload_cloud.svg" />
              <p className="text-base-12 font-bold">Upload New File</p>
            </div>
          }
        />
      </div>

      {/* content */}
      <div className="flex flex-col gap-p-7">
        {fileManagerItems.map((file) => (
          <FolderCart item={file} />
        ))}
      </div>
    </MainLayout>
  );
};

export default FileManagerPage;
