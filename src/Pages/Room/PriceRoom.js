import React from 'react'
import { Typography } from '@material-ui/core'
import PriceTable from '../../Components/PriceTable/PriceTable';

function PriceRoom(props) {
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Giá Phòng
                            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Giá có thể tăng vào cuối tuần hoặc ngày lễ
                            </Typography>
            <PriceTable />

        </div>
    )
}



export default PriceRoom
