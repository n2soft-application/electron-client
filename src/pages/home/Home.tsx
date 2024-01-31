import { useRecoilState } from "recoil";
import { demoState } from "../../state/demoAtom";

function Home() {
  const [value, setValue] = useRecoilState(demoState);
  return (
    <div>
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
    </div>
  );
}

export default Home;
