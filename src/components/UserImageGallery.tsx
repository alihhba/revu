import { cn } from "../lib/utils";
import UserImage from "./UserImage";

interface userImageGalleryProps {
  images: string[];
  showNumber?: number;
  margin?: number;
  isShowMore?: boolean;
  type?: 1 | 2;
  imageClass?: string;
}

const UserImageGallery = ({
  images,
  showNumber = 3,
  margin = 10,
  type = 2,
  isShowMore = true,
  imageClass,
}: userImageGalleryProps) => {
  return (
    <div className="flex items-center">
      {images?.slice(0, showNumber).map((image, i: number) => (
        <div
          style={{
            marginLeft: i === 0 ? 0 : -margin,
            zIndex: type === 1 ? showNumber - i : i,
          }}
          key={i}
          className={cn(`-ms-p-10 first:-ms-0 relative z `, `-ms-p-${margin}`)}
        >
          <UserImage
            image={image}
            className={cn(
              "w-p-28 h-p-28 border-[2px] border-primary-white-default ",
              imageClass , 'object-cover'
            )}
          />
          {i + 1 === showNumber && isShowMore ? (
            <div className=" w-full h-full bg-[#0F0F0F]/80  absolute inset-0 rounded-full p-p-2 flex items-center justify-center">
              <div className="font-medium text-base-12 mt-p-2 text-primary-white-default flex items-center justify-center">
                <span className="">+</span>
                <p>{images.length - showNumber}</p>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default UserImageGallery;
