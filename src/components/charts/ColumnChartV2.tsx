import ApexCharts, { ApexOptions } from "apexcharts";
import { useEffect, useRef } from "react";

const ColumnChartV2 = ({
  data,
  legend = false,
  barWidth = "50%",
}: {
  data: number[][];
  legend?: boolean;
  barWidth?: string;
}) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const options: ApexOptions = {
      series: [
        {
          name: "Series 1",
          data: data[0],
        },
        {
          name: "Series 2",
          data: data[1],
        },
      ],

      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: barWidth,
          borderRadius: 2,
          borderRadiusApplication: "end",
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
        colors: ["#0052ff", "#81de4a"],
      },
    };

    const chart = new ApexCharts(chartContainer.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-full ">
      <div
        id="chart"
        className="w-full h-full min-w-full"
        ref={chartContainer}
      />
    </div>
  );
};

export default ColumnChartV2;
