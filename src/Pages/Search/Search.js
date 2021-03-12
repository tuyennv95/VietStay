import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';
import Loading from '../../Components/Load/Load'
import Header from '../../Components/Header/Header';
import Category from '../../Components/Category/Category';
import ShowRoom from '../../Components/ShowRoom/ShowRoom';
import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import { BASE_API } from '../../Constants/index';
import axios from 'axios';
import Load from '../../Components/Load/Load';
import queryString from "query-string";
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

// const useStyles = makeStyles((theme) => ({
//     '@global': {

//         margin: 0,
//         padding: 0,
//         listStyle: 'none',

//         a: {
//             textDecoration: 'none',
//         }
//     },

// }));
export default function ShowHome(props) {
    const [roomInfor, setRoomInfor] = React.useState([]);
    const dispatch = useDispatch();
    // console.log("🚀 ~ file: Search.js ~ line 32 ~ ShowHome ~ roomInfor", roomInfor);
    const search1 = queryString.parse(props.location.search);
    // console.log(search1)
    const keySearch = search1.key;
    const startDateSearch = search1.checkIn;
    const endDateSearch = search1.checkOut;
    // console.log("🚀 ~ file: Search.js ~ line 35 ~ ShowHome ~ key", keySearch)
    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "i");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|U/g, "u");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
        str = str.replace(/Đ/g, "d");
        str = str.replace(/\s/g, '');
        str = str.toLowerCase();
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/ + /g, " ");
        str = str.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        return str;
    }
    // console.log(removeVietnameseTones("huyengiaothuy").includes(removeVietnameseTones("giaot")));
    const [bills, setBills] = React.useState();

    React.useEffect(() => {
        axios.get("http://localhost:1337/bills?statusPayment_in=1&statusPayment_in=2")
            // axios.get("http://localhost:1337/bills")
            .then((response) => {
                setBills(response.data)
            })
            .catch((error) =>
                console.log("loi")
            )
    }, [])
    console.log(bills)

    const search = useSelector(state => state.searchAdv);
    const numberKhach = useSelector(state => state.search);
    const startDate = moment(startDateSearch, 'DD-MM-YYYY').toDate();
    const endDate = moment(endDateSearch, 'DD-MM-YYYY').toDate();
    // console.log(startDate,startDateSearch);
    // console.log(endDate,endDateSearch);


    React.useEffect(() => {
        // const mang = ['600f0b2a3f60ed53ac6d94ef','600f12293f60ed53ac6d94f0','600fde2523d29a1b5ac97272','60102d87ada05dde5ecc034d','600fddcc23d29a1b5ac97271']


        // axios.get(`http://localhost:1337/house-for-rents?&${search.checkedNhaRieng === true ? 'id_typehouse=600fddcc23d29a1b5ac97271' : ''}&${search.checkedNhaNghi === true ? 'id_typehouse=60102d87ada05dde5ecc034d' : ''}&${search.checkedKhac === true ? 'id_typehouse_nin=600f0b2a3f60ed53ac6d94ef&id_typehouse_nin=600f12293f60ed53ac6d94f0&id_typehouse_nin=600fde2523d29a1b5ac97272&id_typehouse_nin=60102d87ada05dde5ecc034d&id_typehouse_nin=600fddcc23d29a1b5ac97271' : ''}&_where[0][price_gte]=${search.valuePriceMin}&_where[0][price_lte]=${search.valuePriceMax}&number_of_bedroom_gte=${search.numberRoom}&people_max_gte=${numberKhach.adults + numberKhach.children}`)
        axios.get(`http://localhost:1337/house-for-rents?${search.checkedChungCu === true ? 'id_typehouse=600f0b2a3f60ed53ac6d94ef' : ''}&${search.checkedBietThu === true ? 'id_typehouse=600fde2523d29a1b5ac97272' : ''}&${search.checkedHomeStay === true ? 'id_typehouse=600f12293f60ed53ac6d94f0' : ''}&${search.checkedNhaRieng === true ? 'id_typehouse=600fddcc23d29a1b5ac97271' : ''}&${search.checkedNhaNghi === true ? 'id_typehouse=60102d87ada05dde5ecc034d' : ''}&${search.checkedKhac === true ? 'id_typehouse_nin=600f0b2a3f60ed53ac6d94ef&id_typehouse_nin=600f12293f60ed53ac6d94f0&id_typehouse_nin=600fde2523d29a1b5ac97272&id_typehouse_nin=60102d87ada05dde5ecc034d&id_typehouse_nin=600fddcc23d29a1b5ac97271' : ''}&_where[0][price_gte]=${search.valuePriceMin}&_where[0][price_lte]=${search.valuePriceMax}&number_of_bedroom_gte=${search.numberRoom}&people_max_gte=${numberKhach.adults + numberKhach.children}`)
            .then(response => {
                const data = response.data;
                if (!keySearch && !startDateSearch && !endDateSearch) {
                    setRoomInfor(data);
                    // console.log(data)

                }
                else if (keySearch && !startDateSearch && !endDateSearch) {
                    var list = [];
                    if (keySearch.length < 3) {

                        setRoomInfor(list);
                    } else {
                        async function searchFn() {
                            const listWard = await data.filter((house) => removeVietnameseTones(house.address_ward).includes(removeVietnameseTones(keySearch)) === true);

                            const listRoomApi = await axios.get(`${BASE_API}/house-for-rents`);

                            const listQuanInRoom = await listRoomApi?.data.map((room) => room.districts_id);
                            const listQuanApi = await axios.get(`${BASE_API}/districts?_limit=10000`);
                            const listQuanDetai = await listQuanApi?.data.filter(quan => listQuanInRoom.includes(quan.district_id))
                            const listDataQuan = await listQuanDetai.filter(quan => removeVietnameseTones(quan.district_name).includes(removeVietnameseTones(keySearch)));
                            const listDataIdQuan = await listDataQuan.map((quan) => quan.district_id)
                            const listRoomQuan = await data.filter(house => listDataIdQuan.includes(house.districts_id))

                            const listTinhInRoom = await listRoomApi?.data.map((room) => room.provinces_id);
                            const listTinhApi = await axios.get(`${BASE_API}/provinces`);
                            const listTinhDetai = await listTinhApi?.data.filter(tinh => listTinhInRoom.includes(tinh.province_id))
                            const listDataTinh = await listTinhDetai.filter(tinh => removeVietnameseTones(tinh.province_name).includes(removeVietnameseTones(keySearch)));
                            const listDataIdTinh = await listDataTinh.map(tinh => tinh.province_id);
                            const listRoomTinh = await data.filter(house => listDataIdTinh.includes(house.provinces_id))
                            const dataSearch = listWard.concat(listRoomQuan, listRoomTinh);
                            setRoomInfor(dataSearch);

                            // console.log(listQuanDetai)
                            // const listDataTinh2 = await listQuanDetai.filter(quan => console.log(removeVietnameseTones(quan.district_name)));
                            // const listDataTinh3 = await listQuanDetai.filter(quan => console.log(removeVietnameseTones(keySearch)));
                        }
                        searchFn();

                    }



                }
                else if (!keySearch && startDateSearch && endDateSearch) {
                    
                        const listBill = bills?.filter(bill => moment(bill?.checkIn)?.isBetween(startDate, endDate, 'day', '[]') == true || moment(bill?.checkOut)?.isBetween(startDate, endDate, 'day', '[]') == true || moment(startDate)?.isBetween(bill?.checkIn, bill?.checkOut, 'day', '[]') === true || moment(endDate)?.isBetween(bill?.checkIn, bill?.checkOut, 'day', '[]') === true);

                        
                        console.log(listBill)
                        let listBillLoai = listBill.map(item => { return item.houseId })
                        console.log(listBillLoai)

                        const filterBillRoom = data?.filter(room => !listBillLoai?.includes(room?.id));
                        console.log(filterBillRoom)

                        setRoomInfor(filterBillRoom);
                   



                }
                else if (keySearch && startDateSearch && endDateSearch) {
                    async function searchFn() {
                        const listWard = await data.filter((house) => removeVietnameseTones(house.address_ward).includes(removeVietnameseTones(keySearch)) === true);

                        const listRoomApi = await axios.get(`${BASE_API}/house-for-rents`);

                        const listQuanInRoom = await listRoomApi?.data.map((room) => room.districts_id);
                        const listQuanApi = await axios.get(`${BASE_API}/districts?_limit=10000`);
                        const listQuanDetai = await listQuanApi?.data.filter(quan => listQuanInRoom.includes(quan.district_id))
                        const listDataQuan = await listQuanDetai.filter(quan => removeVietnameseTones(quan.district_name).includes(removeVietnameseTones(keySearch)));
                        const listDataIdQuan = await listDataQuan.map((quan) => quan.district_id)
                        const listRoomQuan = await data.filter(house => listDataIdQuan.includes(house.districts_id))

                        const listTinhInRoom = await listRoomApi?.data.map((room) => room.provinces_id);
                        const listTinhApi = await axios.get(`${BASE_API}/provinces`);
                        const listTinhDetai = await listTinhApi?.data.filter(tinh => listTinhInRoom.includes(tinh.province_id))
                        const listDataTinh = await listTinhDetai.filter(tinh => removeVietnameseTones(tinh.province_name).includes(removeVietnameseTones(keySearch)));
                        const listDataIdTinh = await listDataTinh.map(tinh => tinh.province_id);
                        const listRoomTinh = await data.filter(house => listDataIdTinh.includes(house.provinces_id))
                        const dataSearch1 = listWard.concat(listRoomQuan, listRoomTinh);


                        const listBill = bills?.filter(bill => moment(bill.checkIn)?.isBetween(startDate, endDate, 'day', '[]') == true || moment(bill.checkOut)?.isBetween(startDate, endDate, 'day', '[]') == true || moment(startDate)?.isBetween(bill?.checkIn, bill?.checkOut, 'day', '[]') === true || moment(endDate)?.isBetween(bill?.checkIn, bill?.checkOut, 'day', '[]') === true);

                        // console.log(listBill)
                        let listBillLoai = listBill.map(item => { return item.houseId })
                        // console.log(listBillLoai)

                        const filterBillRoom = dataSearch1?.filter((room) => !listBillLoai?.includes(room?.id))

                        // const dataSearch2 = dataSearch1.concat(filterBillRoom);
                        setRoomInfor(filterBillRoom)
                    }
                    searchFn();
                    // console.log(filterBillRoom);



                }



            })
            .catch((error) => {
                console.log(error);
            })

    }, [keySearch, startDateSearch, endDateSearch, numberKhach, search,bills])
    //    const [dataRooms, setDataRooms] = React.useState();

    // if(startDateSearch && endDateSearch === "Invalid date"){
    //     const listBill = bills?.filter(bill=> moment(startDate)?.isBetween(bill?.checkIn, bill?.checkOut, 'day' , '[)'));
    //     let listA = listBill?.map(itemBillIdRoom => {
    //         return itemBillIdRoom?.houseId;
    //     })
    //     let listB = roomInfor?.filter(roomItem => !listA.includes(roomItem.id))
    //     console.log(listB)
    //     console.log('aa')

    // }




    // const classes = useStyles();
    // React.useEffect(() => {
    //     axios.get("http://localhost:1337/house-for-rents?_limit=20")
    //         .then(response => {
    //             setRoomInfor(response.data);
    //         }).catch((error) => {
    //             console.log("lỗi");
    //         })
    // }, [])
    // const token = document.cookie;

    // const token1 = token.slice(token.indexOf("admin=") + 6, token.indexOf(","));

    // axios.get('http://localhost:1337/users', {
    //     headers: {
    //         Authorization: `Bearer ${token1}`,
    //     },
    // })
    //     .then(response => {
    //         // Handle success.
    //     })
    //     .catch(error => {
    //         // Handle error.
    //         console.log('An error occurred:', error.response);
    //     });
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <ThemeProvider theme={theme}>

                <Header />
                <Category />
                <Slider />
                <ShowRoom data={roomInfor} />
                <Footer />



            </ThemeProvider >
        </div>
    )
}