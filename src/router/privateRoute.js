import React, {useEffect, useState} from "react";
import {Route, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getStatus} from "../api/status";


export const PrivateRoute = ({ component: Component, ...rest }) => {
    const dispatch = useDispatch()
    const current = useSelector( s => s.user.current) ;
    const user = useSelector( s => s.user.data[current]) ;
    return (
        <Route
            {...rest}
            render={props =>
                user? (
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
