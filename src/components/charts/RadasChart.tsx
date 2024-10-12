import ApexCharts, { ApexOptions } from "apexcharts";
import { useEffect, useRef } from "react";

const DonutChart = ({
  data,
  legend = false,
}: {
  data: number[];
  legend?: boolean;
}) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const totalSum = data.reduce((acc, value) => acc + value, 0);

    const options: ApexOptions = {
      series: data,
      chart: {
        type: "donut",
        height: 390,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
                formatter: () => {
                  return totalSum.toString();
                },
              },
            },
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

export default DonutChart;
