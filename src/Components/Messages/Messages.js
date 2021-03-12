import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid,Box , Avatar, Hidden} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    messages:{
        width:'100%',
        maxWidth:'1200px',
        margin:'auto',
        marginTop:'20px',
     backgroundColor: '#F8F8F8',
      height:'100vh',

        
    },
    messages_title:{
        fontSize:'32px',
        lineHeight:'40px',
        fontWeight:900,
        color:'#222222',
    },
    messages_box_mess_name:{
        fontSize:'16px',
        lineHeight:'24px',
        fontWeight:700,
        color:'#333333',
        marginTop:'30px'
    },
    messages_box:{
        marginTop:'15px',
    },
    messages_box_mess:{
        width:'100%',
        minHeight:'120px',
        backgroundColor:'#FFFFFF',
        borderRadius:'10px',
        border:'1px solid #e2dede'
    },
    box_mess_empty:{
        fontSize:'16px',
        fontWeight:500,
        lineHeight:'24px',
        color:'#222222',
        textAlign:'center',
        paddingBottom:'25px',
    },
    messages_box_account:{
        width:'90%',
        justifyContent:'end',
        minHeight:'150px',
        backgroundColor:'#FFFFFF',
        borderRadius:'10px',
        border:'1px solid #e2dede',
    },
    account_avatar:{
        width: '60px',
        height: '60px',
        marginLeft:'calc(50% - 30px)',
       
        backgroundColor:'red',
        borderRadius:'50%',
        
    },
    account_name:{
        marginTop:'10px',
        fontSize:'16px',
        lineHeight:'24px',
        fontWeight:700,
        color:'#333333'
    }
}));
export default function Messages() {
    const classes = useStyles();
        return (
            <div className={classes.messages}>
                <Typography className={classes.messages_title}>
                    Tin nhắn
                </Typography>
                <Typography className={classes.messages_box_mess_name}>
                   Hộp thư
                </Typography>
                <Grid container className={classes.messages_box}>
                    <Grid item md={9} ms={12} xs={12} className={classes.messages_box_mess}>
                        <Typography className={classes.box_mess_empty}>Không có dữ liệu</Typography>
                    </Grid>
                    <Hidden smDown>
                    <Grid item md={3} ms={12} xs={12} style={{display: 'flex',justifyContent: 'flex-end'}}>
                            <Box className={classes.messages_box_account}>
                                <Avatar src="" className={classes.account_avatar}></Avatar>
                                <Typography align='center' className={classes.account_name}>Nguyễn Tuyên</Typography>
                            </Box>
                    </Grid>
                    </Hidden>
                </Grid>
            </div>
        )
    
}
