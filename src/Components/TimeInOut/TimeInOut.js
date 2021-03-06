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
import Typography from '@material-ui/core/Typography';

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

export default function PriceTable(props) {
    const [room, setRoom] = React.useState([]);

    const classes = useStyles();
    const id = props.roomId;
    // React.useEffect(() => {
    //     roomInfoIpi(id).then(response => {
    //         setRoom(response.data);
    //     })
    //         .catch((error) => {
    //             console.log("Hihi");
    //         })
    // }, [])
    const rows = [
        createData('Nhận phòng- Check In', '14:00PM'),
        createData('Trả phòng - Check Out', '11:00AM'),

    ];

    return (
        <>
        <Typography style={{fontSize:'24px', color:'black', paddingTop:'50px'}} component="h2">
            Thời gian nhận phòng

</Typography>
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
        </>
    );
}