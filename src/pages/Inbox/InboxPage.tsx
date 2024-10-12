import { Outlet, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import UserChatInfoCart from "../../components/inboxChat/UserChatInfoCart";
import { inboxChatItem } from "../../initials";
import MainLayout from "../../layouts/MainLayout";
import { deviceType } from "../../lib/utils";

const InboxPage = () => {
  const { id } = useParams();
  const device = deviceType();
  return (
    <MainLayout>
      {!id || device !== "mobile" ? (
        <div className="flex items-start relative ">
          {/* left */}
          <div className=" max-md:w-full md:min-w-[320px] sticky top-[87px] md:max-w-min max-md:min-w-full flex flex-col">
            <div className="max-md:hidden flex items-center justify-between mb-p-20">
              <Button
                type="border"
                content={
                  <div className="flex items-center gap-p-6 justify-center">
                    <Icon icon="/icons/compose.svg" />
                    <p>Compose</p>
                  </div>
                }
              />

              <div className="flex items-center gap-p-6">
                <Button
                  type="border"
                  content={
                    <div className="flex items-center gap-p-6 justify-center">
                      <Icon icon="/icons/more_2.svg" />
                      <p>Newest</p>
                    </div>
                  }
                />
                <Button
                  type="square_Border"
                  content={<Icon icon="/icons/search.svg" />}
                />
              </div>
            </div>

            <div className="flex flex-col md:h-[79vh] overflow-y-auto scrollbar-thin gap-p-8">
              {inboxChatItem.map((item) => (
                <UserChatInfoCart item={item} />
              ))}
            </div>
          </div>

          {/* right */}
          {id ? (
            <div className="ms-p-20 flex flex-col gap-p-20 h-[79vh] max-md:hidden">
              <div className="flex items-center justify-between">
                <Button
                  type="square_Border"
                  className="px-p-10 py-p-10"
                  content={
                    <Icon
                      icon="/icons/down.svg"
                      width="12px"
                      height="12px"
                      className="rotate-90"
                    />
                  }
                />

                <div className="flex items-center gap-p-6">
                  <Button
                    type="square_Border"
                    className="px-p-10 py-p-10"
                    content={
                      <Icon
                        icon="/icons/back_forward.svg"
                        width="12px"
                        height="12px"
                      />
                    }
                  />{" "}
                  <Button
                    type="square_Border"
                    className="px-p-10 py-p-10"
                    content={
                      <Icon
                        icon="/icons/more.svg"
                        width="12px"
                        height="12px"
                        className="rotate-90"
                      />
                    }
                  />
                </div>
              </div>

              <Outlet />
            </div>
          ) : (
            <div className="flex w-full h-full items-center justify-center max-md:hidden">
              select chat
            </div>
          )}
        </div>
      ) : null}

      <div className="md:hidden">
        <Outlet />
      </div>
    </MainLayout>
  );
};

export default InboxPage;
