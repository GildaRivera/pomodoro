import { Button, Card } from "@mui/material";
import "./App.css";
import Timer from "./components/timer/timer";
import BasicTabs from "./components/tabs/tabs";
function App() {
  return (
    <div className="App">
      {/* <Timer minutes={0} seconds={2}/>
  <Timer minutes={1} seconds={0}/> */}

      <Card>
        <BasicTabs></BasicTabs>
      </Card>
    </div>
  );
}

export default App;
