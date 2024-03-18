import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";

const LoanAmountChart = ({ height = 300 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "대출금액",
      type: "column",
      data: [
        2894, 2974, 3148, 3214, 4044, 4232, 4584, 5056, 5423, 6349, 6342, 6744,
        6883, 6973, 7956, 7956, 7931,
      ],
    },
    {
      name: "대출잔액",
      type: "line",
      data: [
        4394, 4674, 4348, 4834, 6244, 5432, 6484, 6856, 6423, 6349, 7342, 7744,
        7883, 8973, 8956, 9956, 9933,
      ],
    },
    {
      name: "연체금액",
      type: "line",
      data: [
        1283, 1292, 1303, 1620, 1813, 2003, 1895, 2342, 2463, 2634, 2466, 2623,
        2634, 2273, 2546, 2546, 2546,
      ],
    },
    {
      name: "당월대출금액",
      type: "line",
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
    dataLabels: {
      background: {
        enabled: false,
      },
      enabled: true,
      enabledOnSeries: [1, 2, 3],
      offsetY: -6,
      style: { colors: [isDark ? "#CBD5E1" : "#475569"], fontWeight: 400 },
    },
    stroke: {
      curve: "straight",
      width: [0, 2, 2, 2],
    },
    colors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
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
      strokeColors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
      strokeWidth: 2,
      shape: "circle",
      radius: 2,
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

export default LoanAmountChart;
