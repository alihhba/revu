import ApexCharts, { ApexOptions } from "apexcharts";
import { useEffect, useRef } from "react";

const AreaChart = ({
  data,
  legend = false,
  strokeType = "smooth",
}: {
  data: number[][];
  legend?: boolean;

  strokeType?:
    | "stepline"
    | "smooth"
    | "monotoneCubic"
    | "linestep"
    | "straight";
}) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const series = data.map((dataSet, index) => ({
      name: `Series ${index + 1}`,
      data: dataSet,
    }));

    const options: ApexOptions = {
      series: series,
      chart: {
        type: "area",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        area: {
          fillTo: "end",
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: strokeType,
      },
      yaxis: {
        min: 0,
        stepSize: 100,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "",
          offsetY: 10,
        },
      },
      grid: {
        strokeDashArray: 5,
      },
      legend: {
        show: legend,
      },
      fill: {
        type: "gradient",
        colors: ["#0052ff", "#81DE4A"],
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
        },
      },
    };

    const chart = new ApexCharts(chartContainer.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="w-full">
      <div
        id="chart"
        className="w-full h-full min-w-full"
        ref={chartContainer}
      />
    </div>
  );
};

export default AreaChart;
