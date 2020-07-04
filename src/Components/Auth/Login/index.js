import React, { useState } from 'react';
import ReusableForm from "../../Reusable/Form";
import { signIn } from "../../../store/modules/auth";
import { useDispatch } from "react-redux";
import '../style.scss'
import history from "../../../services/history";

function Login() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState(null);
    const login = async form => {
        const data = await dispatch(signIn(form))
            .then(callback => history.push("/"))
            .catch(e => {
                setErrors(e.response.data.message)
                alert(e.response.data.message)
            })

    };
    console.log(errors)
    const form = { email:'', password:'' };
    const formStyle = {
        width:'300px'
    };
    return (
        <div className="Login" style={{zIndex:10}}>
            <ReusableForm form={form} onSubmit={login} addStyles={formStyle}>
                <div className='register-link mb-10'>
                    <span>Ещё нет учетной записи? </span>
                    <span className='link'
                          onClick={() => history.push('/auth/registration')}>
                          Зарегистрироваться</span>
                </div>
            </ReusableForm>

        </div>
    );
}

export default Login;
