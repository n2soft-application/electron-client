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

const cloumns = [
  {
    label: "순번",
    field: "순번",
  },
  {
    label: "부점코드",
    field: "부점코드",
  },
  {
    label: "부점명",
    field: "부점명",
  },
  {
    label: "팀(파트)코드",
    field: "팀(파트)코드",
  },
  {
    label: "팀(파트)명",
    field: "팀(파트)명",
  },
  {
    label: "보기순서",
    field: "보기순서",
  },
  {
    label: "대표번호",
    field: "대표반호",
  },
  {
    label: "팩스번호",
    field: "팩스번호",
  },
  {
    label: "사용여부",
    field: "사용여부",
  },
];
const rows = tableData.slice(0, 7);

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
                    {cloumns.map((column, i) => (
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
    </div>
  );
}

export default TeamPart;
