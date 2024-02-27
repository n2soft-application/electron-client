import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "simplebar-react/dist/simplebar.min.css";
import AppRouter from "./routes";

function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </RecoilRoot>
  );
}

export default App;
