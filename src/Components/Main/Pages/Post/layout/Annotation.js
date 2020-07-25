import React, {useEffect, useState} from 'react';
import PostHeader from "./Header";
import PostBody from "./body";
import PostComments from "./comments";
import {useSelector} from "react-redux";
import '../styles.scss'

function PostAnnotation(props) {
    const {post} = props;
    const {authorId:author} = post;
    const RenderComments = _ => {
        return post && post.comments ? (
            <div className="post-comments">
                <PostComments comments={post.comments} id={post._id}/>
            </div>
        ) : <span>Комментириев еще нет</span>
    }
    return (
        <div className='flex flex-align-end PostAnnotation mb-20' >
            <div className="post-content">
                <PostHeader
                    id={author._id}
                    link={author.avatar}
                    date={post.date}
                    username={author.name}/>
                <PostBody
                    picture={post.picture}
                    amountOfComments={post.comments ? post.comments.length : 0}
                    description={post.description}
                />
            </div>
            <RenderComments />
        </div>
    );
}

export default PostAnnotation;
