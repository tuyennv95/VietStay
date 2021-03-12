import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
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
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        backgroundColor: "#ffffff",
        color: "#222222"
    }, media: {
        marginTop: 50,
        height: 0,
        paddingTop: '10%',
        marginBottom: 50,
    },

}));

export default function HuyPhongDetails() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs className={classes.tabs}
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Flexible" href="/flexible" {...a11yProps(0)} />
                    <LinkTab label="Moderate" href="/moderate" {...a11yProps(1)} />
                    <LinkTab label="Strict" href="/strict" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <p>
                    Hủy phòng Linh hoạt (Flexible): Miễn phí hủy phòng trong vòng 48h sau khi đặt phòng thành công và trước 1 ngày so với thời gian check-in. Sau đó, hủy phòng trước 1 ngày so với thời gian check-in, được hoàn lại 100% tổng số tiền đã trả (trừ phí dịch vụ).
                </p>
                <CardMedia
                    className={classes.media}
                    image="https://i.ibb.co/LnbcfVJ/Capture1.png"
                    title="huyphong1"
                />
                <p>
                    For example: Khách hàng có đơn đặt phòng giá trị 100USD, check-in 14h00 ngày 31/08, check-out ngày 01/09 khách hàng sẽ được hoàn lại 100USD khi khách hủy phòng trước 48h kể từ thời gian đặt phòng thành công , khách sẽ nhận 100USD trừ phí dịch vụ ( nếu có ) khi khách huỷ phòng sau 48h và muộn nhất trước 13:59 ngày 30/08 . Bắt đầu từ 14:00 ngày 30/08 đến 23:59 ngày 31/08, đêm đầu tiên sẽ không được hoàn lại, khách sẽ được hoàn lại 50% tổng giá trị đặt phòng trừ đêm đầu tiên và các phí kèm theo
                </p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <p>
                    Huỷ phòng Trung bình (Moderate): Miễn phí hủy phòng trong vòng 48h sau khi đặt phòng thành công và trước 5 ngày so với thời gian check-in. Sau đó, hủy phòng trước 5 ngày so với thời gian check-in, được hoàn lại 100% tổng số tiền đã trả (trừ phí dịch vụ).
                </p>
                <CardMedia
                    className={classes.media}
                    image="https://i.ibb.co/LnbcfVJ/Capture1.png"
                    title="huyphong1"
                />
                <p>
                    For example: Khách hàng có đơn đặt phòng giá trị 100USD, check-in 14h00 ngày 31/08, check-out ngày 01/09 khách hàng sẽ được hoàn lại 100USD khi khách hủy phòng trước 48h kể từ thời gian đặt phòng thành công , khách sẽ nhận 100USD trừ phí dịch vụ ( nếu có ) khi khách huỷ phòng sau 48h và muộn nhất trước 13:59 ngày 26/08. Bắt đầu từ 14:00 ngày 26/08 đến 23:59 ngày 31/08, đêm đầu tiên sẽ không được hoàn lại, khách sẽ được hoàn lại 50% tổng giá trị đặt phòng trừ đêm đầu tiên và các phí kèm theo
                </p>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <p>
                    Hủy phòng Nghiêm ngặt (Strict): Hoàn lại 50% giá trị đặt phòng khi khách hàng huỷ phòng trong vòng 48h sau khi đặt phòng thành công và trước 14 ngày so với thời gian check-in. Sau đó, hủy phòng trước 14 ngày so với thời gian check-in, được hoàn lại 50% tổng số tiền đã trả (trừ phí dịch vụ).
                </p>
                <CardMedia
                    className={classes.media}
                    image="https://i.ibb.co/LnbcfVJ/Capture1.png"
                    title="huyphong1"
                />
                <p>
                    For example: Ví dụ: Khách hàng có đơn đặt phòng giá trị 100USD, check-in vào 14h00 ngày 31/08, check-out ngày 01/09. Khách hàng sẽ được hoàn lại 50USD khi khách hủy phòng trước 48h kể từ thời gian đặt phòng thành công, khách sẽ nhận 50USD trừ phí dịch vụ ( nếu có) khi khách huỷ sau 48h và muộn nhất trước 13:59 ngày 17/08. Bắt đầu từ 14:00 ngày 17/08, khách hàng sẽ không được hoàn lại khoản tiền nào.
                </p>
            </TabPanel>
        </div>
    );
}