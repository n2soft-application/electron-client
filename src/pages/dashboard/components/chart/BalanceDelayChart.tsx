import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";

const BalanceDelayChart = () => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "채움",
      data: [[200, 14]],
    },
    {
      name: "파라마운트파이넌스",
      data: [[234, 18]],
    },
    {
      name: "메디맨톤",
      data: [[254, 11]],
    },
    {
      name: "캐시플로우",
      data: [[357, 10]],
    },
    {
      name: "온포유",
      data: [[356, 25]],
    },
    {
      name: "서민금융진흥원",
      data: [[457, 21]],
    },
    {
      name: "(주)형제론컨설팅",
      data: [[254, 23]],
    },
    {
      name: "2S코퍼레이션",
      data: [[174, 23]],
    },
    {
      name: "(주)참벗",
      data: [[54, 20]],
    },
    {
      name: "에이플",
      data: [[34, 12]],
    },
    {
      name: "(주)알에스티",
      data: [[94, 21]],
    },
    {
      name: "이노클라우드",
      data: [[848, 56]],
    },
    {
      name: "어니스트파이낸셜",
      data: [[44, 15]],
    },
    {
      name: "제이씨에스솔루션",
      data: [[180, 18]],
    },
    {
      name: "(주)인베스트",
      data: [[244, 22]],
    },
    {
      name: "(주)희망플랜",
      data: [[235, 23]],
    },
    {
      name: "(주)론데이",
      data: [[2820, 87]],
    },
  ];
  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#FA916B"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    xaxis: {
      min: 0,
      max: 3000,
      tickAmount: 3,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
        formatter(val: any) {
          return val / 1000 > 0 ? `${val / 1000}K` : val;
        },
      },
    },
    yaxis: {
      min: -20,
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type="scatter" height="350" />
    </div>
  );
};

export default BalanceDelayChart;
