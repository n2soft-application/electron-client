import React from "react";
import Card from "../../components/card/Card";

const firstcolumns = [
  {
    label: "순번",
  },
  {
    label: "시스템코드",
  },
  {
    label: "시스템명",
  },
  {
    label: "보기순서",
  },
];

const secondcolumns = [
  {
    label: "순번",
  },
  {
    label: "화면그룹코드",
  },
  {
    label: "메뉴명",
  },
  {
    label: "보기순서",
  },
];

function MenuManagement() {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Card title="시스템 메뉴" noborder>
        <div className="-mx-6 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    {firstcolumns.map((column, i) => (
                      <th key={i} scope="col" className="table-th text-center">
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  <tr className="hover:bg-slate-200 dark:hover:bg-slate-700 text-center">
                    <td className="table-td">1</td>
                    <td className="table-td">HM</td>
                    <td className="table-td">HOME</td>
                    <td className="table-td">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      <Card title="서브메뉴" noborder>
        <div className="-mx-6 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    {secondcolumns.map((column, i) => (
                      <th key={i} scope="col" className="table-th text-center">
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  <tr className="hover:bg-slate-200 dark:hover:bg-slate-700 text-center">
                    <td className="table-td">1</td>
                    <td className="table-td">10</td>
                    <td className="table-td">메인</td>
                    <td className="table-td">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
      <div className="flex justify-end">
        <button className="mr-2 text-white bg-primary-400 px-2">초기화</button>
        <button className="mr-2 text-white bg-primary-400 px-2">등록</button>
        <button className="mr-2 text-white bg-primary-400 px-2">수정</button>
        <button className=" text-white bg-primary-400 px-2">삭제</button>
      </div>
      <div className="flex justify-end">
        <button className="mr-2 text-white bg-primary-400 px-2">초기화</button>
        <button className="mr-2 text-white bg-primary-400 px-2">등록</button>
        <button className="mr-2 text-white bg-primary-400 px-2">수정</button>
        <button className=" text-white bg-primary-400 px-2">삭제</button>
      </div>
    </div>
  );
}

export default MenuManagement;
