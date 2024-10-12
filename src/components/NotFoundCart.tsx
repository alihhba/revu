import { Link } from "react-router-dom";
import Icon from "./Icon";
import Image from "./Image";

interface props {
  image: string;
  title: string;
  desc?: string;
  linkPath?: string;
  linkTitle?: string;
}

const NotFoundCart = ({ image, title, desc, linkPath, linkTitle }: props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image image={image} className="w-[288px] h-full min-w-max" />

      <div className="mt-p-43 text-center flex flex-col items-center justify-center">
        <p className="text-h1 font-black">{title}</p>

        <p className="text-base-14 font-regular text-font-storm w-[70%] text-center">
          {desc}
        </p>
      </div>

      {linkTitle ? (
        <Link to={linkPath!} className="flex items-center gap-p-8 mt-p-20">
          <Icon icon="/icons/add.svg" color="#0052ff" />

          <p className="text-base-14 font-medium text-font-blue">{linkTitle}</p>
        </Link>
      ) : null}
    </div>
  );
};

export default NotFoundCart;
