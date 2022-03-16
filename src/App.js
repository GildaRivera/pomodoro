import { Button, Card } from "@mui/material";
import "./App.css";
import Timer from "./components/timer/timer";
import BasicTabs from "./components/tabs/tabs";
function App() {
  return (
    <div className="main">

      <Card className="panel" sx={{backgroundColor:'#fff0', boxShadow:'none'}}>
        <BasicTabs></BasicTabs>
      </Card>
      
    </div>
  );
}

export default App;
