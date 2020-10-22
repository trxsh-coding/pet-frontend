import React, {useEffect, useState} from 'react';
import '../style.scss'
import ReusableInput from "../../../../Reusable/Input";
import history from "../../../../../services/history";
function SearchInput(props) {
    const {action, value} = props;
    const [description, setDescription] = useState(value)
    function onSearchAction(e) {
       action(e)
    }
    return (
        <div>
            <ReusableInput
                placeholder='Поиск'
                value={description}
                children={null}
                onChange={(e) => setDescription(e) }
                action={(e) => onSearchAction(e)}
            />
        </div>
    )
}

export default SearchInput;
