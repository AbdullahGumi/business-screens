import { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { useNavigate, useLocation } from "react-router-dom";
//mui
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//components
import AssistanceTab from "./AssistanceTab";
import BillingTab from "./BillingTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabsContainer() {
  const theme = useTheme();
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const checkWhichTabToNavigateTo = (tabIndex) => {
    if (tabIndex === 1) {
      navigate("/help/?tab=billing");
    } else {
      navigate("/help/?tab=assistance");
    }
    setTab(tabIndex);
  };

  const handleChange = (event, newValue) => {
    checkWhichTabToNavigateTo(newValue);
  };

  const handleChangeIndex = (index) => {
    if (index === 2) {
      index = 1;
    }
    checkWhichTabToNavigateTo(index);
  };

  useEffect(() => {
    if (location.search === "?tab=billing") {
      setTab(1);
    } else {
      setTab(0);
    }
  }, [location]);

  return (
    <div>
      <div className="px-5">
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", borderBottom: "1px solid #707070" }}
          elevation={0}
        >
          <Tabs
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2b2b2b",
              },
            }}
            value={tab}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs"
          >
            <Tab
              sx={{
                textTransform: "none",
                color: "#2b2b2b",
                fontFamily: tab === 0 && "LatinkaBold",
              }}
              label="Assistance"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                textTransform: "none",
                color: "#2b2b2b",
                fontFamily: tab === 1 && "LatinkaBold",
              }}
              label="Billing"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
      </div>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={tab}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={tab} index={0} dir={theme.direction}>
          <AssistanceTab />
        </TabPanel>
        <TabPanel value={tab} index={1} dir={theme.direction}>
          <BillingTab />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
