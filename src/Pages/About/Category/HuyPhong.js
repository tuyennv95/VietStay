import React from 'react'
import Container from '@material-ui/core/Container';
import HuyPhongDetails from './HuyPhongDetails'

function HuyPhong() {
    return (
        <Container fixed>
            <h1>Chính sách hủy phòng</h1>
            <p>Cập nhật lần cuối: 07/2019</p>
            <br />
            <p>Chính sách hủy phòng</p>
            <br />
            <p>Hiện tại, Luxstay áp dụng 3 cấp chính sách hủy phòng tiêu chuẩn lần lượt là: Linh hoạt, Trung bình và Nghiêm ngặt. Các mức hủy phòng này sẽ được chủ nhà lựa chọn. Quy định cụ thể của mỗi mức hủy, bạn có thể tham khảo hình ảnh dưới đây.</p>
            <Huyphongdetail />
        </Container>
    )
}

export default HuyPhong;