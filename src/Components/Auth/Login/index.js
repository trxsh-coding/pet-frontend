import React, { useState } from 'react';
import ReusableForm from "../../Reusable/Form";
import { signIn } from "../../../store/modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const login = async form => {
        const status = await dispatch(signIn(form));
        if(status === 'success') history.push("/");

    };
    const form = { email:'', password:'' };
    const formStyle = {
        width:'300px'
    };
    return (
        <div className="Login" style={{zIndex:10}}>
            <ReusableForm form={form} onSubmit={login} addStyles={formStyle}/>
        </div>
    );
}

export default Login;
