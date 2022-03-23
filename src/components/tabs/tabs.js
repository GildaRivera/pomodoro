import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Timer from "../timer/timer";
import { useState } from "react";
import TabPanel from "../panel/tabpanel";
import useSound from 'use-sound';
import sound from '../../assets/notification.mp3'
export default function BasicTabs(props) {
  const [value, setValue] = useState(0);
  const [play] = useSound(sound);
  const handleChange = (event, newValue) => {
  

   
   
    setValue(newValue);
  };
  let [state, setState] = useState(false);
  const handleEnd = (finished,type) => {
    if (finished) {
      let session = JSON.parse(window.localStorage.getItem("session"));
      let t= session.length+1
      switch(type){
        case 25:
        session.push({[t]:25})
        break
        case 5:
          session.push({[t]:5})
          break
        case 15:
          session.push({[t]:15})
          break
        default:
          break;
      }
      window.localStorage.clear()
      window.localStorage.setItem("session",JSON.stringify(session))
      setState(finished);
      play()
    }
  };
  const handleRestart =()=>{
    setState(false)
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{
            backgroundColor: '#062636',
            "& .MuiTabs-indicator": {
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#2abab4",
            },
            "& .MuiTabs-indicatorSpan": {
              maxWidth: 40,
              width: "100%",
              backgroundColor: "#2abab4",
            },
          }}
        >
          <Tab
            label="Pomodoro"
            sx={{
              color: "#2abab4",
              "&.Mui-selected": {
                color: "#4CF5F5",
                backgroundColor:'#4cf5f533'
              },
            }}
          />
          <Tab
            label="Short break"
            sx={{
              color: "#2abab4",
              "&.Mui-selected": {
                color: "#4CF5F5",
                backgroundColor:'#4cf5f533'
              },
            }}
          />
          <Tab
            label="Long break"
            sx={{
              color: "#2abab4",
              "&.Mui-selected": {
                color: "#4CF5F5",
                backgroundColor:'#4cf5f533'
              },
            }}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Timer minutes={25} seconds={0} handleEnd={handleEnd} handleRestart={handleRestart} finished={state}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Timer minutes={5} seconds={0} handleEnd={handleEnd} handleRestart={handleRestart} finished={state} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Timer minutes={15} seconds={0} handleEnd={handleEnd} handleRestart={handleRestart} finished={state} />
      </TabPanel>

     
    </Box>
  );
}
