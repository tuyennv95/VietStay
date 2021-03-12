import React from 'react'
import { Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
import { BASE_API } from '../../Constants/index';
import { BASE_URL } from '../../Constants/index';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moment from 'moment';
const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
}));

function Feedback(props) {
    const [datasource, setDatasource] = React.useState([]);
    const classes = useStyles();
    const idRoom = props.roomId;
    const idUser = useSelector((state) => state?.login?.id);
    // console.log(idUser);
    const [listBills, setListBills] = React.useState([]);
    React.useEffect(() => {
        axios.get(`${BASE_API}/bills?_where[0][houseId]=${idRoom}&_where[1][userId]=${idUser}`)
            .then((response) => {
                setListBills(response.data);
            })
    }, [idRoom, idUser])
    // var bien=0;
    // React.useEffect(() => {
    //    bien = bien+1;
    // }, [listBills])
    // console.log(listBills.length);
    const [comment, setComment] = React.useState({
        commentInput: ''
    });
    function changeCmt(e) {
        const { name, value } = e.target;
        setComment({ ...comment, [name]: value });
    }
    function sendComment() {
        axios.post(`${BASE_API}/comments`, {
            idUser: idUser,
            idRoom: idRoom,
            content: comment.commentInput,
        })
            .then((response) => {
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
        setComment({ commentInput: '' })


    }
    const [listComment, setListComment] = React.useState([]);
    React.useEffect(() => {
        axios.get(`${BASE_API}/comments?_where[0][idRoom]=${idRoom}`)
            .then(async (response) => {
                let dataFlag = [];
                setDatasource([]);
                setListComment(response.data);
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    const name = await getName(element.idUser)
                    const avt = await getAvt(element.idUser)
                    dataFlag.push({...element, username: name , avt: avt})
                }
                setDatasource(dataFlag);
            })
    },[])
    // console.log(listComment)
    async function getName(id){
      const response = await axios.get(`${BASE_API}/users/${id}`)
       
        return response.data.username;
        
    }
    async function getAvt(id){
      const response = await axios.get(`${BASE_API}/users/${id}`)
       
      return response.data?.avatar?.url || '';

        
    }
    // console.log(datasource)
   
    return (
        <>
            <div>
                <Typography variant="h5" gutterBottom>
                    Đánh giá
                            </Typography>
                {datasource.map((itemComment) => 
                    <div key={itemComment.id} style={{ display: "flex" }}>
                        <div style={{ alignSelf: "center" }}>
                            <Avatar alt="Avatar" src={`${BASE_URL}${itemComment.avt}`} />
                        </div>
                        <div style={{ alignSelf: "center", marginLeft: 10 }}>
                            <Typography variant="subtitle1" style={{color:'blue', fontWeight:'700', fontSize:'16px'}}>{itemComment.username}</Typography>
                            {/* <Typography variant="subtitle1" >{itemComment.idUser}</Typography> */}
                            <Typography variant="subtitle1" style={{ fontWeight:'500', fontSize:'14px', display:'inline'}}>{itemComment.content} -  <Typography style={{ fontSize:'10px', display:'inline'}}>{moment(itemComment.createdAt).fromNow() }</Typography></Typography>
                        </div>
                        <div >
                       

                        </div>
                    </div>
                )
                }

                {(listBills?.length != 0
                    ?
                    (
                        <div>
                            <Typography variant="h5" gutterBottom style={{ marginTop: '15px' }}>
                                Đánh giá - Comment
                            </Typography>

                            <TextField
                                id="standard-basic"
                                label="Đánh giá"
                                variant="outlined"
                                style={{ width: '70%' }}
                                name="commentInput"
                                value={comment.commentInput}
                                onChange={changeCmt}
                            /> <br />
                            {comment?.commentInput.length != 0 ?
                                <Button variant="contained" style={{ marginTop: '10px' }} onClick={sendComment}>Gửi</Button>
                                : null
                            }
                        </div>


                    ) : null)}
            </div >
        </>
    )
}



export default Feedback