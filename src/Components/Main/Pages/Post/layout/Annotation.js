import React, {useEffect, useState} from 'react';
import PostBody from "./body";
import {useSelector} from "react-redux";
import '../styles.scss'
import PostContent from "./PostContent";

function PostAnnotation(props) {
    const {post} = props;
    const {authorId:author} = post;


    return (
        <div className='flex flex-align-end PostAnnotation mb-20' >
            <PostContent content={post.content}/>
            <PostBody
                author={author}
                post={post}
                description={post.description}
            />
        </div>
    );
}

export default PostAnnotation;
