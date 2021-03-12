import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import KingBedIcon from '@material-ui/icons/KingBed';
import { Box } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
// import CheckIcon from '@material-ui/icons/Check';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Switch from '@material-ui/core/Switch';
import Hidden from '@material-ui/core/Hidden';
import Slider from '@material-ui/core/Slider';
import {useDispatch} from 'react-redux';


const useStyles = makeStyles((theme) => ({

  category: {
    marginTop: '100px',
    width: '95%',
    margin: 'auto',
  },
  // ------------------------------------------------------------
  category_button_species: {
    margin: theme.spacing(1),
    position: 'relative',
    '&:focus-within': {
      backgroundColor: '#c51162',
      "& $button_species_click": {
        display: 'inline-block',
      }
    },
    [theme.breakpoints.down('960')]: {
      display: 'none',
    }

  },
  button_species_click: {
    position: 'absolute',
    width: '310px',
    height: '315px',
    backgroundColor: '#FFFFFF',
    top: '130%',
    left: 0,
    display: 'none',
    border: '1px solid #c6c9d1',
    borderRadius: '5px',
    zIndex: 999,
    '&:before': {
      content: '""',
      top: '-6px',

      left: '55px',
      transform: 'rotate(45deg)',
      height: '10px',
      width: '10px',
      borderTop: '1px solid #c6c9d1',
      borderLeft: '1px solid #c6c9d1',
      position: 'absolute',
      background: '#fff',
    }

  },
  button_species_click_select: {
    width: '80%',
    height: '78%',
    marginTop: '15px',
    margin: '0px auto',
  },
  // -------------------------------------------------------------
  category_button_bookfast: {
    margin: theme.spacing(1),
    '&:focus-within': {
      backgroundColor: '#c51162',
    },
    [theme.breakpoints.down('960')]: {
      display: 'none',
    }
  },
  // ----------------------------------------------------------
  category_button_sale: {
    margin: theme.spacing(1),
    '&:focus-within': {
      backgroundColor: '#c51162',
    },
    [theme.breakpoints.down('960')]: {
      display: 'none',
    }
  },
  // -----------------------------------------------------
  category_button_price: {
    margin: theme.spacing(1),
    position: 'relative',
    '&:focus-within': {
      backgroundColor: '#c51162',
      "& $button_price_click": {
        display: 'inline-block',
      }
    },
    [theme.breakpoints.down('960')]: {
      display: 'none',
    }

  },
  button_price_click: {
    position: 'absolute',
    width: '310px',
    height: '380px',
    backgroundColor: '#FFFFFF',
    top: '130%',
    left: 0,
    display: 'none',
    borderRadius: '5px',
    border: '1px solid #c6c9d1',
    zIndex: '10',
    '&:before': {
      content: '""',
      top: '-6px',

      left: '55px',
      transform: 'rotate(45deg)',
      height: '10px',
      width: '10px',
      borderTop: '1px solid #c6c9d1',
      borderLeft: '1px solid #c6c9d1',
      position: 'absolute',
      background: '#fff',
    }

  },
  button_price_click_select: {
    width: '80%',
    height: '80%',
    marginTop: '15px',
    margin: '0px auto',
  },
  // -----------------------------------------------
  category_button_exptrip: {
    margin: theme.spacing(1),
    position: 'relative',
    '&:focus-within': {
      backgroundColor: '#c51162',
      "& $button_exptrip_click": {
        display: 'inline-block',
      }
    },

  },
  button_exptrip_click: {
    position: 'absolute',
    width: '250px',
    height: '230px',
    backgroundColor: '#FFFFFF',
    top: '130%',
    left: 0,
    display: 'none',
    borderRadius: '5px',
    border: '1px solid #c6c9d1',
    zIndex: 200,
    '&:before': {
      content: '""',
      top: '-6px',

      left: '85px',
      transform: 'rotate(45deg)',
      height: '10px',
      width: '10px',
      borderTop: '1px solid #c6c9d1',
      borderLeft: '1px solid #c6c9d1',
      position: 'absolute',
      background: '#fff',
    }

  },
  button_exptrip_click_select: {
    width: '80%',
    height: '70%',
    marginTop: '15px',
    margin: '0px auto',
  },
  // --------------------------------------------------------
  category_button_bedroom: {
    margin: theme.spacing(1),
    position: 'relative',
    '&:focus-within': {
      backgroundColor: '#c51162',
      "& $button_bedroom_click": {
        display: 'inline-block',
      }
    },
    [theme.breakpoints.down('960')]: {
      display: 'none',
    }
  },
  button_bedroom_click: {
    position: 'absolute',
    width: '250px',
    height: '140px',
    backgroundColor: '#FFFFFF',
    top: '130%',
    left: 0,
    display: 'none',
    borderRadius: '5px',
    border: '1px solid #c6c9d1',
    zIndex: '10',
    '&:before': {
      content: '""',
      top: '-6px',

      left: '55px',
      transform: 'rotate(45deg)',
      height: '10px',
      width: '10px',
      borderTop: '1px solid #c6c9d1',
      borderLeft: '1px solid #c6c9d1',
      position: 'absolute',
      background: '#fff',
    }

  },
  button_bedroom_click_select: {
    width: '80%',
    height: '50%',
    marginTop: '15px',
    margin: '0px auto',
    display: 'flex',
    justifyContent: 'space-between',
  },

  // --------------------------------------------------------
  category_button_other: {
    margin: theme.spacing(1),
    position: 'relative',

    '&:focus-within': {
      backgroundColor: '#c51162',
      "& $button_other_click": {
        display: 'inline-block',
      }
    }
  },
  button_other_click: {
    position: 'absolute',
    width: '860px',
    height: '500px',
    backgroundColor: '#FFFFFF',
    top: '130%',
    right: '-300px',

    display: 'none',
    borderRadius: '5px',
    border: '1px solid #c6c9d1',
    zIndex: 999,
    '&:before': {
      content: '""',
      top: '-6px',

      left: '59%',
      transform: 'rotate(45deg)',
      height: '10px',
      width: '10px',
      borderTop: '1px solid #c6c9d1',
      borderLeft: '1px solid #c6c9d1',
      position: 'absolute',
      background: '#fff',
      [theme.breakpoints.down('1200')]: {
        display: 'none',
      }
    },
    [theme.breakpoints.down('960')]: {
      width: '100vw!important',
      height: '100vh!important',
      position: 'fixed!important',
      top: '80px!important',
      left: '0!important',
      marginTop: '0!important',

      padding: '0!important',

    },
    [theme.breakpoints.between(960, 1076)]: {
      left: '0!important'

    },
    [theme.breakpoints.between(1077, 1200)]: {
      right: '0!important'

    },


  },
  // -------------------------------------------

  // -------------------------

  divider: {
    width: '95%',
    height: '1px',
    margin: 'auto',
    marginBottom: '5px',
    marginTop: '5px',

  },
  other_click_select_loaiphong: {
    width: '95%',
    margin: 'auto',
    height: '80%',
    paddingTop: '35px',

  },
  list_scoll: {
    width: '100%',
    maxWidth: "100%",

    position: 'relative',
    overflow: 'auto',
    maxHeight: 380,
    [theme.breakpoints.down('960')]: {
      maxHeight: '70vh!important',


    }
  },
  // ----------------------code button cancel check
  button_cancel_check: {
    marginTop: '10px',
    width: '85%',
    display: 'flex',
    textAlign: 'right',
    justifyContent: 'flex-end',


  },
  button_cancel: {
    marginRight: '15px',
    paddingTop: '2px',

  },
  button_check: {
    padding: '3px 10px 0px 10px',
    backgroundColor: '#f77307',
    borderRadius: '30px',


  }




}));

export default function IconLabelButtons() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedChungCu: false,
    checkedHomeStay: false,
    checkedNhaRieng: false,
    checkedBietThu: false,
    checkedNhaNghi: false,
    checkedKhac: false,
    
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
// --------------Trai nghiem chuyen di -------------
//   const handleChangeTraiNghiem = (event) => {
//     setValue(event.target.value);
//   }
//   const [value, setValue] = React.useState('');
// function setDefaultTaiNghiem(){
//   setValue('')
// }
  

  // ----------set Tien-----------
  function valuetext(valuePrice) {
    return `${valuePrice}`;
  }
  const [valuePrice, setValuePrice] = React.useState([100000, 5000000]);
  const handleChangePrice = (event, newValue) => {
    setValuePrice(newValue);
  };

  // ----------set so phong-----------------
  const [numberRoom, setNumberRoom] = React.useState(1);
  function truRoom() {
    setNumberRoom(numberRoom - 1)
    if (numberRoom < 2) {
      setNumberRoom(1)
    }
  }
  function congRoom() {
    setNumberRoom(numberRoom + 1)
  }
  const dispatch = useDispatch();
function setSearchAdv(){
  // console.log(state , value, valuePrice,numberRoom);
  dispatch({
    type: "SEARCH_ADV",
    payload: {
      checkedChungCu: state.checkedChungCu,
      checkedHomeStay: state.checkedHomeStay,
      checkedNhaRieng: state.checkedNhaRieng,
      checkedBietThu : state.checkedBietThu,
      checkedNhaNghi: state.checkedNhaNghi,
      checkedKhac: state.checkedKhac,
      valuePriceMin: valuePrice[0],
      valuePriceMax: valuePrice[1],
      numberRoom: numberRoom,
    }
  })
  setState({
    checkedChungCu: false,
    checkedHomeStay: false,
    checkedNhaRieng: false,
    checkedBietThu: false,
    checkedNhaNghi: false,
    checkedKhac: false,
  });
  setValuePrice([100000,5000000]);
  setNumberRoom(1);
  
}

  return (
    <div className={classes.category}>
      <Button
        variant="contained"
        color="default"
        className={classes.category_button_species}
        startIcon={<ApartmentIcon />}
      >
        Loại chỗ ở
            <Box className={classes.button_species_click}>
          <Box className={classes.button_species_click_select}>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={state.checkedChungCu} onChange={handleChange} name="checkedChungCu" />}
                label="Căn hộ chung cư"
              />
            </FormGroup>


            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={state.checkedBietThu} onChange={handleChange} name="checkedBietThu" />}
                label="Biệt thự"
              />
            </FormGroup>

            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={state.checkedHomeStay} onChange={handleChange} name="checkedHomeStay" />}
                label="Home Stay"
              />
            </FormGroup>

            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={state.checkedNhaRieng} onChange={handleChange} name="checkedNhaRieng" />}
                label="Nhà riêng"
              />
            </FormGroup>

            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={state.checkedNhaNghi} onChange={handleChange} name="checkedNhaNghi" />}
                label="Nhà Nghỉ"
              />
            </FormGroup>

            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={state.checkedKhac} onChange={handleChange} name="checkedKhac" />}
                label="Khác"
              />
            </FormGroup>

          </Box>
          {/* <Divider className={classes.divider} orientation="vertical" /> */}

          {/* <Box className={classes.button_species_click_confirm}>
            <Box className={classes.button_click_del_check}>
              <div className={classes.button_cancel_check}>
                <Typography color="textSecondary" className={classes.button_cancel}>
                  Hủy
                                        </Typography>
                <Typography color="textSecondary" className={classes.button_check}>
                  Áp dụng
                                            </Typography>
              </div>
            </Box>
          </Box> */}
        </Box>
      </Button>

      {/* <Button
        variant="contained"
        color="default"
        className={classes.category_button_bookfast}
        startIcon={<FlashOnIcon />}
      >
        Đặt phòng nhanh
      </Button> */}

      {/* <Button
        variant="contained"
        color="default"
        className={classes.category_button_sale}
        startIcon={<TrendingDownIcon />}
      >
        Giá ưu đãi
      </Button> */}

      <Button
        variant="contained"
        color="default"
        className={classes.category_button_price}
        startIcon={<MonetizationOnIcon />}
      >
        Giá chỗ ở
            <Box className={classes.button_price_click}>
          <Box className={classes.button_price_click_select}>
            <Typography variant="subtitle2" align="left" color="textPrimary">
              Giá phòng(1 đêm)
      </Typography>
            <Typography style={{ marginTop: '30px', marginBottom: '30px' }} id="range-slider" gutterBottom>
            {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(valuePrice[0])} - {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(valuePrice[1])}
            </Typography>
            <Slider
              value={valuePrice}
              onChange={handleChangePrice}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              max={5000000}
              min={100000}
            />


          </Box>
          {/* <Divider className={classes.divider} orientation="vertical" />

          <Box className={classes.button_price_click_confirm}>
            <Box className={classes.button_click_del_check}>
              <div className={classes.button_cancel_check}>
                <Typography color="textSecondary" className={classes.button_cancel}>
                  Hủy
                                        </Typography>
                <Typography color="textSecondary" className={classes.button_check}>
                  Áp dụng
                                            </Typography>
              </div>
            </Box>
          </Box> */}

        </Box>
      </Button>

      {/* <Button
        variant="contained"
        color="default"
        className={classes.category_button_exptrip}
        startIcon={<BusinessCenterIcon />}
      >
        Trải nghiệm chuyến đi
                <Box className={classes.button_exptrip_click}>
          <Box className={classes.button_exptrip_click_select}>
            <FormControl component="fieldset">
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeTraiNghiem}>
                <FormControlLabel value="giadinh" control={<Radio />} label="Gia đình" />
                <FormControlLabel value="capdoi" control={<Radio />} label="Cặp đôi" />
                <FormControlLabel value="bbqparty" control={<Radio />} label="BBQ Party" />
                <FormControlLabel value="congviec" control={<Radio />} label="Công việc" />

              </RadioGroup>
            </FormControl>
          </Box>
          <Divider className={classes.divider} orientation="vertical" />

          <Box className={classes.button_exptrip_confỉrm}>
            <Box className={classes.button_click_del_check}>
              <div className={classes.button_cancel_check}>
                <Typography color="textSecondary" className={classes.button_cancel} onClick={setDefaultTaiNghiem}>
                  Hủy
                                        </Typography>

              </div>
            </Box>
          </Box>
        </Box>
      </Button> */}

      <Button
        variant="contained"
        color="default"
        className={classes.category_button_bedroom}
        startIcon={<KingBedIcon />}
      >
        Phòng ngủ
              <Box className={classes.button_bedroom_click}>
          <Box className={classes.button_bedroom_click_select}>



            <IndeterminateCheckBoxIcon color="secondary" onClick={truRoom} />
            <Typography color="textSecondary">
              {numberRoom}
            </Typography>
            <AddCircleOutlineIcon color="secondary" onClick={congRoom} />

          </Box>
          {/* <Divider className={classes.divider} orientation="vertical" /> */}

          {/* <Box className={classes.button_bedroom_click_confirm}>
            <Box className={classes.button_click_del_check}>
              <div className={classes.button_cancel_check}>
                <Typography color="textSecondary" className={classes.button_cancel}>
                  Hủy
                                        </Typography>
                <Typography color="textSecondary" className={classes.button_check}>
                  Áp dụng
                                            </Typography>
              </div>

            </Box>
          </Box> */}


        </Box>
      </Button>

      <Button
        variant="contained"
        color="default"
        className={classes.category_button_other}

      >
        Thêm bộ lọc
        <Box className={classes.button_other_click}>
          <Box className={classes.button_other_click_select}>

            <Box className={classes.other_click_select_loaiphong}>
              <List className={classes.list_scoll} disablePadding={false}>
                {/* ----------------------------------------------------------------------- */}
                <Hidden mdUp>
                  <Grid container  >
                    <Grid item md={6} xs={6} sm={6}>
                      <Typography color="textPrimary" align="left" variant="h6">
                        Đặt phòng nhanh
                  </Typography>
                    </Grid>
                    <Grid item md={6} xs={6} sm={6} align="right">
                      <Switch
                        checked={state.checkedbookfast}
                        onChange={handleChange}
                        name="checkedbookfast"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                    </Grid>
                    <Divider className={classes.divider} orientation="vertical" />

                  </Grid>
                </Hidden>
                {/* ----------------------------------------------------------------------- */}
                <Hidden mdUp>

                  <Grid container  >
                    <Grid item md={12} xs={6} sm={6} >
                      <Typography color="textPrimary" align="left" variant="h6">
                        Giá ưu đãi

                  </Typography>
                    </Grid>
                    <Grid item md={4} xs={6} sm={6} align="right">
                      <Switch
                        checked={state.checkedsale}
                        onChange={handleChange}
                        name="checkedsale"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                    </Grid>
                    <Divider className={classes.divider} orientation="vertical" />

                  </Grid>
                </Hidden>
                {/* ---------------------------------------------------------------------------- */}
                <Hidden mdUp>

                  <Grid container  >
                    <Grid item md={12} xs={12} sm={12}>
                      <Typography color="textPrimary" align="left" variant="h6">
                        Loại chỗ ở
                  </Typography>
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                          label="Căn hộ chung cư"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                          label="Biệt thự"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                          label="Home Stay"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                          label="Nhà riêng"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
                          label="Căn hộ dịch vụ"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} xs={6} sm={6} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
                          label="Khác"
                        />
                      </FormGroup>
                    </Grid>
                    <Divider className={classes.divider} orientation="vertical" />

                  </Grid>
                </Hidden>

                {/* ----------------------------------------------------------------------- */}
                <Hidden mdUp>

                  <Grid container  >
                    <Grid item md={6} sm={6} xs={6}>
                      <Typography color="textPrimary" align="left" variant="h6">
                        Phòng ngủ

                  </Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} align="right">
                      <Box className={classes.button_bedroom_click_select}>
                        <IndeterminateCheckBoxIcon color="secondary" />
                        <Typography color="textSecondary">
                          1
                      </Typography>
                        <AddCircleOutlineIcon color="secondary" />

                      </Box>
                    </Grid>
                    <Divider className={classes.divider} orientation="vertical" />

                  </Grid>
                </Hidden>

                {/* ---------------------------------------------------------------------------- */}
                {/* ----------------------------------------------------------------------- */}
                <Hidden mdUp>

                  <Grid container  >
                    <Grid item md={12} xs={12} sm={12}>
                      <Typography color="textPrimary" align="left" variant="h6">
                        Giá phòng(1 đêm)

                  </Typography>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedpriceA} onChange={handleChange} name="checkedpriceA" />}
                          label="đ0 - 500,000"
                        />
                      </FormGroup>
                    </Grid>

                    <Grid item md={6} sm={12} xs={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedpriceB} onChange={handleChange} name="checkedpriceB" />}
                          label="đ500,000 - 1,000,000"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedpriceC} onChange={handleChange} name="checkedpriceC" />}
                          label="đ1,000,000 - 2,000,000"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedpriceD} onChange={handleChange} name="checkedpriceD" />}
                          label="đ2,000,000 - 3,000,000"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedpriceE} onChange={handleChange} name="checkedpriceE" />}
                          label="đ3,000,000 - 5,000,000"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedpriceF} onChange={handleChange} name="checkedpriceF" />}
                          label="đ5,000,000 - 10,000,000"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} align="left">
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedpriceG} onChange={handleChange} name="checkedpriceG" />}
                          label=">đ10,000,000"
                        />
                      </FormGroup>
                    </Grid>

                    <Divider className={classes.divider} orientation="vertical" />

                  </Grid>
                </Hidden>

                {/* ---------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------ */}
                <Hidden mdUp>

                  <Grid container  >
                    <Grid item md={12} sm={12} xs={12}>
                      <Typography color="textPrimary" align="left" variant="h6">
                        Loại phòng
                  </Typography>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12} align="left">
                      <FormControlLabel
                        control={<Checkbox checked={state.checked_nguyen_can} onChange={handleChange} name="checked_nguyen_can" />}
                        label="Nguyên căn"
                      />
                    </Grid>
                    <Grid item md={4} sm={12} xs={12} align="left">
                      <FormControlLabel
                        control={<Checkbox checked={state.checked_phong_rieng} onChange={handleChange} name="checked_phong_rieng" />}
                        label="Phòng riêng"
                      />
                    </Grid>
                    <Divider className={classes.divider} orientation="vertical" />

                  </Grid>
                </Hidden>

                {/* --------------------------------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------- */}
                <Grid container  >
                  <Grid item md={12} sm={12} xs={12}>
                    <Typography color="textPrimary" align="left" variant="h6">
                      Tiện ích gia đình
                  </Typography>
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_tre_nho} onChange={handleChange} name="checked_tre_nho" />}
                      label="Phù hợp với trẻ nhỏ"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_dem_bo_sung} onChange={handleChange} name="checked_dem_bo_sung" />}
                      label="Đệm bổ sung"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_nosmoking} onChange={handleChange} name="checked_nosmoking" />}
                      label="Không hút thuốc"
                    />
                  </Grid>
                  <Divider className={classes.divider} orientation="vertical" />

                </Grid>
                {/* --------------------------------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------- */}
                <Grid container  >
                  <Grid item md={12} sm={12} xs={12}>
                    <Typography color="textPrimary" align="left" variant="h6">
                      Tiện ích bếp
                  </Typography>
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_bep_dien} onChange={handleChange} name="checked_bep_dien" />}
                      label="Bếp điện"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_bep_gas} onChange={handleChange} name="checked_bep_gas" />}
                      label="Bếp Gas"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_tu_lanh} onChange={handleChange} name="checked_tu_lanh" />}
                      label="Tủ lạnh"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_lo_vi_song} onChange={handleChange} name="checked_lo_vi_song" />}
                      label="Lò vi sóng"
                    />
                  </Grid>
                  <Divider className={classes.divider} orientation="vertical" />

                </Grid>
                {/* --------------------------------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------- */}
                <Grid container  >
                  <Grid item md={12} sm={12} xs={12}>
                    <Typography color="textPrimary" align="left" variant="h6">
                      Tiện ích giải trí
                  </Typography>
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_thu_cung} onChange={handleChange} name="checked_thu_cung" />}
                      label="Thú cưng"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_BBQ} onChange={handleChange} name="checked_BBQ" />}
                      label="BBQ"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_canh_quan_dep} onChange={handleChange} name="checked_canh_quan_dep" />}
                      label="Cảnh quan đẹp"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_huong_bien} onChange={handleChange} name="checked_huong_bien" />}
                      label="Hướng biển"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_gan_san_golf} onChange={handleChange} name="checked_gan_san_golf" />}
                      label="Gần sân golf"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_cau_ca} onChange={handleChange} name="checked_cau_ca" />}
                      label="Câu cá"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_be_boi_ca_nhan} onChange={handleChange} name="checked_be_boi_ca_nhan" />}
                      label="Bể bơi cá nhân"
                    />
                  </Grid>
                  <Divider className={classes.divider} orientation="vertical" />

                </Grid>
                {/* --------------------------------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------- */}
                <Grid container  >
                  <Grid item md={12} sm={12} xs={12}>
                    <Typography color="textPrimary" align="left" variant="h6">
                      Tiện ích phòng
                  </Typography>
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_wifi} onChange={handleChange} name="checked_wifi" />}
                      label="Wifi"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_TV} onChange={handleChange} name="checked_TV" />}
                      label="TV"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_dieu_hoa} onChange={handleChange} name="checked_dieu_hoa" />}
                      label="Điều hòa"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_may_giat} onChange={handleChange} name="checked_may_giat" />}
                      label="Máy giặt"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_dau_goi_xa} onChange={handleChange} name="checked_dau_goi_xa" />}
                      label="Dầu gội, dầu xả"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_giay_ve_sinh} onChange={handleChange} name="checked_giay_ve_sinh" />}
                      label="Giấy vệ sinh"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_giay_an} onChange={handleChange} name="checked_giay_an" />}
                      label="Giấy ăn"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_nuoc_khoang} onChange={handleChange} name="checked_nuoc_khoang" />}
                      label="Nước khoáng"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_khan_tam} onChange={handleChange} name="checked_khan_tam" />}
                      label="Khăn tắm"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_kem_danh_rang} onChange={handleChange} name="checked_kem_danh_rang" />}
                      label="Kem đánh răng"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_xa_phong_tam} onChange={handleChange} name="checked_xa_phong_tam" />}
                      label="Xà phòng tắm"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_may_say} onChange={handleChange} name="checked_may_say" />}
                      label="Máy sấy"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_internet} onChange={handleChange} name="checked_internet" />}
                      label="Internet"
                    />
                  </Grid>
                  <Divider className={classes.divider} orientation="vertical" />

                </Grid>
                {/* --------------------------------------------------------------------------- */}
                <Grid container  >
                  <Grid item md={12} sm={12} xs={12}>
                    <Typography color="textPrimary" align="left" variant="h6">
                      Tiện ích nổi bật
                  </Typography>
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_may_chieu_phim} onChange={handleChange} name="checked_may_chieu_phim" />}
                      label="Máy chiếu phim"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_ghe_massage} onChange={handleChange} name="checked_ghe_massage" />}
                      label="Ghế massage"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_smart_tivi} onChange={handleChange} name="checked_smart_tivi" />}
                      label="Smart Tivi"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} xs={12} align="left">
                    <FormControlLabel
                      control={<Checkbox checked={state.checked_tu_dung_ruou} onChange={handleChange} name="checked_tu_dung_ruou" />}
                      label="Tủ đựng rượu"
                    />
                  </Grid>

                  <Divider className={classes.divider} orientation="vertical" />

                </Grid>
                {/* --------------------------------------------------------------------------- */}

              </List>
            </Box>

          </Box>
          <Box className={classes.button_other_click_confirm}>
            <Box className={classes.button_click_del_check} marginTop="15px">
              <div className={classes.button_cancel_check}>
                <Typography color="textSecondary" className={classes.button_cancel}>
                  Hủy
                                        </Typography>
                <Typography color="textSecondary" className={classes.button_check}>
                  Áp dụng
                                            </Typography>
              </div>
            </Box>

          </Box>


        </Box>
      </Button>
      < Button variant="contained"
        color="secondary" onClick={setSearchAdv}>Tìm kiếm</Button>
    </div>
  );

}