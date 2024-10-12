import Button from "../Button";
import CartWrapper from "../carts/CartWrapper";
import DotPoint from "../DotPoint";
import Icon from "../Icon";
import Image from "../Image";

const chartItem = [
  { title: "New tasks", item: "490", type: "primary" },
  { title: "Complete tasks", item: "490", type: "secondary" },
  { title: "Avg. time spent", item: "1hr 30 mins", type: "secondary" },
  { title: "Total income", item: "$4.524.50", type: "danger" },
  { title: "Total time spent", item: "480hr 34 mins", type: "primary" },
];

const StatisticsContactDetails = () => {
  return (
    <CartWrapper className="w-full max-md:px-[0px] max-md:bg-transparent">
      <div className="flex flex-col w-full">
        {/* header */}
        <div className="flex items-center justify-between border-b border-outline-default max-md:hidden ">
          <div className="flex items-center justify-between w-full p-p-20 pt-0 ">
            <p className="text-h6 font-extrabold">Tasks Performance</p>

            <Icon icon="/icons/calender.svg " />
          </div>
        </div>

        {/* content */}
        <div className="mt-p-11 flex flex-col w-full">
          <Image
            image="/public/images/contact_chart.svg"
            className="w-full h-full min-w-full"
          />

          <div className="mt-p-11 md:px-p-20">
            {chartItem.map((item) => (
              <div className="w-full flex flex-col">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-p-16">
                    <DotPoint type={item.type as any} />
                    <p className="text-base-14 font-regular">{item.title}</p>
                  </div>

                  <div className="text-base-14 font-black">{item.item}</div>
                </div>

                <div className="w-full border-b h-full border-outline-default my-p-12" />
              </div>
            ))}
          </div>

          {/* button */}
          <div className="mt-p-29 w-full md:px-p-20">
            <Button
              className="w-full "
              type="border"
              content={
                <div className="flex items-center justify-center gap-p-6 w-full">
                  <Icon icon="/icons/details_report.svg" color="#000" />
                  <p className="text-base-14 font-bold">See detailed report</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </CartWrapper>
  );
};

export default StatisticsContactDetails;
