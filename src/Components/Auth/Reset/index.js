import {ForgotPassword, resetPassword, signIn} from "../../../store/modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import '../style.scss'
import React, {useState} from "react";
import ReusableForm from "../../Reusable/Form";

function Reset(props) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState(null);
    const history = useHistory();
    const {token} = props.match.params;
    console.log(history)
    const onPasswordReset = async form => {
        const data = await dispatch(resetPassword(form, token))
            .then(callback => history.push('/auth/login'))
            .catch(e => {
                setErrors(e.response.data.message)
                alert(e.response.data.message)
            })

    };
    const form = { password:'', passwordConfirm:''};
    const formStyle = {
        width:'300px'
    };
    return (
        <div className="Login" style={{zIndex:10}}>
            <ReusableForm form={form} onSubmit={onPasswordReset} addStyles={formStyle} />
        </div>
    );
}

export default Reset;