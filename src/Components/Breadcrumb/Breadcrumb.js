import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ReactReduxContext } from 'react-redux';
import { roomInfoIpi } from 'Services/Api';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


export default function CustomSeparator(props) {
    const [ room, setRoom] = React.useState();
    // console.log("🚀 ~ file: Breadcrumb.js ~ line 26 ~ CustomSeparator ~ room", room)
    const id = props.roomId;
    React.useEffect(()=>{
        roomInfoIpi(id).then(response =>{
                setRoom(response.data)
        })
        .catch((error)=>{
            console.log("hihi");
        })
    },[])
    const classes = useStyles();
    // const adr = room.address_ward;
    // console.log("🚀 ~ file: Breadcrumb.js ~ line 38 ~ CustomSeparator ~ a", adr);
    // const length = adr.length;
    // console.log("🚀 ~ file: Breadcrumb.js ~ line 40 ~ CustomSeparator ~ b", length);
    // const vitri = adr.indexOf(',');
    // console.log("🚀 ~ file: Breadcrumb.js ~ line 42 ~ CustomSeparator ~ vitri", vitri)
    // if(vitri != -1){
    //     const catchuoi = adr.slice(vitri,length);
    //     console.log("🚀 ~ file: Breadcrumb.js ~ line 45 ~ CustomSeparator ~ catchuoi", catchuoi)
    // }

    return (
        <div className={classes.root}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                {/* <Link color="inherit" href="/" onClick={handleClick}>
                    VietStay
        </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Việt Nam
        </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                   {room.province}
        </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                {room.district}

        </Link> */}
                {/* <Typography color="textPrimary">Ben Nghe</Typography> */}
            </Breadcrumbs>
        </div>
    );
}