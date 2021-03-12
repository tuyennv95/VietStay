import LOGIN_SUCCESS from '../../Constants/action-type';
const initState = {
    id: '',
    jwt:'',
    username: '',
    email: '',
    password: '',
    role:'',
    avatar: '',
    isLogin: false,
};
// console.log("🚀 ~ file: login.js ~ line 5 ~ initState", initState)

export default function loginReducer(state = initState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            const inforName = action.payload;
            return Object.assign({}, state, {
                id: inforName.id,
                jwt: inforName.jwt,
                username: inforName.username,
                email: inforName.email,
                password: inforName.password,
                role: inforName.role,
                avatar: inforName.avatar,
                isLogin: inforName.isLogin,
            });
        case "LOGOUT":
            const stateLogOut = {
                id:'',
                jwt:'',
                username: '',
                email: '',
                password: '',
                role:'',
                avatar: '',
                isLogin: false,
            }
            return stateLogOut;


        default:
            return state;
    }
};