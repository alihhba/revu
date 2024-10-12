import { useParams } from "react-router-dom";
import Button from "../Button";
import CartWrapper from "../carts/CartWrapper";
import Icon from "../Icon";
import FileImageDetector from "./FileImageDetector";
import { fileManagerItems } from "../../initials";
import UserImageGallery from "../UserImageGallery";
import UserImage from "../UserImage";

const FileDetails = () => {
  const { fileId, folderId } = useParams();

  const file = fileManagerItems
    .find((file) => +file.id === +folderId!)
    ?.files.filter((file) => +file.id === +fileId!)[0];

  if (!file) return <div>not found</div>;

  return (
    <div className="w-full flex flex-col">
      <CartWrapper className="w-full max-md:flex-col h-full flex min-w-full py-[0px]">
        {/* left */}
        <div className="w-full h-auto min-h-full md:py-[2px]  justify-between flex flex-col md:pe-p-20">
          <div className="flex items-center justify-between w-full">
            <Button
              className="max-md:hidden"
              type="border"
              content={
                <div className="flex items-center gap-p-6">
                  <Icon icon="/icons/more.svg" />

                  <p className="text-base-12 font-bold">Actions</p>
                </div>
              }
            />
            <Button
              type="border"
              className="max-md:ms-auto"
              content={
                <div className="flex items-center gap-p-6">
                  <Icon icon="/icons/add_user.svg" />

                  <p className="text-base-12 font-bold">Share</p>
                </div>
              }
            />
          </div>

          <div className="flex w-full min-h-[100%] h-full items-center justify-center max-md:mt-[5vh]  md:mt-[10vh]">
            <div className="flex flex-col items-center  text-center">
              <div>
                <FileImageDetector
                  suffix={file.title.split(".")[1] as any}
                  width="53px"
                  height="53px"
                  className="px-[30px] py-[40px]"
                />
              </div>

              <p className="md:text-h2 text-h4 font-black mt-p-28">
                {file.title}
              </p>

              <p className="text-base-16 text-font-storm font-medium">
                {file.size}
              </p>

              <div className="mt-p-42">
                <UserImageGallery images={file.images} isShowMore={false} />
              </div>
            </div>
          </div>
        </div>

        {/* right   , desktop*/}
        <div className="max-md:hidden w-full flex flex-col min-w-[30%] max-w-[30%] border-s border-outline-default py-p-2 ps-p-35 min-h-[80vh]">
          <p className="text-h5 font-bold mb-p-49">File Details</p>

          <div className="flex flex-col gap-p-28">
            {file.uploadedBy && (
              <div className="flex flex-col gap-p-9">
                <p className="text-base-12 font-medium text-font-storm">
                  Uploaded by
                </p>

                <div className="flex items-center gap-p-9">
                  <UserImage
                    image={file.uploadedByImage}
                    className="w-p-36 h-p-36"
                  />
                  <p className="text-base-14 font-bold">{file.uploadedBy}</p>
                </div>
              </div>
            )}

            {file.dateUploaded && (
              <div className="flex flex-col gap-p-9">
                <p className="text-base-12 font-medium text-font-storm">
                  Date uploaded
                </p>

                <p className="text-base-14 font-bold">{file.dateUploaded}</p>
              </div>
            )}

            {file.lastModified && (
              <div className="flex flex-col gap-p-9">
                <p className="text-base-12 font-medium text-font-storm">
                  Last modified
                </p>

                <p className="text-base-14 font-bold">{file.lastModified}</p>
              </div>
            )}

            {file.extension && (
              <div className="flex flex-col gap-p-9">
                <p className="text-base-12 font-medium text-font-storm">
                  Extensions
                </p>

                <p className="text-base-14 font-bold">{file.extension}</p>
              </div>
            )}

            {file.sharedWith && (
              <div className="flex flex-col gap-p-9">
                <p className="text-base-12 font-medium text-font-storm">
                  Shared with
                </p>

                <p className="text-base-14 font-bold">{file.sharedWith}</p>
              </div>
            )}

            {file.sharedWith && (
              <div className="flex flex-col gap-p-9">
                <p className="text-base-12 font-medium text-font-storm">
                  Public link
                </p>

                <p className="text-base-14 font-bold">{file.publicLink}</p>
              </div>
            )}
          </div>
        </div>
      </CartWrapper>

      {/* bottom , mobile */}
      <div>
        <div className="md:hidden w-full flex flex-col pt-p-30 md:min-h-[80vh]">
          <div className="flex flex-col gap-p-28">
            {file.uploadedBy && (
              <div className="flex flex-col gap-p-9">
                <p className="text-base-12 font-medium text-font-storm">
                  Uploaded by
                </p>

                <div className="flex items-center gap-p-9">
                  <UserImage
                    image={file.uploadedByImage}
                    className="w-p-36 h-p-36"
                  />
                  <p className="text-base-14 font-bold">{file.uploadedBy}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2">
              {file.dateUploaded && (
                <div className="flex flex-col gap-p-9">
                  <p className="text-base-12 font-medium text-font-storm">
                    Date uploaded
                  </p>

                  <p className="text-base-14 font-bold">{file.dateUploaded}</p>
                </div>
              )}

              {file.lastModified && (
                <div className="flex flex-col gap-p-9">
                  <p className="text-base-12 font-medium text-font-storm">
                    Last modified
                  </p>

                  <p className="text-base-14 font-bold">{file.lastModified}</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 ">
              {file.extension && (
                <div className="flex flex-col gap-p-9">
                  <p className="text-base-12 font-medium text-font-storm">
                    Extensions
                  </p>

                  <p className="text-base-14 font-bold">{file.extension}</p>
                </div>
              )}

              {file.sharedWith && (
                <div className="flex flex-col gap-p-9 ">
                  <p className="text-base-12 font-medium text-font-storm">
                    Shared with
                  </p>

                  <p className="text-base-14 font-bold">{file.sharedWith}</p>
                </div>
              )}
            </div>
            {file.sharedWith && (
              <div className="flex flex-col gap-p-9">
                <p className="text-base-12 font-medium text-font-storm">
                  Public link
                </p>

                <p className="text-base-14 font-bold">{file.publicLink}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileDetails;
