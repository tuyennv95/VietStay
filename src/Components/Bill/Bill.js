import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { roomInfoIpi } from 'Services/Api';
import Typography from '@material-ui/core/Typography';
import queryString from 'query-string';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_API } from '../../Constants/index';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, price) {
  return { name, price };
}



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  time_check: {
    fonrSize: '50px'
  }
});

export default function Bill(props) {
  const [bill, setBill] = React.useState();
  const [room, setRoom] = React.useState();
  const [district, setDistrict] = React.useState();
  const [province, setProvince] = React.useState();
  const classes = useStyles();
  const id = props.match.params.id;

  React.useEffect(() => {
    axios.get(`${BASE_API}/bills/${id}`).then(response => {
      setBill(response.data);
    })
      .catch((error) => {
        console.log("Hihi");
      })
  }, [id, district, province])


  React.useEffect(() => {
    axios.get(`${BASE_API}/house-for-rents/${bill?.houseId}`).then(response => {
      setRoom(response.data);
    })
      .catch((error) => {
        console.log("Hihi");
      })
  })

  React.useEffect(() => {
    async function GetDistrict() {
      const getList = await axios.get(`http://localhost:1337/districts?district_id=${room?.districts_id}`)
      setDistrict(getList?.data[0]?.district_name)
    }
    GetDistrict();

    async function GetProvince() {
      const getList2 = await axios.get(`http://localhost:1337/provinces?province_id=${room?.provinces_id}`)
      setProvince(getList2?.data[0]?.province_name)
    }
    GetProvince();
  })
  const adres = `${room?.address_ward}, ${district}, ${province}`;


  const rows = [
    createData('H??? v?? t??n kh??ch h??ng', `${bill?.customer_name}`),
    createData('Email', `${bill?.email}`),
    createData('Phone', `${bill?.phoneNumber}`),
    createData('T??n ph??ng', `${bill?.house_name}`),
    createData('?????a ch???', `${adres}`),
    createData('S??? ng?????i', `${bill?.number_people}`),
    createData('T???ng ti???n', `${new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(bill?.total_cost)}`),
    createData('CheckIn', `${bill?.checkIn}`),
    createData('CheckOut', `${bill?.checkOut}`),
    createData('T??nh tr???ng', 'Ch??a thanh to??n'),


  ];

  const rows2 = [
    createData('--------- Chuy???n kho???n: (Nh??n vi??n s??? c???p nh???t t??nh tr???ng thanh to??n ngay sau khi chuy???n ti???n)', ),
    createData('+ Ng??n H??ng: ', 'VietTinBank'),
    createData('+ S??? t??i kho???n:', '1234567890'),
    createData('+ Ch??? t??i kho???n: ', 'Nguyen Van Tuyen'),
    createData('+ S??? ti???n: ', `${new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(bill?.total_cost)}`),
    createData('+ N???i dung:', `${id}`),
    createData('--------- Thanh to??n t???i qu???y l??? t??n'),
    


  ];

  return (
    <>
      {(bill && (
        <div style={{ width: '100%', height: '100%', textAlign: 'center', backgroundColor: '#f2e8e8' }}>
          <Typography style={{ fontSize: '24px', color: 'black', paddingTop: '50px', paddingBottom: '30px' }} component="h2">
            T???o ????n h??ng Th??nh C??ng

</Typography>
          <TableContainer component={Paper} style={{ marginTop: '30px', width: '70%', margin: '0 auto', marginBottom: '30px' }}>

            <Table className={classes.table} aria-label="customized table">
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                  </StyledTableRow>
                ))}

              </TableBody>

            </Table>

          </TableContainer>
          <Typography style={{ fontSize: '22px', color: 'black', paddingTop: '20px', paddingBottom: '30px' }} component="h2">
            Ph????ng Th???c Thanh to??n

</Typography>
          <TableContainer component={Paper} style={{ marginTop: '30px', width: '70%', margin: '0 auto', marginBottom: '30px' }}>

            <Table className={classes.table} aria-label="customized table">
              <TableBody>
                {rows2.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                  </StyledTableRow>
                ))}

              </TableBody>

            </Table>

          </TableContainer>


          
         
          <Button variant="contained" color="secondary" style={{ marginRight: '5px', marginBottom: '15px' }}><Link to="/">Trang Ch???</Link></Button>
          {/* <Button variant="contained" color="secondary"><Link to=`${/room/:slug.{bill.houseId}}`>Xem l???i ph??ng</Link></Button> */}
        </div>

      ) || null)}
    </>
  );
}