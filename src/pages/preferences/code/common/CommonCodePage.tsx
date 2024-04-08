import Card from "../../../../components/card/Card";

export const tableData = [
  {
    순번: 1,
    코드: "ADC",
    부점명: "디지털신사업본부",
    팀파트코드: "1000",
    팀파트명: "디지털운영팀",
    보기순서: 1,
    대표번호: "",
    팩스번호: "",
    사용여부: "Y",
  },
];

const firstcolumns = [
  {
    label: "순번",
  },
  {
    label: "코드",
  },
  {
    label: "코드명",
  },
  {
    label: "사용여부",
  },
  {
    label: "주요코드",
  },
  {
    label: "코드셋",
  },
  {
    label: "생성일",
  },
];

const secondcolumns = [
  {
    label: "순번",
  },
  {
    label: "코드",
  },
  {
    label: "코드명",
  },
  {
    label: "보기순서",
  },
  {
    label: "사용여부",
  },
  {
    label: "등록일",
  },
  {
    label: "변경일",
  },
];

function CommonCodePage() {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Card title="대분류 코드" noborder>
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
                    <td className="table-td">19</td>
                    <td className="table-td">ADC</td>
                    <td className="table-td text-left">
                      광고종류2 (통계에서 사용)
                    </td>
                    <td className="table-td">Y</td>
                    <td className="table-td">Y</td>
                    <td className="table-td">N</td>
                    <td className="table-td">2022-04-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
      <Card title="소분류 코드" noborder>
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
                    <td className="table-td">00</td>
                    <td className="table-td text-left">NICE 신용졍보</td>
                    <td className="table-td">1</td>
                    <td className="table-td">Y</td>
                    <td className="table-td">2022-04-01</td>
                    <td className="table-td">2022-04-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CommonCodePage;
