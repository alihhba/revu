import Badge from "../Badge";
import CartWrapper from "../carts/CartWrapper";
import WorkExperienceCart from "./WorkExperienceCart";

interface props {
  item: any;
}

const BioContactDetails = ({ item }: props) => {
  return (
    <CartWrapper className="w-full flex flex-col gap-p-27 max-md:bg-transparent max-md:px-p-0">
      {/* short bio */}
      <div className="flex flex-col gap-p-2">
        <p className="text-base-16 font-black">Short bio</p>
        <p className="text-base-14 font-regular">{item?.bio}</p>
      </div>

      {/* skills */}
      <div className="flex flex-col gap-p-8">
        <p className="text-base-16 font-black">Skills</p>
        <div className="flex flex-wrap gap-p-4">
          {item?.skills?.map((skill: any) => (
            <div>
              <Badge
                type="primary"
                title={skill?.title}
                className="max-md:hidden"
              />
              <Badge
                type="border"
                title={skill?.title}
                className="md:hidden"
              />
            </div>
          ))}
        </div>
      </div>

      {/* work experience */}
      <div className="flex flex-col w-full">
        <div className="mb-p-13">
          <p className="font-black text-base-16">Work experience</p>
        </div>

        {item?.work_experience?.map((item: any) => (
          <div className="flex flex-col w-full">
            <WorkExperienceCart item={item} />

            <div className="w-full border-b border-outline-default my-p-16"></div>
          </div>
        ))}
      </div>
    </CartWrapper>
  );
};

export default BioContactDetails;
