import React from 'react';
import '../style.scss'
import ReusableInput from "../../../../Reusable/Input";
function SearchInput(props) {
    const {action, value, onChange} = props;
    return (
        <div>
            <ReusableInput
                placeholder='Поиск'
                value={value}
                children=' '
                onChange={onChange}
                action={() => action(value)}
            />
        </div>
    )
}

export default SearchInput;

