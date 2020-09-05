import React, {useEffect, useState} from 'react';
import '../style.scss'
import ReusableInput from "../../../../Reusable/Input";
import history from "../../../../../services/history";
function SearchInput(props) {
    const {value, action} = props;
    function onSearchAction(e) {
       action({[value]:e})
    }
    return (
        <div>
            <ReusableInput
                placeholder='Поиск'
                children={null}
                onChange={(e) => console.log(e)}
                action={(e) => onSearchAction(e)}
            />
        </div>
    )
}

export default SearchInput;
