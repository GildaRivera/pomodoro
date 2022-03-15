import { Button, Card } from "@mui/material";
import { useEffect, useState } from "react";

function Timer(props) {
  const [start, setStart] = useState(false);
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
    if (start) {
      const timerId = setTimeout(() => tick(), 1000);
      return () => clearTimeout(timerId);
    }
  }, [start, mins, secs]);

  const controlTimer = () => {
    if (start) {
      setStart(false);
    } else {
      setStart(true);
    }
  };
  return (
    <div className="App">
      <h1>{`${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`}</h1>
      <Button variant="outlined" onClick={controlTimer}>
        Outlined
      </Button>
    </div>
  );
}

export default Timer;
