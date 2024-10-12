import ApexCharts, { ApexOptions } from "apexcharts";
import { useEffect, useRef } from "react";

const RadarChart = ({
  data,
  legend = false,
}: {
  data: number[][];
  legend?: boolean;
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
        type: "radar",
        height: 350,
        toolbar: {
          show: false,
        },
        
      },
      plotOptions: {
        line: {},
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
      },
      yaxis: {
        min: 0,
        stepSize: 100,
        show: false,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "",
          offsetY: 10,
        },
      },
      markers: {
        size: 0,
      },
      legend: {
        show: legend,
      },
      fill: {},
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

export default RadarChart;
