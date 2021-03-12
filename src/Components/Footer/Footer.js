import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer:{
        width:'100%',
        height: '70px',
        display:'flex',
        alignItems:'center',
        marginTop: '50px',
    },
    title_footer:{
        color:'#999999',
        fontSize:'14px',
        lineHeight: '21px',
        fontWeight:'500',
        textAlign:'center',
        margin: 'auto',

    },
}));
export default function Footer() {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>

            <Typography className={classes.title_footer}>
            © 2020 Luxstay. Bản quyền thuộc về Công ty TNHH Luxstay Việt Nam.
            </Typography>
        </Box>


    )
}