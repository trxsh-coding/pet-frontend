import React from "react";
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";
import bg from '../../../../Assets/img/bg.jpg'
import useCurrentUser from "../../../../CustomHooks/useCurrentUser";
function ShortAnnotation() {
    const history = useHistory();

    const {user, current} = useCurrentUser();

    const {username, id} = user;
    const contentURL = user?.background?.contentURL

    const BackgroundStyle = {
        backgroundImage: `url(${current ? contentURL : bg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'50px',
        width:'100%'
    }
    const LinksTextDecoration = (link) => {
        const historyLink = history.location.pathname.length === 1
            ? 'feed'
            : history.location.pathname

        if(historyLink === link){
            return {
                borderBottom:'4px solid rgb(74, 118, 168)',
                paddingBottom:'3px'
            }
        } else {
            return  {
                borderBottom:'4px solid transparent',
                paddingBottom:'3px'
            }

        }
    }

    const RenderLinksBlock = _ => (
        <>
            <span style={LinksTextDecoration('feed')}
                  className='pointer'
                  onClick={() => history.push(`/`)}>Лента</span>
            <span style={LinksTextDecoration('/subscriptions')}
                  onClick={() => history.push(`/subscriptions`)}>Подписки</span>
            <span style={LinksTextDecoration('/missings')}
                  onClick={() => history.push(`/missings`)}>Поиск Пропавших</span>
        </>

    )
    return (
        <div style={BackgroundStyle} className=' short-annotation relative'>
            <div className='annotation-overlay' />
            <div className='short-annotation-wrapper'>
                <div className='username-block'>
                    <span className='pointer' onClick={() => history.push(`/user/${id}`)}>{username}</span>
                </div>
                <div className='links-block'>
                    <RenderLinksBlock />
                </div>
            </div>
        </div>
    )
}

export default ShortAnnotation;