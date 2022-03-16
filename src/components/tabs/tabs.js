import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Timer from "../timer/timer";
import { Alert } from "@mui/material";
import { useState } from "react";
import TabPanel from "../panel/tabpanel";
export default function BasicTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let [state, setState] = useState(false);
  const handleEnd = (finished) => {
    if (finished) {
      setState(finished);
      setTimeout(() => setState(false), 5000);
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}  >
        <Tabs value={value} onChange={handleChange} variant="fullWidth" >
          <Tab label="Pomodoro"/>
          <Tab label="Short break" />
          <Tab label="Long break" />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
        <Timer minutes={0} seconds={4} handleEnd={handleEnd} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Timer minutes={0} seconds={2} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Timer minutes={1} seconds={0} />
      </TabPanel>



      {state ? (
        <Alert variant="outlined" severity="success">
          This is a success alert — check it out!
        </Alert>
      ) : (
        ""
      )}
    </Box>
  );
}
