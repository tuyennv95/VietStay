import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import axios from 'axios';
import { BASE_API } from '../../Constants/index';
const useStyles = makeStyles((theme) => ({
    icon: {
        color: "orange"
    },
    list:{
        width:'100%',
        display:'flex',
        justifyContent: 'space-between', 
        flexWrap: 'wrap',
    },
    item:{
        width:'50%',
        fontSize: '16px'
    }
}));

function Utilities(props) {
    const classes = useStyles();
    // console.log(props.roomId);
    const [util, setUtil] = React.useState([]);
    React.useEffect(() => {
        axios.get(`${BASE_API}/house-for-rents/${props.roomId}`)
            .then((response) => {
                // console.log(response.data.utilities)
                setUtil(response.data.utilities)
            })
    }, [])
    // console.log(util)
    const [list, setList] = React.useState();
    React.useEffect(() => {
        axios.get(`${BASE_API}/utilities`)
            .then((response) => {
                // console.log(response.data)
                setList(response.data);
            })
    },[])
    let filteredX = list?.filter(itemX => util?.includes(itemX?.id));
    // console.log(filteredX)
    return (

        <div style={{ margin: '30px 0' }}>
            <Typography variant="h5" gutterBottom>
                Tiện nghi chỗ ở
                            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú
                            </Typography>
            <Typography variant="h5" gutterBottom>
                Tiện ích
                            </Typography>
            <div className={classes.list}>
                {filteredX?.map((util) =>
                    <li className={classes.item} key={util.id}>
                        {util?.utilities_name}
                    </li>
                )}
            </div>


        </div>
    )
}


export default Utilities