import React, {useState} from 'react';
import ReusableForm from "../../Reusable/Form";
import {signIn} from "../../../store/modules/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import '../style.scss'

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState(null);
    const login = async form => {
        const data = await dispatch(signIn(form))
            .then(callback => history.push("/"))
            .catch(e => {
                setErrors(e.response.data.message)
                alert(e.response.data.message)
            })
    };
    const form = {email: '', password: ''};
    const formStyle = {
        width: '300px'
    };
    return (
        <div className="Login" style={{zIndex: 10}}>
            <ReusableForm form={form} onSubmit={login} addStyles={formStyle}>
                <div className='register-link mb-10'>
                    <span>Ещё нет учетной записи? </span>
                    <span className='link pointer'
                          onClick={() => history.push('/auth/registration')}>
                          Зарегистрироваться</span>
                </div>
                <div className='register-link mb-10'>
                    <span>Забыли пароль?</span>
                    <span className='link'
                          onClick={() => history.push('/auth/forgotPassword')}>
                          Восстановать</span>
                </div>
            </ReusableForm>
        </div>
    );
}

export default Login;
