import { Button, Card } from "@mui/material";
import "./App.css";
import Timer from "./components/timer/timer";

function App() {
  return (
    <div className="App">
      {/* <Timer minutes={0} seconds={2}/>
  <Timer minutes={1} seconds={0}/> */}

      <Card>
        <Timer minutes={0} seconds={4} />
        <Timer minutes={0} seconds={2} />
        <Timer minutes={1} seconds={0} />
      </Card>
    </div>
  );
}

export default App;
