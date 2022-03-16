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
