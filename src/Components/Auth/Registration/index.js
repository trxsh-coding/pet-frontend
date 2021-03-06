import React, {useState} from 'react';
import ReusableForm from "../../Reusable/Form";
import {signUp} from "../../../store/modules/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";


function Registration() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState(null)
    const registration = async form => {
        const data = await dispatch(signUp(form))
            .then(d => history.push("/"))
            .catch(e => setErrors(e.response.data.errors))
    };
    const form = {email: '', username: '', password: '', passwordConfirm: ''};
    const formStyle = {
        width: '300px'
    };
    return (
        <div className="Registration" style={{zIndex: 10}}>
            <ReusableForm form={form} onSubmit={registration} addStyles={formStyle} errors={errors}>
                <div className='register-link mb-10'>
                    <span>Уже есть учетная запись? </span>
                    <span className='link pointer'
                          onClick={() => history.push('/auth/login')}>
                          Войти</span>
                </div>
            </ReusableForm>
        </div>
    );
}

export default Registration;
