import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";

const PerformanceStatusChart = ({
  labels = ["success", "Return"],
  series = [44, 55],
  className = "",
}) => {
  const [isDark] = useDarkMode();

  const options: ApexOptions = {
    labels: labels,
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return Math.round(val) + "%";
      },
    },
    colors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
    legend: {
      show: false,
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
      },
    },
    stroke: {
      width: 0,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className={`${className}`}>
      <Chart type="donut" height="200" options={options} series={series} />
    </div>
  );
};

export default PerformanceStatusChart;
