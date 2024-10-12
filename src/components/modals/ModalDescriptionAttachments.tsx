import Icon from "../Icon";
import Image from "../Image";

const ModalDescriptionAttachments = ({ item }: { item: any }) => {
  return (
    <div className="flex flex-col gap-p-12">
      <p className="font-bold text-base-16">Attachments</p>

      <div className="flex flex-wrap gap-p-8 md:gap-p-12">
        {item?.attachments?.map((item: any) => (
          <Image image={item} className="w-p-96 h-p-96 rounded-[8px]" />
        ))}

        <div className="w-p-96 h-p-96 border rounded-[8px] flex items-center justify-center cursor-pointer">
          <div className="flex items-center gap-p-6 flex-col">
            <Icon icon="/icons/upload_cloud.svg" />

            <p className="text-base-12 font-bold text-font-storm">Upload</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDescriptionAttachments;
