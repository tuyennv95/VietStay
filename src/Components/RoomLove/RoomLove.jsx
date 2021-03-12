import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ShowRoom from '../../Components/ShowRoom/ShowRoom';


import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_API } from 'Constants/index';





const useStyles = makeStyles((theme) => ({






}));

export default function ListProducts(props) {
    const classes = useStyles();
    const userId = props.user.id;
    const [data, setData] = React.useState();
    const [listRoom, setListRoom] = React.useState();
    const list = useSelector((state) => state.love);

    React.useEffect(() => {
        async function getData(){
            const listRoomApi = await axios.get(`${BASE_API}/house-for-rents`)
            const listDataRoomLove = await listRoomApi?.data.filter(item => list?.includes(item.id));
            setListRoom(listDataRoomLove)
        }
        getData();
    },[list])
  
    return (
            <div style={{minHeight:'100vh'}}>
                <ShowRoom data={listRoom} />

            </div>


    )
}