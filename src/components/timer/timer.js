import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import './timer.css'
export default function Timer(props) {
  const { minutes, seconds } = props;
  const hours = 0;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  const [start, setStart] = useState(false);
  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      props.handleEnd(true);
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

  const reset = () => {
    setStart(false);
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  };

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
    <div className="timer">
      <h1 className="timer__timeCount">{`${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`}</h1>
        <div className="timer__buttons">
      <Button variant="outlined" onClick={controlTimer}>
        {!start ? "Start" : "Stop"}
      </Button>
      <Button variant="outlined" onClick={reset}>
        Reset
      </Button></div>
    </div>
  );
}
