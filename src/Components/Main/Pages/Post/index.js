import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import {postActions} from "../../../../store/modules/post";
import {GET_BY_ID} from "../../../../store/types";
import Spinner from "../../../Reusable/Spinner";
import PostAnnotation from "./layout/Annotation";
function Post(props) {
    const { match } = props;
    const { id } = match.params;
    const dispatch = useDispatch();
    const post = useSelector( s => s.post.data[id] || {}) ;
    const loading = useSelector( s => s.post.loading) ;

     function initialize() {
         dispatch(postActions[GET_BY_ID](id))
    }

    const RenderPostAnnotation = _ => Object.keys(post).length ? <PostAnnotation post={post}/> : null

    useEffect(() => {
        initialize(id)
    }, [id]);

    if(loading) return <div className='transform-center'> <Spinner/> </div>
    return (
        <ComponentWrapper title='Публикация'>
            <RenderPostAnnotation />
        </ComponentWrapper>
    );
}

export default Post;
