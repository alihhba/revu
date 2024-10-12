import CartWrapper from "../../components/carts/CartWrapper";
import GanttChartWeek from "../../components/GanttChart/GanttChartWeek";

const GanttChartPage = () => {
  return (
    <CartWrapper className="md:px-p-0 md:py-p-0 h-[75vh] overflow-y-auto scrollbar-thin">
      <div className="rounded-lg overflow-hidden">
        <GanttChartWeek type="fa" />
      </div>
    </CartWrapper>
  );
};

export default GanttChartPage;
