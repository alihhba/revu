import Image from "../Image";

interface props {
  item: any;
}

const WorkExperienceCart = ({ item }: props) => {
  return (
    <div className="flex flex-col w-full justify-start items-start">
      <div className="flex items-start  w-full gap-p-16">
        <Image image={item.image} className="w-p-32 h-p-32" />

        <div className="flex flex-col w-full">
          <p className="text-base-14 font-bold">{item.title}</p>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-p-6">
              <p className="text-base-14 font-regular">{item.location}</p>

              <div className="bg-black w-p-4 h-p-4"></div>

              <p>{item.company}</p>
            </div>

            <div className="flex items-center gap-p-4">
              <p className="text-base-14 font-regular">{item.startTime}</p>
              <div>-</div>
              <p className="text-base-14 font-regular">{item.endTime}</p>
            </div>
          </div>

          <div className="mt-p-7">
            <p className="text-base-12 font-medium">{item.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCart;
