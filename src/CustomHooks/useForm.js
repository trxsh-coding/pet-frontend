import { useState } from 'react'

const useForm = (form, submitCallback) => {

    const [state, setState] = useState(form);

    const handleChange = e => {
        e.persist();
        setState(state => ({...state, [e.target.name] : e.target.value}))
    };
    const customStateChange = ({key, value, index}) => {
        setState(state => {
            if(index !== undefined){
                let newArray = [...state[key]];
                newArray[index] = value;
                return {
                    ...state,
                    [key]:newArray
                }
            } else {
                return  ({...state, [key]: value})
            }
        })

    }
    const handleSubmit = e => {
        e.preventDefault();
        submitCallback()
    };

    return [state, handleChange,  customStateChange, handleSubmit ]
};

export default useForm;
