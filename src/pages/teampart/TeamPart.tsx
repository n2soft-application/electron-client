import React from "react";
import Card from "../../components/card/Card";

export const tableData = [
  {
    순번: 1,
    부점코드: "09",
    부점명: "디지털신사업본부",
    팀파트코드: "1000",
    팀파트명: "디지털운영팀",
    보기순서: 1,
    대표번호: "",
    팩스번호: "",
    사용여부: "Y",
  },
  {
    순번: 2,
    부점코드: "09",
    부점명: "디지털신사업본부",
    팀파트코드: "1100",
    팀파트명: "심사1파트",
    보기순서: 1,
    대표번호: "",
    팩스번호: "",
    사용여부: "Y",
  },
  {
    순번: 3,
    부점코드: "09",
    부점명: "디지털신사업본부",
    팀파트코드: "1100",
    팀파트명: "심사2파트",
    보기순서: 1,
    대표번호: "",
    팩스번호: "",
    사용여부: "Y",
  },
];

const columns = [
  {
    label: "순번",
  },
  {
    label: "부점코드",
  },
  {
    label: "부점명",
  },
  {
    label: "팀(파트)코드",
  },
  {
    label: "팀(파트)명",
  },
  {
    label: "보기순서",
  },
  {
    label: "대표번호",
  },
  {
    label: "팩스번호",
  },
  {
    label: "사용여부",
  },
];

const bottomTableData = [
  {
    부서지점: "디지털신사업본부",
    팀파트코드: "1100",
    팀파트명: "심사1파트",
    팀파트약어: "심사1파트",
    보기순서: 1,
    대표번호: "",
    팩스번호: "",
    WEB팩스번호: "",
    인사시스템코드: "",
    중앙회팀파트코드: "0901",
  },
];

const firstColumns = [
  {
    label: "부서(지점)",
  },
];
const first2Columns = [
  {
    label: "대표번호",
  },
];

const secondColumns = [
  {
    label: "팀(파트)코드",
  },
];
const second2Columns = [
  {
    label: "팩스번호",
  },
];

const rows = tableData.slice(0, 7);
const bottomRows = bottomTableData.slice(0, 7);

function TeamPart() {
  return (
    <div>
      <Card>
        <div className="-mx-6 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    {columns.map((column, i) => (
                      <th
                        key={i}
                        scope="col"
                        className="text-center table-th text-[14px]"
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 text-center">
                  {rows.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      <td className="table-td">{row.순번}</td>
                      <td className="table-td">{row.부점코드}</td>
                      <td className="table-td">{row.부점명}</td>
                      <td className="table-td">{row.팀파트코드}</td>
                      <td className="table-td">{row.팀파트명}</td>
                      <td className="table-td">{row.보기순서}</td>
                      <td className="table-td">{row.대표번호}</td>
                      <td className="table-td">{row.팩스번호}</td>
                      <td className="table-td">{row.사용여부}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      {/* 하단 table */}
      <Card className="mt-4 bg-white">
        <div className="-mx-6 overflow-x-auto ">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700">
                <thead>
                  <tr>
                    {firstColumns.map((column, i) => (
                      <th
                        key="i"
                        className="bg-slate-200 dark:bg-slate-700 text-center table-th text-[14px] w-[130px]"
                      >
                        {column.label}
                      </th>
                    ))}

                    {bottomRows.map((row, i) => (
                      <tr>
                        <td className="w-[150px] pl-2">{row.부서지점}</td>
                        {secondColumns.map((column, i) => (
                          <th
                            key="i"
                            className="bg-slate-200 dark:bg-slate-700 text-center table-th text-[14px] w-[130px]"
                          >
                            {column.label}
                          </th>
                        ))}
                        <td className="w-[150px] pl-2">{row.팀파트코드}</td>
                      </tr>
                    ))}
                  </tr>
                </thead>

                <thead>
                  <tr>
                    {first2Columns.map((column, i) => (
                      <th
                        key="i"
                        className="bg-slate-200 dark:bg-slate-700 text-center table-th text-[14px]"
                      >
                        {column.label}
                      </th>
                    ))}
                    {bottomRows.map((row, i) => (
                      <tr>
                        <td className="w-[150px] pl-2">{row.대표번호}</td>
                        {second2Columns.map((column, i) => (
                          <th
                            key="i"
                            className="bg-slate-200 dark:bg-slate-700 text-center table-th text-[14px] w-[130px]"
                          >
                            {column.label}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TeamPart;
