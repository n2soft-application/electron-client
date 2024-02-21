import ComplexTable from "./components/ComplexTable";

function TestPage1() {
  const tableDataComplex = [
    {
      name: ["ADC", true],
      progress: 75.5,
      status: "Approved",
      date: "2024-01-23",
    },
    {
      name: ["ADD", true],
      progress: 25.5,
      status: "Disable",
      date: "2024-01-23",
    },
    {
      name: ["ADE", true],
      progress: 90,
      status: "Error",
      date: "2024-02-23",
    },
    {
      name: ["ADF", true],
      progress: 10,
      status: "Approved",
      date: "2024-01-11",
    },
    {
      name: ["ADI", true],
      progress: 50.5,
      status: "Approved",
      date: "2024-01-23",
    },
  ];

  return (
    <div className="mt-3">
      <ComplexTable tableData={tableDataComplex} />
    </div>
  );
}

export default TestPage1;
