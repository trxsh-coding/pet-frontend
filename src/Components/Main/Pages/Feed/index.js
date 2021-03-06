import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../../../store/modules/user";
import {postActions} from "../../../../store/modules/post";
import {GET_BY_ID, GET_LIST} from "../../../../store/types";
import ShortPost from "../Pet/Feed/shortPost";
import ShortAnnotation from "../../Layout/Annotatiton/ShortAnnotation";
import ResponsiveContext from "../../../../Context/responsiveContext";
import './style.scss'

function Feed() {
    const current = useSelector(s => s.user.current || {});
    const user = useSelector(s => s.user.data[current] || {});
    const posts = useSelector(s => s.post.data || []);
    const {username, background, id} = user;
    const dispatch = useDispatch()
    useEffect(() => {
        if (!user.length) dispatch(userActions[GET_BY_ID](current))
        dispatch(postActions[GET_LIST](current))
    }, [])
    const RenderFeed = _ => Object.values(posts).map(el => {
        return Object.values(posts).length ? (
            <ShortPost content={el.content} id={el.id}/>
        ) : <span>Лента пока что пуста...</span>
    })

    const mobile = useContext(ResponsiveContext)

    return (
        <div className="Feed">
            {!mobile &&
            <ShortAnnotation
                username={username}
                background={background}
                id={id}
            />}
            <div className='mt-60 main-feed'>
                <RenderFeed/>
            </div>
        </div>
    );
}

export default Feed;
