import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Icon from "./Icon";
import UserImage from "./UserImage";

interface Props {
  images: string[];
}

const ImageSliderOne = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
  
    if (sliderRef.current && sliderRef.current.firstChild) {
      const firstImage = sliderRef.current.firstChild as HTMLElement;
      setImageWidth(
        firstImage.offsetWidth +
          parseInt(getComputedStyle(firstImage).marginRight)
      );
    }
  }, [images]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: newIndex * imageWidth,
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: newIndex * imageWidth,
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };

  return (
    <div className="relative  ">
      <div
        ref={sliderRef}
        className="flex items-center gap-p-14 mt-p-10 overflow-x-auto whitespace-nowrap scrollbar-none"
      >
        {images.map((image) => (
          <img
            key={image}
            src={image}
            className="md:w-[280px] w-[124px] h-full"
          />
        ))}
      </div>

      {currentIndex > 0 && (
        <div
          onClick={handlePrevClick}
          className="absolute start-0 top-0 h-full flex items-center justify-center"
        >
          <Button
            type="border"
            className="py-p-10 px-p-11"
            content={
              <Icon
                icon="/icons/down.svg"
                className="rotate-90"
                height="0.7rem"
                width="0.7rem"
              />
            }
          />
        </div>
      )}

      <div
        onClick={handleNextClick}
        className="absolute end-0 top-0 h-full flex items-center justify-center z-[2]"
      >
        <Button
          type="border"
          className="py-p-10 px-p-11 "
          content={
            <Icon
              icon="/icons/down.svg"
              className="-rotate-90"
              height="0.7rem"
              width="0.7rem"
            />
          }
        />
      </div>

      <div className="absolute top-0 h-full w-fit end-0 ">
        <UserImage
          image="/public/images/mask_3.svg"
          className="w-full h-full min-h-full"
        />
      </div>
    </div>
  );
};

export default ImageSliderOne;
