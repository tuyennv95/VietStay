import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { classNames } from 'classnames';
import Box from '@material-ui/core/Box';
import { Typography, Link } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';


const useStyles = makeStyles((theme) => ({
    footer_home: {
        width: '95%',
        marginTop: '15px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
    },
    footer_home_items: {
        width: '19%',
        
    },
    items1_name:{
        fontSize:'24px',
        color:'#000000',
        fontWeight:500,
        lineHeight:'21px',      
    },
    items1_fb_mess:{
        display:'flex',
        width:'80%',
        marginTop:'20px',
    },
    items1_fb_mess_name:{
        fontSize:'14px',
        fontWeight:900,
        lineHeight:'21px',
        color:'#000000',

    },
    items1_fb_mess_link:{
        fontSize:'14px',
        fontWeight:500,
        lineHeight:'21px',
        color:'#000000',
        '&:hover':{
            color:'#edbf55'
        }
    },
    items2_phone:{
        display:'flex',
        marginTop:'20px',

    },
    items2_phone_name:{
        color:'#000000',
        fontSize:'14px',
        fontWeight:900,
        lineHeight:'21px',
    },
    items2_phone_link:{
        fontSize:'14px',
        fontWeight:500,
        lineHeight:'21px',
        color:'#000000',
        '&:hover':{
            color:'#edbf55'
        }
    },
    home_item_title:{
        fontSize:'14px',
        lineHeight:'18px',
        fontWeight:'900',
        color:'#000000',
    },
    home_item_link:{
        textDecoration: 'none',
        fontSize:'14px',
        fontWeight:500,
        lineHeight:'32px',
        color:'#222',
        '&:hover':{
            color:'#f65e39',
        }
    }

}));
export default function FooterHome() {
    const classes = useStyles();


    return (
        <Box className={classes.footer_home}>
            <Box className={classes.footer_home_items}>

                <Typography className={classes.items1_name}>
                    VietStay
                </Typography>


                <Box className={classes.items1_fb_mess}>
                    <MessageIcon fontSize='large' color="secondary"/>
                    <div style={{paddingLeft:'10px'}}>
                        <Typography className={classes.items1_fb_mess_name}>
                            Messenger
                        </Typography>
                        <Link href="#" className={classes.items1_fb_mess_link}>
                            http://m.me/luxstay
                        </Link>
                    </div>
                </Box>



                <Box className={classes.items2_phone}>
                    <ContactPhoneIcon fontSize='large' color="secondary"/>
                    
                    <div style={{paddingLeft:'10px'}}>
                        <Typography className={classes.items2_phone_name}>
                            Messenger
                        </Typography>
                        <Link href="#" className={classes.items2_phone_link}>
                            0989554045
                        </Link>
                    </div>
                </Box>
            </Box>
            <Box className={classes.footer_home_items}>
                        <Typography className={classes.home_item_title}>
                            TOP HOMESTAY ĐƯỢC YÊU THÍCH
                        </Typography>   
                        <div style={{paddingTop:'25px'}}>
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay Hà Nội
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay Hồ Chí Minh
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay Đà Nẵng
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay SaPa
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay Đà Lạt
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay Vũng Tàu
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay Tam Đảo
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay Hội An
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay Hạ Long
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                HomeStay Phan Thiết
                            </Link>  <br/>   
                        </div> 



            </Box>
            <Box className={classes.footer_home_items}>
                        <Typography className={classes.home_item_title}>
                        KHÔNG GIAN ƯA THÍCH
                        </Typography>  

                        <div style={{paddingTop:'25px'}}>
                            <Link href="#" className={classes.home_item_link}>
                                Căn hộ dịch vụ
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                Biệt thự
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                Nhà riêng
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                Studio
                            </Link>  <br/>   
                            
                          
                        </div> 




            </Box>
            <Box className={classes.footer_home_items}>
                
                            <Typography className={classes.home_item_title}>
                            VỀ CHÚNG TÔI
                        </Typography>  

                        <div style={{paddingTop:'25px'}}>
                            <Link href="#" className={classes.home_item_link}>
                                Blog(đang phát triển)
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                Điều khoản
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                0989554045
                            </Link>  <br/>   
                            <Link href="#" className={classes.home_item_link}>
                                tuyennv.1995@gmail.com
                            </Link>  <br/>   
                            
                        </div>   
            </Box>
            <Box className={classes.footer_home_items}>
             
                        <Typography className={classes.home_item_title}>
                        TẢI ỨNG DỤNG VIETSTAY
                        </Typography>   
                        <div style={{paddingTop:'25px'}}>
                            <img alt="" src="https://www.luxstay.com/icons/apple-store.svg" style={{width:'120px', hight:'35px'}}></img> <br/>
                            <img alt="" src="https://www.luxstay.com/icons/google-play.svg" style={{width:'120px', hight:'35px', paddingTop:'15px'}}></img>
                        </div> 
            </Box>



        </Box>


    )
}