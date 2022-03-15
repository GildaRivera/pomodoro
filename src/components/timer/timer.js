import { Button, Card } from "@mui/material";
import { useEffect, useState } from "react";

function Timer(props) {
  const { minutes, seconds } = props;
  const hours = 0;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
    }
    //reset()
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  //const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const timerId = setTimeout(() => tick(), 1000);
    return () => clearTimeout(timerId);
  });
  return (
    <div className="App">
      <Card>
        <h1>{`${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`}</h1>
      </Card>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default Timer;
