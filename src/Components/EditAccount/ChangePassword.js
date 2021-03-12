import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography,InputBase , Button} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    change_pass_item: {
        marginTop: '30px',
    },
    change_pass_input_text: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#666666',
    },
    change_pass_input: {

        width: '100%',
        height: '40px',
        marginTop: '10px',
        borderRadius: '5px',
        backgroundColor: '#E7E7E7',
        boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,.15)!important',
        paddingLeft: '20px',
        transition: '0.3s',
        '&:focus-within': {
            backgroundColor: '#FFFFFF'
        }
    },
}));
export default function ChangePassword() {
    const classes = useStyles();
    return (
        <div className={classes.change_pass}>
            <Box className={classes.change_pass_item}>
                <Typography className={classes.change_pass_input_text}>
                Mật khẩu hiện tại


                </Typography>
                <InputBase
                    className={classes.change_pass_input}
                    defaultValue=""
                    inputProps={{ 'aria-label': 'current-password' }}
                    type='password'

                />
            </Box>

            {/* ---------------------------- */}
            <Box className={classes.change_pass_item}>
                <Typography className={classes.change_pass_input_text}>
                Mật khẩu mới


                </Typography>
                <InputBase
                    className={classes.change_pass_input}
                    defaultValue=""
                    inputProps={{ 'aria-label': 'new-password' }}
                    type='password'

                />
            </Box>

            {/* ---------------------------- */}
            <Box className={classes.change_pass_item}>
                <Typography className={classes.change_pass_input_text}>
                Xác nhận mật khẩu mới


                </Typography>
                <InputBase
                    className={classes.change_pass_input}
                    defaultValue=""
                    inputProps={{ 'aria-label': 'new-password' }}
                    type='password'

                />
            </Box>

            {/* ---------------------------- */}
            <Box className={classes.change_pass_item}>
                <Button variant="contained" color="secondary">Cập nhật</Button>
            </Box>

        </div>
    )
}
