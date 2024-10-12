interface props {
  event: number;
}
const GanttChartEventCart = ({ event }: props) => {
  return (
    <div
      className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-8"
      style={{
        gridTemplateRows: "1.2rem repeat(286, minmax(0, 1fr)) auto",
      }}
    >
      <div
        className={`relative flex sm:col-start-1 col-span-1  `}
        style={{ gridRow: `${event * 6}  / span 6` }}
      >
        <div className="w-full h-full flex items-center ps-3">
          <p className="line-clamp-1 text-base font-semibold">designer</p>
        </div>
      </div>
      <div
        className={`relative flex sm:col-start-${
          event + 1
        } col-span-${event}  `}
        style={{ gridRow: `${event * 6}  / span 6` }}
      >
        <div className="flex items-center justify-center w-full px-2 py-2">
          <div className="bg-blue-200 w-full h-full flex items-center rounded-full ps-1 gap-1">
            <div className="w-7 h-7 min-h-7 min-w-7 bg-black rounded-full"></div>
            <p className="text-sm font-medium line-clamp-1 ">do something</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttChartEventCart;
