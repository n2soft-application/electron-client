import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";
const LoanPerformanceChart = ({ height = 300 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "Agency",
      data: [
        1394, 1674, 2148, 2814, 3244, 3432, 3484, 3856, 4423, 5349, 5342, 5744,
        5883, 5973, 5956, 5956, 5931,
      ],
    },
    {
      name: "다이렉트",
      data: [
        683, 692, 703, 720, 1813, 2003, 1895, 2342, 2463, 2634, 2466, 2623,
        2634, 2273, 2546, 2546, 2546,
      ],
    },
    {
      name: "은행연계",
      data: [0, 0, 0, 0, 0, 0, 0, 873, 0, 0, 0, 934, 1035, 0, 0, 0, 0],
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
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
    dataLabels: {
      background: {
        enabled: false,
      },
      enabled: true,
      offsetY: -6,
      style: { colors: [isDark ? "#CBD5E1" : "#475569"], fontWeight: 400 },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
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
      size: 5,
      shape: "circle",
      hover: {
        sizeOffset: 1,
      },
    },
    grid: {
      show: true,
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
      categories: [
        "2018-12",
        "2019-01",
        "2019-02",
        "2019-03",
        "2019-04",
        "2019-05",
        "2019-06",
        "2019-07",
        "2019-08",
        "2019-09",
        "2019-10",
        "2019-11",
        "2019-12",
        "2020-01",
        "2020-02",
        "2020-03",
        "2020-04",
        "2020-05",
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

export default LoanPerformanceChart;
