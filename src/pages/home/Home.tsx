import { useRecoilState } from "recoil";
import { demoState } from "../../state/demoAtom";
import Widget from "../../components/widget/Widget";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { IoMdDocument, IoMdHome } from "react-icons/io";
import Card from "../../components/card";

function Home() {
  const [value, setValue] = useRecoilState(demoState);
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 mt-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<IoMdDocument className="w-6 h-6" />}
          title={"Spend this month"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<MdDashboard className="w-6 h-6" />}
          title={"Your Balance"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="w-6 h-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        />
      </div>
      <Card extra="p-6 rounded-[20px] mt-5">
        Home
        <div>
          <div className="flex gap-4">
            <div>{value}</div>
            <button
              onClick={() => {
                setValue((prev) => prev + 1);
              }}
              className="text-3xl"
            >
              +
            </button>
            <button
              onClick={() => {
                setValue((prev) => prev - 1);
              }}
              className="text-3xl"
            >
              -
            </button>
          </div>
          <button
            onClick={() => {
              window.open("/");
            }}
          >
            새창열기1
          </button>

          <a href="/" target="_blank">
            새창열기2
          </a>
          {Array(100)
            .fill(0)
            .map((item, index) => (
              <p key={index}>{item}</p>
            ))}
        </div>
      </Card>
    </div>
  );
}

export default Home;
