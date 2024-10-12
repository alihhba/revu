import ApexCharts, { ApexOptions } from "apexcharts";
import { useEffect, useRef } from "react";

const HorizontalBarChart = ({
  data,
  legend = false,
  barHeight = "50%",
}: {
  data: number[][];
  legend?: boolean;
  barHeight?: string;
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
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: barHeight,
          borderRadius: 2,
          isDumbbell: false,
          dumbbellColors: [["#008FFB", "#00E396"]],
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
        width: 1,
        colors: ["transparent"],
      },
      yaxis: {
        min: 0,
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
        opacity: 1,
        colors: ["#0052ff", "#81de4a"],
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

export default HorizontalBarChart;
