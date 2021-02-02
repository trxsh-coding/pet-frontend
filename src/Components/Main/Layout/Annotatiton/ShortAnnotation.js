import React from "react";
import {useHistory} from 'react-router-dom'
import style from '../style.scss'
import {useSelector} from "react-redux";
function ShortAnnotation() {
    const history = useHistory();
    const current = useSelector(s => s.user.current || {});
    const user = useSelector(s => s.user.data[current] || {});
    const {username, id, background} = user;
    const {contentURL} = background;
    const BackgroundStyle = {
        backgroundImage: `url(${contentURL})`,
        height:'50px'
    }
    const LinksTextDecoration = (link) => {
        const historyLink = history.location.pathname.length === 1 ?
            'feed' :
            history.location.pathname
        console.log(historyLink)
        if(historyLink === link){
            return {
                borderBottom:'4px solid rgb(74, 118, 168)',
                paddingBottom:'5px'
            }
        }
    }

    const RenderLinksBlock = _ => (
        <>
            <span style={LinksTextDecoration('feed')}
                  className='pointer'
                  onClick={() => history.push(`/`)}>Лента</span>
            <span style={LinksTextDecoration('/subscriptions')} onClick={() => history.push(`/subscriptions`)}>Подписки</span>
            <span style={LinksTextDecoration('/missings')} onClick={() => history.push(`/missings`)}>Поиск Пропавших</span>
        </>

    )
    return (
        <div style={BackgroundStyle} className='flex short-annotation'>
            <div className='username-block'>
                <span className='pointer' onClick={() => history.push(`/user/${id}`)}>{username}</span>
            </div>
            <div className='links-block'>
                <RenderLinksBlock />
            </div>
        </div>
    )
}

export default ShortAnnotation;