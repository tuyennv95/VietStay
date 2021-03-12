import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {isLogin} from 'utils';


// const PrivateRoute = ({Component: component, ...rest }) => {
    
//         const check = useSelector((state) => state.login);
 
//     const checkLogin = check.isLogin;
//     console.log("🚀 ~ file: PrivateRouter.js ~ line 12 ~ PrivateRoute ~ checkLogin", checkLogin)
//     return (
        
//         <Route {...rest} render={props => (checkLogin === true ? (component) : (<Redirect to="/form/signin" />))} />
//     )
// }
function PrivateRoute ({component: Component, ...rest}) {
    // console.log("🚀 ~ file: PrivateRouter.js ~ line 20 ~ PrivateRoute ~ hi", isLogin());
    return (
      <Route
        {...rest}
        render={(props) => isLogin() === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/form/signin', state: {from: props.location}}} />}
      />
    )
  }


export default PrivateRoute;