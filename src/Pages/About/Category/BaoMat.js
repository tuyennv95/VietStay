import React from 'react'
import Container from '@material-ui/core/Container';

function BaoMat(props) {
    return (
        <Container fixed>
            <h1>Chính Sách Bảo Mật</h1>
            <h3>Chính sách bảo mật</h3>
            <p>Luxstay xin cam đoan sẽ bảo vệ tuyệt đối những thông tin cá nhân của người sử dụng website. Chúng tôi chỉ thu thập những thông tin cần thiết và có liên quan đến việc thực hiện giao dịch cho thuê, hoặc đăng ký thuê chỗ ở. Chúng tôi sẽ lưu giữ thông tin của người sử dụng trong thời gian luật pháp quy định hoặc cho mục đích nào đó. Ngoài ra, người sử dụng, thành viên hoặc khách hàng của Luxstay có thể truy cập vào website và trình duyệt mà không cần phải cung cấp bất cứ chi tiết cá nhân nào. Vào lúc đó, bạn đang được ẩn danh và chúng tôi không thể biết bạn là ai cho đến khi bạn đăng nhập vào tài khoản cá nhân của mình.
            </p>
            <br />
            <ol>
                <li>Mục đích và phạm vi thu thập</li>
                <li>Phạm vi sử dụng thông tin</li>
                <li>Thời gian lưu trữ thông tin</li>
                <li>Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình.</li>
                <li>Cam kết bảo mật thông tin cá nhân khách hàng</li>
                <li>Cơ chế tiếp nhận và giải quyết khiếu nại liên quan đến việc thông tin cá nhân khách hàng</li>
            </ol>
        </Container >
    )
}

export default BaoMat;