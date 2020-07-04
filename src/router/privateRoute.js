import React, {useEffect, useState} from "react";
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    let status = useSelector(state => state.auth.status);



    return (
        <Route
            {...rest}
            render={props =>
                    status? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/auth/login", state: { from: props.location } }}
                    />
                )
            }
        />
    );
};
