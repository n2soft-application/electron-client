import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";
import { colors } from "../../../../constants/data";
import { ApexOptions } from "apexcharts";

const AccountPayable = ({ height = 300 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [colors.primary],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 6,
      show: true,
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    markers: {
      size: 4,
      colors: colors.primary,
      strokeColors: colors.primary,
      strokeWidth: 2,
      shape: "circle",
      radius: 2,
      hover: {
        sizeOffset: 1,
      },
    },
    grid: {
      show: true,
      borderColor: isDark ? "#334155" : "#e2e8f0",
      strokeDashArray: 10,
      position: "back",
    },

    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  };
  return (
    <>
      <Chart options={options} series={series} type="line" height={height} />
    </>
  );
};

export default AccountPayable;
