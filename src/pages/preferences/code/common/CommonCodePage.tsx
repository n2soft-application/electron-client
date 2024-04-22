import { useEffect, useState } from "react";
import Card from "../../../../components/card/Card";
import {
  CodeService,
  ICode,
  ICodeItem,
} from "../../../../api/services/codeService";
import dayjs from "dayjs";

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
  const [selected, setSelected] = useState<string>(""); // 선택된 코드
  const [codeGroup1, setCodeGroup1] = useState<ICode[]>([]); // 대분류
  const [codeGroup2, setCodeGroup2] = useState<ICodeItem[]>([]); // 소분류

  useEffect(() => {
    findAll();
  }, []);

  useEffect(() => {
    if (selected) {
      findByKind(selected);
    }
  }, [selected]);

  const findAll = async () => {
    try {
      const response = await CodeService.getCode();
      if (response.status === "OK") {
        setCodeGroup1(response.data);
      }
    } catch (errer) {}
  };

  const findByKind = async (kind: string) => {
    try {
      const response = await CodeService.getCodeByKind(kind);
      if (response.status === "OK") {
        setCodeGroup2(response.data);
      }
    } catch (errer) {}
  };

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Card title="대분류 코드" noborder>
        <div className="-mx-6 overflow-auto max-h-96">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700 whitespace-nowrap">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    {firstcolumns.map((column, i) => (
                      <th key={i} scope="col" className="text-center table-th">
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {codeGroup1.map((code, i) => (
                    <tr
                      key={i}
                      className={`text-center cursor-pointer ${
                        selected === code.kind
                          ? "bg-slate-100 dark:bg-slate-700"
                          : "hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                      onClick={() => setSelected(code.kind)}
                    >
                      <td className="table-td">{i + 1}</td>
                      <td className="table-td">{code.kind}</td>
                      <td className="text-left table-td">{code.name}</td>
                      <td className="table-td">{code.useYn}</td>
                      <td className="table-td">-</td>
                      <td className="table-td">
                        {dayjs(code.createdDate).format("YYYY-MM-DD")}
                      </td>
                      <td className="table-td">-</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
      <Card title="소분류 코드" noborder>
        <div className="-mx-6 overflow-auto max-h-96">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700 whitespace-nowrap">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    {secondcolumns.map((column, i) => (
                      <th key={i} scope="col" className="text-center table-th">
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {codeGroup2.map((code, i) => (
                    <tr
                      key={i}
                      className="text-center hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      <td className="table-td">{i + 1}</td>
                      <td className="table-td">-</td>
                      <td className="text-left table-td">{code.name}</td>
                      <td className="table-td">{code.priority}</td>
                      <td className="table-td">{code.useYn}</td>
                      <td className="table-td">
                        {dayjs(code.createdDate).format("YYYY-MM-DD")}
                      </td>
                      <td className="table-td">
                        {dayjs(code.createdDate).format("YYYY-MM-DD")}
                      </td>
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

export default CommonCodePage;
