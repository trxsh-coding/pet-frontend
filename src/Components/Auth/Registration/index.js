import React, { useState } from 'react';
import ReusableForm from "../../Reusable/Form";
import { signUp} from "../../../store/modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Registration() {
    const dispatch = useDispatch();
    const history = useHistory();
    const registration = async form => {
        const status = await dispatch(signUp(form));
        if(status === 'success') history.push("/auth/login");

    };
    const form = { email:'', username:'', password:'', passwordConfirm:''};
    const formStyle = {
        width:'300px'
    };
    return (
        <div className="Registration" style={{zIndex:10}}>
            <ReusableForm form={form} onSubmit={registration} addStyles={formStyle}/>
        </div>
    );
}

export default Registration;
