import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ component: Component, ...rest }) {
    const tokenKey = () => Boolean(localStorage.getItem("token"));

    return (
        <Route
            {...rest}
            render={props => tokenKey() ? <Component {...props} /> : <Redirect to="/"/>}
            > 
        </Route>
    )
}
