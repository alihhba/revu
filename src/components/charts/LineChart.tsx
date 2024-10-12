import ApexCharts, { ApexOptions } from "apexcharts";
import { useEffect, useRef } from "react";

const LineChart = ({
  data,
  legend = false,
  barWidth = "50%",
  strokeType = "smooth",
  height = 350,
}: {
  data: number[][];
  legend?: boolean;
  barWidth?: string;
  strokeType?:
    | "stepline"
    | "smooth"
    | "monotoneCubic"
    | "linestep"
    | "straight";
  height?: number;
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
        type: "line",
        height: height,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: barWidth,
          borderRadius: 4,
          borderRadiusApplication: "end",
          colors: {
            backgroundBarColors: ["#f8f8fc"],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["#0052ff", "#000"],
        curve: strokeType,
      },
      markers: {
        size: 4,
        colors: ["#0052ff", "#000"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 6,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        title: {
          offsetY: 10,
        },
      },
      grid: {
        strokeDashArray: 5,
      },
      yaxis: {
        min: 0,
        max: 500,
        tickAmount: 5,
        stepSize: 3,
        labels: {
          show: true,
          formatter: (value) => value.toFixed(0),
        },
        axisBorder: {
          show: false,
        },
      },
      legend: {
        show: legend,
      },
      fill: {
        opacity: 1,
        colors: ["#0052ff"],
      },
    };

    const chart = new ApexCharts(chartContainer.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

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

export default LineChart;
