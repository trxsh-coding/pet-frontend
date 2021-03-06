import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import {postActions} from "../../../../store/modules/post";
import {GET_BY_ID} from "../../../../store/types";
import Spinner from "../../../Reusable/Spinner";
import PostAnnotation from "./layout/Annotation";
import Annotation from "../../Layout/Annotatiton";
import {petActions} from "../../../../store/modules/pet";
import ShortAnnotation from "../../Layout/Annotatiton/ShortAnnotation";
import ResponsiveContext from "../../../../Context/responsiveContext";
function Post(props) {
    const { match } = props;
    const { id } = match.params;
    const dispatch = useDispatch();
    const post = useSelector( s => s.post.data[id] || {}) ;
    const loading = useSelector( s => s.post.loading) ;
    const current = useSelector(s => s.user.current );
    const user = useSelector(s => s.user.data[current] || {});
     function initialize() {
         dispatch(postActions[GET_BY_ID](id))

    }

    const RenderPostAnnotation = _ => Object.keys(post).length ? <PostAnnotation post={post}/> : null

    useEffect(() => {
        initialize(id)
    }, [id]);
    const mobile = useContext(ResponsiveContext)

    if(loading) return <div className='transform-center'> <Spinner/> </div>

    return (
        <div className='mt_20'>
            {!mobile && <ShortAnnotation />}
            <ComponentWrapper title='Публикация' styles={{marginBottom:'20px'}}>
                <RenderPostAnnotation />
            </ComponentWrapper>
        </div>
    );
}

export default Post;
