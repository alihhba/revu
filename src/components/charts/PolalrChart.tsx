import ApexCharts, { ApexOptions } from "apexcharts";
import { useEffect, useRef } from "react";

const PolarChart = ({
  data,
  legend = false,
}: {
  data: number[];
  legend?: boolean;
}) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const options: ApexOptions = {
      series: data,
      chart: {
        type: "polarArea",
        height: 390,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 1,
          },
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        curve: "smooth",
        fill: {
          opacity: 0.2,
        },
      },
      yaxis: {
        min: 0,
        stepSize: 100,
        show: false,
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

export default PolarChart;
