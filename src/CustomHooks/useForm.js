import { useState } from 'react'

const useForm = (form, submitCallback) => {

    const [state, setState] = useState(form);

    const handleChange = e => {
        e.persist();
        setState(state => ({...state, [e.target.name] : e.target.value}))
    };

    const handleSubmit = e => {
        e.preventDefault();
        submitCallback()
    };

    return [state, handleChange, handleSubmit]
};

export default useForm;
