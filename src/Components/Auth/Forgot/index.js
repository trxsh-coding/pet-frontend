import React, { useState } from 'react';
import ReusableForm from "../../Reusable/Form";
import {ForgotPassword, signIn} from "../../../store/modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import '../style.scss'

function Forgot() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState(null);
    const history = useHistory();
    const login = async form => {
        const data = await dispatch(ForgotPassword(form))
            .then(callback => alert('письмо выслано на почту'))
            .catch(e => {
                setErrors(e.response.data.message)
                alert(e.response.data.message)
            })

    };
    const form = { email:''};
    const formStyle = {
        width:'300px'
    };
    return (
        <div className="Login" style={{zIndex:10}}>
            <ReusableForm form={form} onSubmit={login} addStyles={formStyle} />
        </div>
    );
}

export default Forgot;
