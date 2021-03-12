import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    media2: {
        height: "50.5rem",
        width: "25rem",
    },
    media2_2: {
        height: "44rem",
        width: "25rem",
    },
    GridCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: "2rem"
    }
}));

function VeChungToi() {
    const classes = useStyles();
    return (
        <Container fixed>
            <h1>Về Luxstay</h1>
            <p>Luxstay là nền tảng chia sẻ và đặt Chỗ Nghỉ (Chỗ Ở) ra đời năm 2016.</p>
            <br />
            <p>Chúng tôi kết nối nhu cầu thuê Chỗ Nghỉ bao gồm: biệt thự nghỉ dưỡng, khách sạn, nhà riêng, chung cư… của Khách hàng đến các Chủ Nhà và ngược lại. Thông qua việc cho thuê Chỗ Nghỉ, Chủ Nhà có thể kiếm được một nguồn thu nhập cao và ổn định. Đối với Khách hàng thì đó là việc được trải nghiệm những không gian độc đáo, mới lạ, tiện nghi… với mức giá tốt nhất.</p>
            <br />
            <p>Hiện tại, Luxstay đã kết nối dịch vụ của mình đến hầu hết các địa điểm trong nước và sẵn sàng chinh phục các thị trường quốc tế sôi động, tiềm năng như Nhật Bản, Hàn Quốc… Với mạng lưới hơn 15.000 Chỗ Nghỉ được đội ngũ chuyên gia kiểm soát chất lượng, sàng lọc kỹ càng, Luxstay cung cấp những trải nghiệm du lịch thực sự đáng giá.</p>
            <br />
            <p>Để đặt Chỗ Nghỉ, bạn có thể sử dụng linh hoạt Laptop, Điện thoại thông minh, Smart Tivi… trên giao diện web và ứng dụng Luxstay. </p>
            <CardMedia
                className={classes.media}
                image="https://www.luxstay.com/trip.jpg"
                title="trip"
            />
            <Grid container spacing={3}>
                <Grid item md={6} sm={6} xs={12} className={classes.GridCenter} >
                    <h1>Về Luxstay</h1>
                    <p>Với thiết kế đẹp mắt, tính năng thông minh, Luxstay app khiến những chân trời xa xôi nằm gọn trong lòng bàn tay của bạn.</p>
                    <p>Phiên bản Android</p>
                </Grid>
                <Grid item md={6} sm={6} xs={12} className={classes.GridCenter}>
                    <CardMedia
                        className={classes.media2}
                        image="https://i.ibb.co/wKGkMfY/Phone-Copy-3.png"
                        title="Phone-Copy"
                        style={{ alignSelf: 'center' }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item md={6} sm={6} xs={12} className={classes.GridCenter} >
                    <CardMedia
                        className={classes.media2_2}
                        image="https://i.ibb.co/WHH0GMW/Homestay-Details.png"
                        title="Homestay-Details"
                        style={{ alignSelf: 'center' }}
                    />
                </Grid>
                <Grid item md={6} sm={6} xs={12} className={classes.GridCenter}  >
                    <h1>Website Luxstay</h1>
                    <p>Không chỉ cung cấp dịch vụ lưu trú, Luxstay còn là một không gian truyền cảm hứng cho các tín đồ du lịch.</p>
                    <p>Tại đây, bạn tìm thấy niềm đam mê trên những chuyến hành trình trải nghiệm.</p>
                    <p>Khám phá</p>
                </Grid>
            </Grid>
        </Container>
    )
}


export default VeChungToi;