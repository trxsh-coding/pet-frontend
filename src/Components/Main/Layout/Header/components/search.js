import React from "react";
import PropTypes from 'prop-types';
import searchIcon from "../../../../../Assets/img/search.svg";
import {useDispatch} from "react-redux";
import {searchActions} from "../../../../../store/modules/search";
import {SET, UPDATE_FIELD} from "../../../../../store/types";
import {useHistory} from 'react-router-dom'

const Search = ({value}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    function onKeyPressAction(e) {
        if (e.key === 'Enter') history.push({
            pathname: '/search',
            state: value
        })
    }

    function onPressIconAction() {
        history.push({
            pathname: '/search',
            state: value
        })
    }

    const onChangeValue = (e) => {
        dispatch(searchActions[SET]({key:'searchValue', value:e}))
    }

    return (
        <div className='search-input ml-50 flex-between flex'>
            <input type="text"
                   className=''
                   value={value}
                   placeholder={'Введите имя или породу...'}
                   onKeyPress={onKeyPressAction}
                   onChange={(e) => onChangeValue(e.target.value)}
            />
            <img src={searchIcon} alt="search-icon" className='pointer' onClick={onPressIconAction}/>
        </div>
    )
}
Search.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Search;