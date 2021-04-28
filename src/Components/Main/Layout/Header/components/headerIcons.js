import React, {useState} from "react";
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";
import bookmarkIcon from "../../../../../Assets/svg/bookmark.svg";
import notificationIcon from "../../../../../Assets/svg/notification.svg";
import ReusableBadge from "../../../../Reusable/Badge";
import chatIcon from "../../../../../Assets/svg/chat.svg";

const HeaderIcons = ({count}) => {

    const history = useHistory();


    return (
        <div className="logo-navbar flex-align-center">

            <div className='ml-30 relative pointer' onClick={() => history.push('/bookmarks')}>
                <img src={bookmarkIcon}/>
            </div>
            <div className='ml-30 relative pointer' onClick={() => history.push('/notifications')}>
                <img src={notificationIcon} alt="notification-icon"/>
                {count > 0 && <ReusableBadge amount={count}/>}
            </div>
            <div className='  pointer ml-30' onClick={() => history.push('/chat')}>
                <img src={chatIcon} width={25} height={22} alt="chat-icon"/>
            </div>
        </div>
    )
}
HeaderIcons.propTypes = {
    count: PropTypes.number.isRequired,

};

export default HeaderIcons;