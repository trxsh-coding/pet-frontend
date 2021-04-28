import React, {useState} from "react";
import PropTypes from 'prop-types';
import ReusableImage from "../../../../Reusable/Image";
import dropdownIcon from "../../../../../Assets/svg/dropdown.svg";
import ReusableDropdown from "../../../../Reusable/Dropdown";
import {logout} from "../../../../../store/modules/auth";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

const UserHeaderInfo = ({id, avatar, username}) => {
    const [dropdown, setDropdown] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch()

    async function onCookieDelete() {
        document.cookie = "jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        history.push('/auth/login')
        await dispatch(logout())
    }

    return (
        <div className='user-info flex-align-center '>
            <div className='flex-align-center relative'>

                <div onClick={() => history.push(`/user/${id}`)} className='pointer'>
                    <ReusableImage
                        size='40px'
                        rounded
                        fromServer
                        link={avatar}
                    />
                </div>
                <span className='pl-15 font-16 light-weight pr-10 pointer'
                      onClick={() => setDropdown(!dropdown)}>{username}</span>
                <div className='pointer' onClick={() => setDropdown(!dropdown)}
                     style={{height: '100%', width: '20px'}}>
                    <img src={dropdownIcon} alt="dropdownIcon"/>
                </div>
                <ReusableDropdown visible={dropdown} action={(payload) => setDropdown(payload)}>
                <span className='light-weight pointer'
                      onClick={() => history.push(`/user/${id}`)}>Моя страница</span>
                    <div className='mt-10'>
                        <span className='light-weight pointer' onClick={() => onCookieDelete()}>Выйти</span>
                    </div>
                </ReusableDropdown>
            </div>
        </div>

    )
}
UserHeaderInfo.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

export default UserHeaderInfo;