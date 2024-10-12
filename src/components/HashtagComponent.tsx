import Badge from "./Badge";

interface props {
  title: string;
  postNum: string;
  tagNum?: string;
}

const HashtagComponent = ({ postNum, title, tagNum }: props) => {
  return (
    <div className="flex items-start justify-between w-full">
      <div className="flex flex-col">
        <p className="text-base-14 font-bold">
          <span>#</span>
          {title}
        </p>

        <p className="text-base-12 text-font-storm font-medium">
          {postNum} <span>Posts </span>
        </p>
      </div>

      {tagNum ? (
        <div>
          <Badge title={tagNum} type="secondary" className="py-[1px]" />
        </div>
      ) : null}
    </div>
  );
};

export default HashtagComponent;
