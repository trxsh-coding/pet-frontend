import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ShortPost from "./shortPost";
import '../styles.scss'
import {getPetPosts} from "../../../../../store/modules/post";



function PetFeed(props) {
    const { id } = props;
    const dispatch = useDispatch();
    const items = useSelector( s => s.pet.post || []);
    const post = useSelector( s => s.post.data || []);
    const petFeed = items.map(el => post[el])

    //INITIALIZE
    useEffect(() => {
        dispatch(getPetPosts(id))
    }, [id]);

    const RenderShortPost = _ => petFeed.map(el => {
        return petFeed && petFeed.length && (
            <ShortPost picture={el.picture} key={el._id} id={el._id}/>
        )
    })

    return (
        <div className="PetFeed mt-60">
            <RenderShortPost/>
        </div>
    );
}

export default PetFeed;
