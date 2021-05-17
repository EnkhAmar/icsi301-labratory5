import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'

import Overview from './Overview'
import Features from './Features'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    paddingLeft: 16,
    backgroundColor: 'rgb(81,45,168)!important',
  },
  header: {
    backgroundColor: 'rgb(103,58,183)',
    height: 64,
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Typography className={classes.header} component="div" style={{ height: '64px' }} />
        <Typography className={classes.header} align='left' component="div" variant="h3" style={{ height: '64px', paddingLeft: '40px' }} >
          Name &#38; Title
        </Typography>
        <Typography className={classes.header} component="div" style={{ height: '64px' }} />

        <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Features" {...a11yProps(1)} />
          <Tab label="Details" {...a11yProps(2)} />
          <Tab label="Technology" {...a11yProps(2)} />
          <Tab label="Faq" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Features />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Details
      </TabPanel>
      <TabPanel value={value} index={3}>
        Technology
      </TabPanel>
      <TabPanel value={value} index={4}>
        Faq
      </TabPanel>
    </div>
  );
}
