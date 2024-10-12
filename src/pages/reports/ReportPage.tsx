import { useEffect } from "react";
import ChartCartWrapper from "../../components/carts/ChartCartWrapper";
import AreaChart from "../../components/charts/AreaChart";
import ColumnChart from "../../components/charts/ColumnChart";
import ColumnChartV2 from "../../components/charts/ColumnChartV2";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart";
import LineChart from "../../components/charts/LineChart";
import PolarChart from "../../components/charts/PolalrChart";
import RadarChart from "../../components/charts/RadarChart";
import DonutChart from "../../components/charts/RadasChart";
import RadialBar from "../../components/charts/RadialBar";
import { useNavbar } from "../../context/NavbarContext";
import MainLayout from "../../layouts/MainLayout";

const ReportPage = () => {
  const { ChangeMobileTitleHandler, changeNavbarDesktopHandler, resetNavbar } =
    useNavbar();

  useEffect(() => {
    changeNavbarDesktopHandler({ type: 1 });
    ChangeMobileTitleHandler({ type: 2 });

    return () => {
      resetNavbar();
    };
  }, []);

  return (
    <MainLayout>
      <div className=" flex flex-col gap-p-20  ">
        <ChartCartWrapper title="Bar 12 Columns">
          <ColumnChart
            data={[
              [144, 255, 341, 417, 143, 295, 192, 429, 359, 329, 239, 139],
            ]}
          />
        </ChartCartWrapper>
        <ChartCartWrapper title="Bar 12 Columns">
          <ColumnChartV2
            barWidth="15%"
            data={[
              [144, 255, 341, 417, 143, 295, 192, 429, 359, 329, 239, 139],
              [83, 29, 190, 38, 182, 483, 82, 329, 349, 319, 139, 439],
            ]}
          />
        </ChartCartWrapper>
        <ChartCartWrapper title="Bar 12 Columns">
          <HorizontalBarChart
            barHeight="6"
            data={[[144, 255, 341, 417, 143, 295, 192]]}
          />
        </ChartCartWrapper>
        <ChartCartWrapper title="Bar 12 Columns">
          <AreaChart
            data={[
              [144, 255, 341, 417, 143, 295, 192],
              [83, 29, 190, 38, 182, 483, 82],
              [143, 295, 192, 429, 359, 329, 239],
            ]}
          />
        </ChartCartWrapper>
        <ChartCartWrapper title="Bar 12 Columns">
          <AreaChart
            strokeType="straight"
            data={[
              [144, 255, 341, 417, 143, 295, 192],
              [333, 29, 190, 38, 182, 483, 82],
            ]}
          />
        </ChartCartWrapper>
        <div className="flex gap-p-20 max-md:flex-col w-full">
          <ChartCartWrapper className="w-full" title="Bar 12 Columns">
            <RadarChart
              data={[
                [144, 255, 341, 417, 143, 295, 192],
                [333, 29, 190, 38, 182, 483, 82],
              ]}
            />
          </ChartCartWrapper>
          <ChartCartWrapper className="w-full" title="Bar 12 Columns">
            <PolarChart data={[144, 255, 341, 417, 143, 295, 192]} />
          </ChartCartWrapper>
        </div>

        <div className="flex gap-p-20 max-md:flex-col w-full">
          <ChartCartWrapper className="w-full" title="Bar 12 Column">
            <LineChart
              data={[
                [144, 255, 341, 417, 143, 295, 192 , 100 , 20 , 10 , 33 , 293 ],
                [333, 29, 190, 38, 182, 483, 82],
              ]}
            />
          </ChartCartWrapper>
          <ChartCartWrapper className="w-full" title="Bar 12 Columns">
            <LineChart
              strokeType="straight"
              data={[[144, 55, 341, 417, 143, 295, 192]]}
            />
          </ChartCartWrapper>
        </div>
        <div className="flex items-center max-md:flex-col gap-p-20">
          <div className="w-full">
            <ChartCartWrapper className="w-full" title="Bar 12 Columns">
              <RadialBar data={[144, 55, 341, 192]} />
            </ChartCartWrapper>
          </div>
          <div className="w-full">
            <ChartCartWrapper className="w-full" title="Bar 12 Columns">
              <DonutChart data={[144, 55, 341, 192]} />
            </ChartCartWrapper>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ReportPage;
