import { useState } from "react";
import { cn } from "../lib/utils";
import Icon from "./Icon";
import CustomCheck from "./checkBox/CustomCheck";

const SeeMoreDetails = ({
  children,
  title = "details",
  item,
}: {
  children?: React.ReactNode;
  title?: string;
  item?: any[];
}) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="flex flex-col gap-p-5">
      <p
        className={cn(
          "text-base-14 font-regular",
          viewMore ? "" : "line-clamp-2"
        )}
      >
        {children ? children : null}
      </p>

      {item ? (
        <div>
          {item.slice(0, viewMore ? item.length : 3).map((item) => (
            <div key={item.id} onClick={(e) => e.stopPropagation()}>
              <CustomCheck
                wrapperStyle="text-base-12 font-bold mb-p-14"
                title={item.title}
              />
            </div>
          ))}
        </div>
      ) : null}

      <div
        onClick={() => setViewMore(!viewMore)}
        className="flex items-center gap-p-6 mt-p-14 cursor-pointer"
      >
        <Icon icon="/icons/more.svg" color="#0052ff" />

        {viewMore ? (
          <p className="text-base-12 font-bold text-font-blue ">
            {`see less ${title}`}
          </p>
        ) : (
          <p className="text-base-12 font-bold text-font-blue ">
            {`see more ${title}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default SeeMoreDetails;
