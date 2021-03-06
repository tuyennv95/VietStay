import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Vechungtoi from './category/Vechungtoi'
import Chunha from './category/Chunha'
import Dieukhoan from './category/Dieukhoan';
import Chinhsach from './category/Chinhsach';
import Huyphong from './category/Huyphong';
import Baomat from './category/Baomat';

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
        marginTop: 83,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        backgroundColor: "#ffffff",
        color: "#222222"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    media2: {
        height: 1000,
        width: 500
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="V??? CH??NG T??I" {...a11yProps(0)} />
                    <Tab label="TR??? TH??NH CH??? NH??" {...a11yProps(1)} />
                    <Tab label="??I???U KHO???N HO???T ?????NG" {...a11yProps(2)} />
                    <Tab label="B???N QUY??N" {...a11yProps(3)} />
                    <Tab label="B???O M???T" {...a11yProps(4)} />
                    <Tab label="H???Y PH??NG" {...a11yProps(5)} />
                    <Tab label="QUY CH??? S??N GIAO D???CH TM??T" {...a11yProps(6)} />
                    <Tab label="TH???A THU???N H???P T??C" {...a11yProps(7)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Vechungtoi />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Chunha />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Dieukhoan />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Chinhsach />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Baomat />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Huyphong />
            </TabPanel>
            <TabPanel value={value} index={6}>
                QUY CH??? S??N GIAO D???CH TM??T
      </TabPanel>
            <TabPanel value={value} index={7}>
                TH???A THU???N H???P T??C
      </TabPanel>
        </div>
    );
}