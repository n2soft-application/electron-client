import React from "react";
import Card from "../../../components/card/Card";

function User() {
  return (
    <div>
      <Card>
        <div className="-mx-6 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    <th>순번</th>
                    <th>사용자ID</th>
                    <th>사용자명</th>
                    <th>시스템사번</th>
                    <th>직급</th>
                    <th>사번</th>
                    <th>사용자상태</th>
                    <th>팀/파트</th>
                    <th>이기종ID</th>
                    <th>로그인상태</th>
                    <th>로그인제한사유</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 text-center">
                  {teamList.map((team, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      <td className="table-td">-</td>
                      <td className="table-td">{team.branchCode}</td>
                      <td className="table-td">-</td>
                      <td className="table-td">{team.code}</td>
                      <td className="table-td">{team.name}</td>
                      <td className="table-td">{team.priority}</td>
                      <td className="table-td">{team.telephoneNumber}</td>
                      <td className="table-td">{team.faxNumber}</td>
                      <td className="table-td">{team.useYn}</td>
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

export default User;
