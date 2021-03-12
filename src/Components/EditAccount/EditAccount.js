import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Hidden, Avatar, Box, Typography, Button, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditInfor from './EditInfor';
import MyCoupon from './MyCoupon';
import ChangePassword from './ChangePassword';
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
    edit_account: {
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        backgroundColor: '#F8F8F8',
         height: '100%',

    },
    edit_account_infor: {
        display: 'flex',
        width: '100%',
    },
    edit_account_avatar: {
        width: '50px',
        height: '50px',
        marginTop: '10px',
        marginRight: '20px',
    },
    edit_account_name_acc: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: 700,
        color: '#f65e39',
    },
    edit_account_item_name: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: 700,
        color: '#333333',
    },
    edit_account_item_title: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
        color: '#666666',
    },
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        display: 'flex',

    },
    wrapper: {
        alignItems: 'end'
    }

}));


export default function EditAccount(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {(props.user && (
                <div className={classes.edit_account}>
                    <Grid container >
                        <Grid item md={6} sm={12} xs={12} className={classes.edit_account_infor}>
                            <Avatar src="" className={classes.edit_account_avatar} />
                            <Box >
                                <Typography display='inline' className={classes.edit_account_name_acc}>{props.user.username}</Typography>
                                <Typography display='inline' className={classes.edit_account_item_name}> · Thông tin tài khoản</Typography>
                                <Typography className={classes.edit_account_item_title}>Cá nhân hóa tài khoản bằng việc cập nhật thông tin của bạn

</Typography>
                            </Box>
                        </Grid>
                        <Hidden smDown >
                            <Grid item md={6} style={{ textAlign: 'right' }}>
                                <Button variant="outlined" color="secondary">Trở thành chủ nhà</Button>
                            </Grid>
                        </Hidden>
                    </Grid>
                    <Grid container style={{ marginTop: '30px' }}>
                        <Hidden smDown>
                            <Grid item md={4}>

                                <div className={classes.root}>
                                    <Tabs
                                        orientation="vertical"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs example"
                                        style={{ width: '90%', backgroundColor: '#FFFFFF', }}
                                    >
                                        <Tab style={{ backgroundColor: '#FFFFFF', }} label="Thông tin tài khoản" {...a11yProps(0)} />
                                        <Tab style={{ backgroundColor: '#FFFFFF', }} label="Mã giảm giá" {...a11yProps(1)} />
                                        <Tab style={{ backgroundColor: '#FFFFFF', }} label="Thay đổi mật khẩu" {...a11yProps(2)} />
                                    </Tabs>
                                </div>
                            </Grid>
                        </Hidden>
                        <Grid item md={8} sm={12} xs={12}>
                            <TabPanel value={value} index={0} style={{ padding: 0 }}>
                                <EditInfor user={props.user}/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <MyCoupon />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <ChangePassword />
                            </TabPanel>
                        </Grid>
                    </Grid>


                </div>
              )  || null)}
        </>
    )

}
