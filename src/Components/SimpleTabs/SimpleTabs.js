import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Messages from '../Messages/Messages';
import EditAccount from '../EditAccount/EditAccount';
import MyBooking from '../MyBooking/MyBooking';
// import MyBookingRoomId from '../MyBooking/MyBookingRoomId';
import RoomLove from 'Components/RoomLove/RoomLove';
import Header from '../Header2/Header2';
import { useHistory } from 'react-router-dom';

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
        <Box p={3} style={{ width: '95%', margin: 'auto' }}>
          {children}
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
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const valueParam = props.value;
  const [value, setValue] = React.useState(3);
  const history = useHistory();
  const user = props.user;

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    if (newValue == 0) {
      history.push("/me-bookings")
    }
    else if (newValue == 1) {
      history.push("/me-mes")
    }
    else if (newValue == 2) {
      history.push("/me-setting")
    }
    else if (newValue == 3) {
      history.push("/me-wish-list")
    }
  };
  React.useEffect(() => {
    if (valueParam === 'bookings') {
      setValue(0)
    }
    else if (valueParam === 'mes') {
      setValue(1)
    }
    else if (valueParam === 'wish-list') {
      setValue(3)
    }
    else if (valueParam === 'setting') {
      setValue(2)
    }


  }, [valueParam])
  return (
    <div className={classes.root} style={{ height: '100%',width: '100%', paddingTop: '20px', paddingBottom: '20px' }}>
      {/* <Header/> */}
      <AppBar position="static" style={{ backgroundColor: '#F8F8F8' }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{
          backgroundColor: '#FFFFFF', width: '100%',
          paddingLeft: '60px'
        }}>
          <Tab label="Đặt chỗ của tôi" {...a11yProps(0)} style={{ color: 'gray', textTransform: 'none', }} />
          <Tab label="Tin nhắn" {...a11yProps(1)} style={{ color: 'gray', textTransform: 'none', }} />
          <Tab label="Cài đặt tài khoản" {...a11yProps(2)} style={{ color: 'gray', textTransform: 'none', }} />
          <Tab label="Yêu thích" {...a11yProps(3)} style={{ color: 'gray', textTransform: 'none', }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{ backgroundColor: "#F8F8F8" }}>
        <MyBooking />
      </TabPanel>
      <TabPanel value={value} index={1} style={{ backgroundColor: "#F8F8F8" }}>
        <Messages />
      </TabPanel>
      <TabPanel value={value} index={2} style={{ backgroundColor: "#F8F8F8" }}>
        <EditAccount user={user} />
        {/* <MyBookingRoomId /> */}
      </TabPanel>
      <TabPanel value={value} index={3} style={{ backgroundColor: "#F8F8F8" }}>
        <RoomLove user={user} />
      </TabPanel>
    </div>
  );
}