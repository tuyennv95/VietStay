import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({      
  typography: {
    // fontFamily: 'Roboto',
    
    button: {
      textTransform: 'none',
      // margin:0,
      // padding:0,
    },
    a:{
      textDecoration: 'none',
      '&:hover':{
      textDecoration: 'none',
    }
  }
  
 

  }, 

  
});

export default theme;