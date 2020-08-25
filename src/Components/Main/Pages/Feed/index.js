import React, {useEffect, useState} from 'react';
import Annotation from "../../Layout/Annotatiton";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser, userActions} from "../../../../store/modules/user";
import {postActions} from "../../../../store/modules/post";
import {GET_BY_ID, GET_LIST} from "../../../../store/types";
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import PostAnnotation from "../Post/layout/Annotation";
import {socket, socketioConnection} from "../../../../Utils/socket";



function Feed() {
    const current = useSelector( s => s.user.current || {}) ;
    const user = useSelector( s => s.user.data[current] || {}) ;
    const posts = useSelector( s => s.post.data || []) ;
    const {username, avatar, background} = user;
    const dispatch = useDispatch()
    useEffect( () => {
        if(!user.length) dispatch(userActions[GET_BY_ID](current))
        dispatch(postActions[GET_LIST](current))
    },[])
    const RenderFeed = _ => Object.values(posts).map( el => {
        return (
            <PostAnnotation key={el.id} post={el}/>
        )
    })
    return (
        <div className="Feed">
            <Annotation
                id={current}
                username={username}
                avatar={avatar}
                background={background}
                model='user'
                action={userActions}
                current/>
                <ComponentWrapper title='Лента'>
                    <RenderFeed />
                </ComponentWrapper>
        </div>
    );
}

export default Feed;
