import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { roomInfoIpi } from 'Services/Api';

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
});

export default function PriceTable(props) {
   const [room,setRoom] = React.useState([]);

    const classes = useStyles();
    const id = props.roomId;
    React.useEffect(()=>{
        roomInfoIpi(id).then(response =>{
            setRoom(response.data);
        })
        .catch((error) =>{
            console.log("Hihi");
        })
    },[])
    const rows = [
        createData('Thứ hai - Thứ năm', `${new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(room.price)}`),
        createData('Thứ sáu - Chủ nhật', `${new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(room.price)}`),
        createData('Phí khách tăng thêm', `${new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(room.price_1_poeple_exceed)} (sau 1 khách)`),
        
    ];

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}