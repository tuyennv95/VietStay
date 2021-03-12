import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    blockBookingSuccess:{
        width:'100%',
        maxWidth: '1440px',
        textAlign:'center',
    },
    text:{
        fontSize:'24px',
        color: 'black',
    }
}));

export default function Load() {
  const classes = useStyles();
  

  return (
    <div className={classes.blockBookingSuccess}>
        <h2 className={classes.text}>Thanh Toán Thành Công</h2>

     
    </div>
  );
}
