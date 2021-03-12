import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from '../Pages/Home/Home';
import ShowHome from '../Pages/ShowHome/ShowHome';
import PageUser from '../Pages/User/PageUser';
import Room from '../Pages/Room/Room';
import Form from '../Pages/Form/Form';
// import Admin from '../admin/src/layouts/Admin';
//import Admin from '../../admin/page/layouts/Admin';
import PrivateRouter from './PrivateRouter';
import Payment from '../Components/Payment/Payment';
import Search from '../Pages/Search/Search';
import { useSelector } from 'react-redux';
import NotFound from '../Components/NotFound/NotFound';
import Bill from 'Components/Bill/Bill';
import MyBookingRoomId from 'Components/MyBooking/MyBookingRoomId';
import ShowHomeCategory from '../Pages/ShowHomeCategory/ShowHomeCategory';
import ShowHomeCategoryCity from '../Pages/ShowHomeCategory/ShowHomeCategoryCity';
function Router() {
    const [isLogin, setIsLogin] = React.useState(null)
        // const login = useSelector((state)=> state.login);

        // const checkLogin = login.isLogin;
        // console.log("🚀 ~ file: Router.js ~ line 19 ~ Router ~ checkLogin", checkLogin)
        // React.useEffect(()=>{
        //         setIsLogin(checkLogin);   


        // },[])
        // console.log("🚀 ~ file: Router.js ~ line 16 ~ Router ~ isLogin", isLogin)
    
    return (
        <BrowserRouter>
            <Switch>




                <Route path="/" exact component={Home} />

                <Route exact path="/show" component={ShowHome} />
                <Route path="/user" component={PageUser} />
                <Route path="/room/:slug.:id" component={Room} />
                <Route path="/form/:form" component={Form} />
                <Route path="/search" component={Search} />
                <Route path="/404" component={NotFound} />
                <PrivateRouter path="/me-:slug" component={PageUser} />
                <Route exact path="/provinces/:id" component={ShowHomeCategory} />
                <Route exact path="/districts/:id" component={ShowHomeCategory} />
                <Route path="/categorycity/ha-noi.:slug" component={ShowHomeCategoryCity} />
                {/* <Route path="/me/mes" component={PageUser} /> */}
                <PrivateRouter path="/pay"  component={Payment}/>
                <PrivateRouter path="/bill/:id"  component={Bill}/>
                <PrivateRouter path="/history-booking/:id"  component={MyBookingRoomId}/>
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
