import { Button, Card } from "@mui/material";
import "./App.css";
import Timer from "./components/timer/timer";
import BasicTabs from "./components/tabs/tabs";
function App() {
  return (
    <div className="main">

      <Card className="panel" sx={{backgroundColor:'#fff0', boxShadow:'none', border:'solid 3px #4cf5f533'}}>
        <BasicTabs></BasicTabs>
      </Card>
      
    </div>
  );
}

export default App;
